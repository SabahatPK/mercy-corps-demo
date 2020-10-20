import React, {useState, Fragment} from 'react';
import { Container,Row,Col} from 'react-bootstrap';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Page from './components/Page';

function App() {
  // let allPageData = {
  //   "pageTitle": "This is my page title",
  //   "projectTitle": "This is my project title",
  //   "rowInfo":["Project One","In Progress","Oct 1, 2020","Sep 30, 2021","30%"],
  //   propFunc: function(){console.log("Clicking on project title from App component!!")}
  //   }

  //Using hooks instead: 
    const [allPageData1,setAllPageData1] = useState({
      "pageTitle": "This is my page title (from hooks)",
      "projectTitle": "This is my project title (from hooks)",
      "rowInfo":["Project One","In Progress","Oct 1, 2020","Sep 30, 2021","30%"],
      propFunc: function(){console.log("Clicking on project title from App component!!")}
      })
  return (
    <Fragment>
    <Navbar myClassName={"topbar justify-content-end"} myLinks={{"Heading1": "TolaData", "Heading2": "ICON"}}  />
    <Container>
  <Row>
  <Col><Navbar myClassName={"flex-column sidebar"} myLinks={{"Heading1": "Portfolio","Heading2": "Project","Heading3": "Dashboard"}}  /></Col>
    <Col xs={10}><Page data={allPageData1}/></Col>
    
  </Row>
</Container>
    
    
    </Fragment>
  );
}

export default App;
