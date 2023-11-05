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
  const [isLoading, setIsLoading] = useState(false); // Step 1: Define the state variable
  const navigate = useNavigate();
  

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

  

  const handleSubmit = async () => {
    setIsLoading(true); // Set loading state to true

    questions[questionCount].answer = displayOptions;
    let temp = "";
    for (let question of questions) {
      temp +=  question.question + " "+ question.answer + " ";
    } 
    // console.log(temp);
    try {
      const response = await axios.post('http://localhost:5000/getresponse', {
        prompt: temp,
      });

      console.log(response.data);
      console.log(response.data[0].message.content)
      localStorage.setItem('response', response.data[0].message.content)
    } catch (error) {
      console.error('Error:', error);
      
    } finally {
      setIsLoading(false); // Set loading state to false once you receive a response
      
    navigate("/result")
    }
    
  }

	return (
		<div>
      {isLoading ? "Loading..." : 
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
			</Container>}
		</div>
	);
}

export default QuestionsCard