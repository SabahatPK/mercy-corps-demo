import React, {Fragment} from 'react';
import {Table, Card, Button,Dropdown, Tabs, Tab} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import '../styles/myPage.css'


function MyTable (props) {
    console.log(props);
  

    const [projectName, projectStatus,projectStart, projectEnd, projectBudget] = props.data.rowInfo   
   
    
    return ( 
        <Fragment>
            <h3>{props.data.pageTitle}</h3>


            <Card className="tableCards">
  <Card.Header>
  <Dropdown className="alignleft" >
  <Dropdown.Toggle variant="success" id="dropdown-basic" size="sm">
   Program One
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Show All</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Project Two</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    <Button variant="primary" size="sm" className="alignright">+ Add new project</Button>

  </Card.Header>
 
</Card>

<Card className="tableCards">
  <Card.Header>
  <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Project">
    
  </Tab>
  <Tab eventKey="profile" title="Sites">
    
  </Tab>
  <Tab eventKey="contact" title="Stakeholders" disabled>
   
  </Tab>
</Tabs>

  </Card.Header>
 
</Card>

            <Card>
    <Card.Header>{props.data.projectTitle}</Card.Header>
  <Card.Body>
    
    <Table striped bordered hover>
  <thead>
    <tr>     
      <th>Name <FontAwesomeIcon icon={faArrowAltCircleDown} /></th>      
      <th>Status</th>
      <th>Start Date</th>
      <th>End Date</th>
      <th>Budget v Actual</th>
    </tr>
  </thead>
  <tbody>
    <tr>     
    
    <td onClick={props.data.propFunc}>{projectName}</td>
    <td>{projectStatus}</td>
    <td>{projectStart}</td>
    <td>{projectEnd}</td>
    <td>{projectBudget}</td>
    </tr>
  </tbody>
</Table>
  </Card.Body>
</Card>

        
</Fragment>
     );
}

// const MyTable = (props) => {
//     console.log(props);

//     const [projectName, projectStatus,projectStart, projectEnd, projectBudget] = props.data.rowInfo   
   
    
//     return ( 
//         <Fragment>
//             <h3>{props.data.pageTitle}</h3>


//             <Card className="tableCards">
//   <Card.Header>
//   <Dropdown className="alignleft" >
//   <Dropdown.Toggle variant="success" id="dropdown-basic" size="sm">
//    Program One
//   </Dropdown.Toggle>

//   <Dropdown.Menu>
//     <Dropdown.Item href="#/action-1">Show All</Dropdown.Item>
//     <Dropdown.Item href="#/action-2">Project Two</Dropdown.Item>
//   </Dropdown.Menu>
// </Dropdown>
//     <Button variant="primary" size="sm" className="alignright">+ Add new project</Button>

//   </Card.Header>
 
// </Card>

// <Card className="tableCards">
//   <Card.Header>
//   <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
//   <Tab eventKey="home" title="Project">
    
//   </Tab>
//   <Tab eventKey="profile" title="Sites">
    
//   </Tab>
//   <Tab eventKey="contact" title="Stakeholders" disabled>
   
//   </Tab>
// </Tabs>

//   </Card.Header>
 
// </Card>

//             <Card>
//     <Card.Header>{props.data.projectTitle}</Card.Header>
//   <Card.Body>
    
//     <Table striped bordered hover>
//   <thead>
//     <tr>     
//       <th>Name <FontAwesomeIcon icon={faArrowAltCircleDown} /></th>      
//       <th>Status</th>
//       <th>Start Date</th>
//       <th>End Date</th>
//       <th>Budget v Actual</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>     
    
//     <td onClick={props.data.propFunc}>{projectName}</td>
//     <td>{projectStatus}</td>
//     <td>{projectStart}</td>
//     <td>{projectEnd}</td>
//     <td>{projectBudget}</td>
//     </tr>
//   </tbody>
// </Table>
//   </Card.Body>
// </Card>

        
// </Fragment>
//      );
// }
 
export default MyTable;

