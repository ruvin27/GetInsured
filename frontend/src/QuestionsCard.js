import { Container } from "react-bootstrap";
import CardCss from "./css/questions.module.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import questions from "./questions.js";

function QuestionsCard() {
	const [questionCount, setQuestionCount] = useState(0);
	const [displayquestion, setDisplayQuestion] = useState(questions[0]);
	const [displayOptions, setDisplayOptions] = useState("");

	console.log(questions);

	const setNextQuestion = () => {
		if (questionCount < questions.length - 1) {
			const nextQuestion = questions[questionCount + 1];
			setDisplayQuestion(nextQuestion);
			setQuestionCount(questionCount + 1);
			questions[questionCount].answer = displayOptions;
		}
	};

	const setPreviousQuestion = () => {
		if (questionCount <= questions.length - 1) {
			const nextQuestion = questions[questionCount - 1];
			setDisplayQuestion(nextQuestion);
			setQuestionCount(questionCount - 1);
		}
	};

	const handleDropdownChange = (event) => {
		const option = event.target.value;
		setDisplayOptions(option);
	};
	console.log(displayOptions);

	// console.log(questionCount);
	// console.log(displayquestion);
	return (
		<div>
			<Container className={CardCss.container}>
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

				<div className={CardCss.buttonContainerLeft}>
					{questionCount >= 1 && (
						<Button variant="primary" className={CardCss.button} style={{ width: "120px" }} onClick={() => setPreviousQuestion()}>
							Previous
						</Button>
					)}
				</div>
				<div className={CardCss.buttonContainerRight}>
					<Button variant="primary" className={CardCss.button} style={{ width: "120px" }} onClick={() => setNextQuestion()}>
						{questionCount !== questions.length - 1 ? "Next" : "Submit"}
					</Button>
				</div>
			</Container>
		</div>
	);
}

export default QuestionsCard;
