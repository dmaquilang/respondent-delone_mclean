import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import logo from '../../Assets/logo.png'

function Closing() {
  return (
    <Container>
      <Row className='d-flex justify-content-center'>
        <Col lg={12} className='d-flex justify-content-center logo' style={{marginTop:"50px"}}><img src={logo} width={200} height={100}/></Col>
      </Row>

      <Row>
        <Col className='d-flex justify-content-center home-title wrap' style={{marginTop:"50px"}}>
            Thank you for participating in this study.
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

export default Closing