import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardCss from "./css/Card.module.css";
import { Link } from "react-router-dom";

function CardInfo() {
	return (
		<Container className={CardCss.container}>
			<Row>
				<Col lg={6} md={12}>
					<Card className={CardCss.card}>
            
						<Card.Body>
						<div style={{ width: '100%', height: '0', paddingBottom: '56%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
					<iframe
						src="https://giphy.com/embed/3o6gbchrcNIt4Ma8Tu"
						style={{ position: 'absolute', pointerEvents: 'none', top: 0, left: 0, width: '100%', height: '100%', margin: 'auto' }}
						frameBorder="0"
						title="Giphy Embed"
						allowFullScreen={false}
						draggable="false"
					></iframe>
				</div>

							<Card.Title className={CardCss.frontTitle}>Are you a small business owner? We are here to help you!!</Card.Title>
							<Card.Text className={CardCss.frontText}>We give you the wings to fly. Our insurance solutions are tailored to your needs.</Card.Text>

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
