
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardCss from './css/result.module.css';
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
        <Card style={{ width: '37rem', textAlign: 'center', padding: "20px" }}>
          <Card.Text className={CardCss.resultTitle}>  You should consider choosing <i>{firstLine}</i> !! </Card.Text>
          <Card.Body>
            <Card.Text className={CardCss.resultText}>{restOfLines}</Card.Text>
          </Card.Body>
        </Card>
        </Container>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <h3 className={CardCss.resultTitle}>Other options you may explore</h3>
</div>
        <Container className={CardCss.container3}>
        <Container className={CardCss.container2}>
          <Card style={{ width: '28rem', textAlign: 'center' }}>
            <Card.Text className={CardCss.resultText}> Property Insurance</Card.Text>
          </Card>
        </Container>

        <Container className={CardCss.container2}>
          <Card style={{ width: '28rem', textAlign: 'center' }}>
            <Card.Text className={CardCss.resultText}>Liability Insurance</Card.Text>
          </Card>
        </Container>
      
    </Container>

    
    </div>
    
      
    );
  }

export default Result