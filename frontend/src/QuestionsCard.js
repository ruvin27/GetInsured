import { Container } from 'react-bootstrap';
import CardCss from "./css/Card.module.css";
import {useState} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import questions from './questions.js';
import Navbar from "./Navbar.js";



function QuestionsCard(){
const [questionCount, setQuestionCount] = useState(0);
const [displayquestion, setDisplayQuestion] = useState(questions[0]);
const[displayOptions, setDisplayOptions] = useState('');

console.log(questions);

const setNextQuestion = () => {
    if (questionCount < questions.length - 1) {
      const nextQuestion = questions[questionCount + 1];
      setDisplayQuestion(nextQuestion);
      setQuestionCount(questionCount + 1);
      questions[questionCount].answer = displayOptions
    }
  };

const setPreviousQuestion = () =>{
    if (questionCount <= questions.length - 1) {
        const nextQuestion = questions[questionCount - 1];
        setDisplayQuestion(nextQuestion);
        setQuestionCount(questionCount - 1);
      }
}

const handleDropdownChange = (event) =>{
    const option = event.target.value;
    setDisplayOptions(option)
    
}
console.log(displayOptions)

// console.log(questionCount);
// console.log(displayquestion);
return(
    <div>
        <Navbar/>
    
        <Container className={CardCss.container}>

         <Card style={{ width: '28rem',textAlign:'center' }}>
            <Card.Body>
            <Card.Text> {displayquestion.question} </Card.Text>
            <Card.Text>
                <select value={displayOptions} onChange={handleDropdownChange}>
                    {displayquestion.options.map(optionVal =>{
                        //console.log(optionVal)
                      return  <option key={optionVal} value = {optionVal}> {optionVal} </option>
                    })}
                 </select>   
               
            </Card.Text>
            </Card.Body>
        </Card>
        {questionCount >=1 &&(
        <Button variant="primary" onClick={() => setPreviousQuestion()}> Previous </Button>

        )}
        
        <Button variant="primary" onClick={() =>setNextQuestion()}> {questionCount != (questions.length - 1) ? "Next" : "Submit"}  </Button>

        </Container>
        </div>
    )
}

export default QuestionsCard