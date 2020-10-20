import React from 'react';
import { Container,Row,Col} from 'react-bootstrap';
import '../styles/myPage.css'
import MyTable from './Table';




const Page = (props) => {
    
    return ( 
        <Container fluid className = "myPage">
  <Row>
    <Col ><MyTable data={props.data}/></Col>
  </Row>
</Container>

     );
}
 
export default Page;