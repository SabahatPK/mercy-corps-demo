import React from 'react';
import { Nav} from 'react-bootstrap';
import '../styles/myPage.css'

const Navbar = (props) => {



    

let headingsArray = []
    for (const property in props.myLinks) {  
  headingsArray.push(props.myLinks[property])

}   


    return (
        <Nav
  activeKey="/home"
  className={props.myClassName}
 
>
    
    {headingsArray.map(eachItem=><Nav.Item key={eachItem}>
    <Nav.Link href="/home">{eachItem}</Nav.Link>
  </Nav.Item>)}
  
</Nav>
      );
}
 
export default Navbar;