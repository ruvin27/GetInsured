import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardCss from "./css/Card.module.css";
import { Link } from "react-router-dom";
import Logo from "./images/logo.jpg";

function CardInfo() {
	return (
		<Container className={CardCss.container}>
			<Row>
				<Col lg={6} md={12}>
					<Card className={CardCss.card}>
            
						<Card.Body>
            <div style={{ width: '100%', height: '0', paddingBottom: '56%', position: 'relative' }}>
      <iframe
        src="https://giphy.com/embed/3o6gbchrcNIt4Ma8Tu"
        width="100%"
        height="100%"
        style={{ position: 'absolute', pointerEvents: 'none' }} // Disable pointer events
        frameBorder="0"
        title="Giphy Embed"
        allowFullScreen={false} // Prevent full-screen mode
        draggable="false" // Disable drag interactions
      ></iframe>
    </div>
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
