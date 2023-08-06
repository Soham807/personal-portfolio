import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import React, { useRef } from 'react';
import { fetchToCurl } from 'fetch-to-curl';
import { wait } from "@testing-library/user-event/dist/utils";



export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  var Send_to_AI = "";

  const clearFields = () => {
    setEmail('');
  }

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const [data, setData]=useState(null);
  const [message2, setMessage] = useState("");

  function getData(val){
    setData(val.value)
    setMessage(val.target.value)
  }

  let var3 = "lol"

  const handleClick = () => {
    let myString = message2.toString();
    let trimmedString = myString.trim();
    let formattedString = trimmedString.replace(/\s+/g, '-');
    const url = 'URL to my cloud hosted AI' + formattedString;
    setMessage("")

    console.log(fetchToCurl(url));

    fetch(url)
      .then((response) => response.json())


      .then(response => {
        console.log(JSON.stringify(response))
        const hehe = JSON.stringify(response)
        console.log(hehe)
        var3 = hehe.substring(3, hehe.length - 1);

        console.log(var3)
        
        document.getElementById('lolll').textContent = var3;
      })
      


  }


  return (
    <section id="Chat">
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row lg={5} md={6} xl={5}>
            <Col lg={12} md={6} xl={5} className="boi">
              <h3 className="aititle">Talk to my personal AI<br></br> & learn more about me!</h3>
              <h4 className="aihead">This Artificial Intelligence model has been trained using personal data that I created to describe myself in a more personal way!<br></br><br></br>When you ask questions to this AI, make sure to promt it with my name (Soham). An example of a question would be:<br></br>What are Soham's hobbies?<br></br><br></br>Lastly, make sure to wait around 10 to 20 seconds for a response from the AI!</h4>
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            </Col>
            {/* <Col xs={12} md={6} xl={7}> */}
              
            {/* <div className="new-email-bx"> */}

            <Col lg={12} md={6} xl={7} className="col2">
              <div >
                <input className="inpai" type="text" onChange={getData} value={message2} placeholder="Type what you want to ask!"/>
                
                
                
                <button 
                className="blockk" 
                onClick={handleClick}
                type="submit"
                
                ><span>{"Submit"}</span></button>
              </div>
              
              <div className="answerai" id="lolll" placeholder="Please give it at least 10 to 20 seconds to load!"><span></span></div>
              


              

            </Col>

              {/* <button className="blockk">
                
                Chat
              
              </button> */}
            {/* </div> */}
            
            {/* </Col> */}
          </Row>
        </div>
      </Col>
    </section>
  )
}
