import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardCss from './css/Card.module.css';
import { Link } from 'react-router-dom';

function CardInfo() {
  return (
    <Container className={CardCss.container}>

    
    <Card style={{ width: '28rem',textAlign:'center' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Are you a small business owner? We are there to help you!!</Card.Title>
        <Card.Text>
          Business insurance to mmet your business needs.
        </Card.Text>
        <Link to="/questions">
        <Button variant="primary">Get Insured</Button>
        </Link>
      </Card.Body>
    </Card>
    </Container>
  );
}

export default CardInfo;