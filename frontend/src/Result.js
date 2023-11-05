import Navbar from "./Navbar.js";
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardCss from './css/Card.module.css';

function Result(){
    return (
        <div>
        <Navbar/>
    
        <Container className={CardCss.container}>
            <Card.Text> Result: </Card.Text>

         <Card style={{ width: '28rem',textAlign:'center' }}>
            <Card.Body>
            <Card.Text>
                Result

            </Card.Text>
            </Card.Body>
        </Card>
        </Container>
        

        </div>
    )
}

export default Result