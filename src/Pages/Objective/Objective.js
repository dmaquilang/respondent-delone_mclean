import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import logo from '../../Assets/logo.png'
import './Objective.css';

function Objective() {
    const navigate = useNavigate()
    const { id } = useParams()
    return (
        <Container>
            <Row className='d-flex justify-content'>
                <Col lg={12} className='d-flex justify-content logo'><img src={logo} width={150} height={75}/></Col>
            </Row>
    
            <Row>
                <Col className='d-flex justify-content objective-title wrap' style={{marginTop:"10px", marginBottom:"10px"}}>
                    About
                </Col>
            </Row>

          <Row>
            <Col className='d-flex justify-content content wrap'>
                <h4 style={{color:'#0B4423'}}>Identification of the Researcher</h4>
                <p className='body'>I am Deson G. Maquilang, a fourth year student of the Computer Science program under the College of Science of the University of the Philippines Cebu. I am currently conducting a special project entitled <b> "An Empirical Evaluation on the University of the Philippines Student Academic Information System Using DeLone and McLean Information System Success Model"
                  </b>. This special project is in fulfillment of the requirements for the degree Bachelor of Science in Computer Science.</p>

                <h4 style={{color:'#0B4423'}}>Purpose of the Study</h4>
                <p className='body'>The general objective of this study is to evaluate the effectiveness of the Student Academic Information System (SAIS) at the University of the Philippines by applying the information system success model developed by DeLone and McLean. Specificially,</p>
                <p className='body'>1. Develop a web survey application for the respondents;</p>
                <p className='body'>2. Develop a web application for admin that is capable of calculating the necessary statistical calculations, and can generate graphs and tables;</p>
                <p className='body'>3. Utilize the DeLone and McLean information system success model in the web application developed; and</p>
                <p className='body'>4. Generate recommendations from the results of the developed web application to improve the Student Academic Information System.</p>
            </Col>
          </Row>

          <Row>
            <Col className='d-flex justify-content content wrap'>
              <h4 style={{color:'#0B4423'}}>Procedure</h4>
              <p className='body'>This online web survey application that has been created will function as the tool for the investigation, presenting particulars about the study, acquiring informed consent, gathering demographic data, and posing close-ended queries through the application of the range scale. Furthermore, this utilizes the DeLone and McLean system success model variables to obtain comprehensive insights into users' perspectives regarding SAIS. The duration of this survey may take approximately 5-10 minutes.</p>
            </Col>
          </Row>
    
          <Row>
            <div className='d-flex justify-content-end' style={{marginTop:"50px"}}>
                <button type='button' className='btn btn-lg btn-secondary' onClick={()=>navigate("/")}>Back</button>
                <button type='button' className='btn btn-lg btn-primary' style={{marginLeft:"10px"}} onClick={()=>navigate("/ethics/" + id)}>Continue</button>
            </div>
          </Row>
    
          <Row>
            <hr style={{marginTop: "3%",height:"5px",background:"#7C1216", opacity:"1", borderColor:"#7C1216"}}/>
            <hr className="pt-0 mt-0" style={{marginTop: "0%", height:"5px",background:"#F6AA2C", opacity:"1", borderColor:"#F6AA2C"}}/>
            <hr className="pt-0 mt-0" style={{height:"5px",background:"#0B4423", opacity:"1", borderColor:"#0B4423"}}/>
          </Row>
    
        </Container>
    )
}

export default Objective