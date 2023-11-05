import { Container } from 'react-bootstrap';
import CardCss from "./css/questions.module.css";
import {useState} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import questions from './questions.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function QuestionsCard() {
	const [questionCount, setQuestionCount] = useState(0);
	const [displayquestion, setDisplayQuestion] = useState(questions[0]);
	const [displayOptions, setDisplayOptions] = useState(questions[0].answer);
  const [animateCard, setAnimateCard] = useState(''); // Initialize the animation state
  const [prompt, setPrompt] = useState("");
  const navigate = useNavigate();
  const [otherValue, setOtherValue] = useState('')

  const setNextQuestion = () => {
    if (questionCount < questions.length - 1) {
      questions[questionCount].answer = displayOptions; // Set the answer for the current question
      setAnimateCard('slide-out-right'); // Apply the exit animation
      const nextQuestion = questions[questionCount + 1];
      setDisplayQuestion(nextQuestion);
      setQuestionCount(questionCount + 1);
      setDisplayOptions(nextQuestion.options[0]); // Set the default value as the first option
      setTimeout(() => setAnimateCard('slide-in-left'), 1200); // Apply the enter animation after 1.2 seconds
    }


  };
  
  const setPreviousQuestion = () => {
    if (questionCount > 0) {
      questions[questionCount].answer = displayOptions; // Set the answer for the current question
      setAnimateCard('slide-out-left'); // Apply the exit animation
      const prevQuestion = questions[questionCount - 1];
      setDisplayQuestion(prevQuestion);
      setQuestionCount(questionCount - 1);
      setDisplayOptions(prevQuestion.answer || prevQuestion.options[0]); // Set the default value as the first option or the previous answer
      setTimeout(() => setAnimateCard('slide-in-right'), 1200); // Apply the enter animation after 1.2 seconds
    }
  };
  

	const handleDropdownChange = (event) => {
		const option = event.target.value;
		setDisplayOptions(option);
	};

  const handleInputChange = (e) =>{
    const {value} = e.target;
    setOtherValue(value)
    setDisplayOptions(value)
    
  }

  const handleSubmit = async () => {
    questions[questionCount].answer = displayOptions;
    let temp = "";
    for (let question of questions) {
      temp +=  question.question + " "+ question.answer + " ";
    } 
    // console.log(temp);
    setPrompt(temp);
    const response = await axios.post('http://localhost:5000/getresponse', {
      prompt : temp
    }).then((res) => {
      console.log(res.data)
      console.log(res.data[0].message.content)
      localStorage.setItem('response', res.data[0].message.content)
    })
    navigate("/result")
  }

	return (
		<div>
			<Container className={`${CardCss.container} ${animateCard ? CardCss[animateCard] : ''}`}>
				<Card className={`${CardCss.card} text-center`}>
					<Card.Body>
						<Card.Title className={CardCss.cardTitle}>Question {questionCount+1}/{questions.length}</Card.Title>
						<Card.Text className={CardCss.cardText}>{displayquestion.question}</Card.Text>
						<Card.Text className={CardCss.cardText}>
							<select className={CardCss.select} value={displayOptions} onChange={handleDropdownChange}>
								{displayquestion.options.map((optionVal) => (
									<option key={optionVal} value={optionVal}>
										{optionVal}
									</option>
								))}
							</select>
              {displayOptions === 'Other' && (
                <input type="text" name='othervalue' placeholder="Enter the value"  value={otherValue} className={CardCss.select2} onChange={handleInputChange}/>
              )}
						</Card.Text>
					</Card.Body>
				</Card>
        <div className={CardCss.progressBarContainer}>
  <div className={CardCss.progressBar}>
    <div
      className={CardCss.progressBarFill}
      style={{
        width: `${((questionCount + 1) / questions.length) * 100}%`,
      }}
    ></div>
  </div>
  <div className={CardCss.progressText}>
    Question {questionCount + 1} of {questions.length}
  </div>
</div>
				<div className={CardCss.buttonContainerLeft}>
					{questionCount >= 1 && (
						<Button variant="primary" className={CardCss.button} style={{ width: "120px" }} onClick={() => setPreviousQuestion()}>
							Previous
						</Button>
					)}
				</div>
				<div className={CardCss.buttonContainerRight}>
        {questionCount !== questions.length - 1 ? <Button variant="primary" className={CardCss.button} style={{ width: "120px" }} onClick={setNextQuestion}>
						Next
            </Button> : <Button variant="primary" className={CardCss.button} style={{ width: "120px" }} onClick={handleSubmit}>
						Submit
            </Button>}
					
				</div>
			</Container>
		</div>
	);
}

export default QuestionsCard