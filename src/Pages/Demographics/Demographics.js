import React, {useState} from 'react'
import { Row, Col, Container, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import './Demographics.css';
import { createRespondent } from '../../Helpers/API/responsesAPI';
import InputError from '../../Components/InputError/InputError';
import { validateDemographics } from '../../Helpers/Validation/DemographicsValidation';

function Demographics() {
  const navigate = useNavigate()
  const { id } = useParams()

  const [demographics, setDemographics] = useState({
    role:localStorage["role"]?localStorage["role"]:"",
    sex:localStorage["sex"]?localStorage["sex"]:"",
    age:localStorage["age"]?localStorage["age"]:"",
    year_college:localStorage["year_college"]?localStorage["year_college"]:"",
    minutes_spent:localStorage["minutes_spent"]?localStorage["minutes_spent"]:""
  })

  // console.log(localStorage["role"]);

  const [isError, setIsError] = useState({
    role:false,
    sex:false,
    age:false,
    year_college: false,
    minutes_spent:false
  })

  const [yearCollege, setYearCollege] = useState([  {value:"1", text:"1st Year"},{value:"2", text:"2nd Year"},{value:"3", text:"3rd Year"},{value:"4", text:"4th Year"},
                                                    {value:"CCAD", text:"College of Communication, Art, and Design"},{value:"COS", text:"College of Science"},
                                                    {value:"CSS", text:"College of Social Sciences"},{value:"SOM", text:"School of Management"}])

  function handleChange(e) {
    if(e.target.name == "role") {
        if((e.target.value == "faculty/admin" && yearCollege[0].value == "1") || (e.target.value == "student" && yearCollege[0].value == "SOM")) {
            setYearCollege(yearCollege.reverse());
        }
    }
    setDemographics({...demographics,[e.target.name]:e.target.value})
  }

  async function handleContinue() {
    if(validateDemographics(demographics, setIsError)){
        const response = await createRespondent(demographics, id)
        localStorage.setItem('role', demographics.role)
        localStorage.setItem('sex', demographics.sex)
        localStorage.setItem('age', demographics.age)
        localStorage.setItem('year_college', demographics.year_college)
        localStorage.setItem('minutes_spent', demographics.minutes_spent)
        if(response.data) {
            navigate("/likert/" + id)
        }
    }
  }

  return (
    <Container>
        <Row className='d-flex justify-content'>
            <Col lg={12} className='d-flex justify-content logo'><img src={logo} width={150} height={75}/></Col>
        </Row>

        <Row>
            <Col lg={12} className='d-flex justify-content instructions wrap'>
               <p className='body'><b>Instructions: </b> &nbsp; Answer the question truthfully and accurately, based on your personal and demographic information.
               </p> 
            </Col>
        </Row>

        <Row className='d-flex option justify-content'>
            <Col style={{paddingLeft: "10%"}}>
                <Row>
                    <b>Role in SAIS</b>
                    <Col>
                        <Form.Select aria-label="Role" defaultValue={demographics.role} name="role" onChange={handleChange}>
                            <option>Select</option>
                            <option value="student">Student</option>
                            <option value="faculty/admin">Faculty/Admin</option>
                        </Form.Select>
                        <InputError isValid={isError.role} message="This field is required."/>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Row >
                    <b>Year/College</b>
                    <Col>
                        <Form.Select aria-label="Time" defaultValue={demographics.year_college} name="year_college" onChange={handleChange}>
                            <option>Select</option>
                            <option value={yearCollege[0].value}>{yearCollege[0].text}</option>
                            <option value={yearCollege[1].value}>{yearCollege[1].text}</option>
                            <option value={yearCollege[2].value}>{yearCollege[2].text}</option>
                            <option value={yearCollege[3].value}>{yearCollege[3].text}</option>
                        </Form.Select>
                        <InputError isValid={isError.year_college} message="This field is required."/>
                    </Col>
                </Row>
            </Col>
            <Col style={{paddingLeft: "10%"}}>
                <Row>
                    <b>Sex</b>
                    <Col>
                        <Form.Select aria-label="Sex" defaultValue={demographics.sex} name="sex" onChange={handleChange}>
                            <option>Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Form.Select>
                        <InputError isValid={isError.sex} message="This field is required."/>
                    </Col>
                </Row>
            </Col>
        </Row>

        <Row className='d-flex option justify-content' style={{marginTop: "5%"}}>
            <Col style={{paddingLeft: "10%"}}>
                <Row>
                    <b>Age</b>
                    <Col>
                        <Form.Control
                            className="age"
                            name="age"
                            type="number"
                            // value={demographics.age}
                            placeholder="Enter Age"
                            onChange={handleChange}
                        />
                        <InputError isValid={isError.age} message="This field is required."/>
                    </Col>
                </Row>
            </Col>
            <Col style={{paddingLeft: "10%"}}>
                <Row>
                    <b>Monthly average time spent in SAIS (mins)</b>
                    <Col>
                        <Form.Select aria-label="Time" defaultValue={demographics.minutes_spent} name="minutes_spent" onChange={handleChange}>
                            <option>Select</option>
                            <option value="less than 5">Less than 5</option>
                            <option value="5-10">5-10</option>
                            <option value="11-20">11-20</option>
                            <option value="21-30">21-30</option>
                            <option value="31-60">31-60</option>
                            <option value="61 and over">61 and over</option>
                        </Form.Select>
                        <InputError isValid={isError.minutes_spent} message="This field is required."/>
                    </Col>
                </Row>
            </Col>
        </Row>

        <Row className='justify-content'>
            <Col>
                <div lg={12} className='justify-content note wrap center'>Once you click continue, it will be saved and cannot be undone.</div>
            </Col>
        </Row>

        <Row>
            <div className='d-flex justify-content-end' style={{marginTop:"100px"}}>
                <button type='button' className='btn btn-lg btn-secondary' onClick={()=>navigate("/ethics/" + id)}>Back</button>
                <button type='button' className='btn btn-lg btn-primary' style={{marginLeft:"10px"}} onClick={handleContinue}>Continue</button>
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

export default Demographics