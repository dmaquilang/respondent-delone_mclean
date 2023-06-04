import React, {useState} from 'react'
import { Row, Col, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/logo.png'
import InputError from '../../Components/InputError/InputError';
import { createEmail } from '../../Helpers/API/responsesAPI';
import './Home.css';

function Home() {
  const [email, setEmail] = useState("")
  const [isValid, setIsValid] = useState(false)
  const navigate = useNavigate()
  
  function handleInputChange (e){
    setEmail(e.target.value)
  }

  async function handleContinue() {
    if(handleParticipate()){
        const response = await createEmail(email)
        console.log(response)
        if(response.data) {
          console.log(response.data)
          localStorage.setItem('email', JSON.stringify(email))
            navigate("/objective/" + response.data.id)
        }
    }
  }

  function handleParticipate(){
    setIsValid(!email.endsWith("@up.edu.ph"))
    if(email.endsWith("@up.edu.ph")){
      return true
    }
    return false
  }

  return (
    <Container>
      <Row className='d-flex justify-content-center'>
        <Col lg={12} className='d-flex justify-content-center logo' style={{marginTop:"5px"}}><img src={logo} width={200} height={100}/></Col>
      </Row>

      <Row className='d-flex justify-content-center'>
        <Col lg={12} className='d-flex justify-content-center home-title wrap' style={{marginTop:"50px"}}>
          An Empirical Evaluation on the University of the Philippines Student Academic Information System Using DeLone and McLean Information System Success Model
        </Col>
      </Row>

      <Row className='d-flex justify-content-center'> 
            <Col lg={6} className='d-flex justify-content-center'>
              <Form.Control
              className="email"
              type="text"
              value={email}
              placeholder="Enter email"
              onChange={handleInputChange}
            />
            <InputError isValid={isValid} message="This field is required."/>
        </Col>  
      </Row>

      <Row className='d-flex justify-content-center'>
        <Col lg={12} className='d-flex justify-content-center'>
            <button type='button' className='btn btn-lg btn-primary' onClick={handleContinue}>Participate</button>
        </Col>
      </Row>

      <Row>
        <hr style={{marginTop: "10%",height:"5px",background:"#7C1216", opacity:"1", borderColor:"#7C1216"}}/>
        <hr className="pt-0 mt-0" style={{marginTop: "0%", height:"5px",background:"#F6AA2C", opacity:"1", borderColor:"#F6AA2C"}}/>
        <hr className="pt-0 mt-0" style={{height:"5px",background:"#0B4423", opacity:"1", borderColor:"#0B4423"}}/>
      </Row>

    </Container>
  )
}

export default Home