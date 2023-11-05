import Navbar from "./Navbar.js";
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardCss from './css/Card.module.css';
import { useEffect } from "react";

function Result() {
    useEffect(() => {
      const resp = localStorage.getItem('response');
      console.log(resp);
    }, []);
  
    // Split the response into two parts: the first line and the rest
    const responseParts = localStorage.getItem('response').split('\n');
    const firstLine = responseParts[0];
    const restOfLines = responseParts.slice(1).join('\n');
  
    return (
      <div>
        <Container className={CardCss.container}>
          
  
          <Card style={{ width: '28rem', textAlign: 'center' }}>
          <Card.Text> <h3> Insurance type:{firstLine}</h3> </Card.Text>
            <Card.Body>
              
              <Card.Text>{restOfLines}</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }

export default Result