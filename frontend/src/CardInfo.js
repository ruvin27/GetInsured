import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardCss from "./css/Card.module.css";
import { Link } from "react-router-dom";
import Logo from "./images/logo.png";

function CardInfo() {
	return (
		<Container className={CardCss.container}>
			<Row>
				<Col lg={6} md={12}>
					<Card className={CardCss.card}>
						<Card.Img className={CardCss.cardImage} variant="top" src={Logo} />
						<Card.Body>
							<Card.Title className={CardCss.cardTitle}>Are you a small business owner? We are here to help you!!</Card.Title>
							<Card.Text className={CardCss.cardText}>We give you the wings to fly. Our insurance solutions are tailored to your needs.</Card.Text>

							<Link to="/questions">
								<Button className={CardCss.button} variant="primary">
									Get Insured
								</Button>
							</Link>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default CardInfo;
