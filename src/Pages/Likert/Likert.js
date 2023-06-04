import React, {useRef, useState} from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import Form from 'react-bootstrap/Form';
import './Likert.css';
import InputError from '../../Components/InputError/InputError';
import { createResponse } from '../../Helpers/API/responsesAPI';
import { validateLikert } from '../../Helpers/Validation/LikertValidation';
import Slider from '@mui/material/Slider';

function Likert() {
  const navigate = useNavigate()
  const {id} = useParams()
const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
  {
    value: 6,
    label: '6',
  },
  {
    value: 7,
    label: '7',
  },
  {
    value: 8,
    label: '8',
  },
  {
    value: 9,
    label: '9',
  },
  {
    value: 10,
    label: '10',
  },
];
  const [answers, setAnswers] = useState([
    {number:"1",ans:"5"},
    {number:"2",ans:"5"},
    {number:"3",ans:"5"},
    {number:"4",ans:"5"},
    {number:"5",ans:"5"},
    {number:"6",ans:"5"},
    {number:"7",ans:"5"},
    {number:"8",ans:"5"},
    {number:"9",ans:"5"},
    {number:"10",ans:"5"},
    {number:"11",ans:"5"},
    {number:"12",ans:"5"},
    {number:"13",ans:"5"},
    {number:"14",ans:"5"},
    {number:"15",ans:"5"},
    {number:"16",ans:"5"},
    {number:"17",ans:"5"},
    {number:"18",ans:"5"},
    {number:"19",ans:"5"},
    {number:"20",ans:"5"},
    {number:"21",ans:"5"},
    {number:"22",ans:"5"},
    {number:"23",ans:"5"},
    {number:"24",ans:"5"}
  ])

  const [isError, setIsError] = useState({
    q1:false,
    q2:false,
    q3:false,
    q4:false,
    q5:false,
    q6:false,
    q7:false,
    q8:false,
    q9:false,
    q10:false,
    q11:false,
    q12:false,
    q13:false,
    q14:false,
    q15:false,
    q16:false,
    q17:false,
    q18:false,
    q19:false,
    q20:false,
    q21:false,
    q22:false,
    q23:false,
    q24:false
  })

  function handleAnswerChange(number, e){
    var answersCopy = [...answers]
    answersCopy.map(data=>{
        if(data.number === number){
            data.ans = e.target.value
        }
    })
    setAnswers(answersCopy)
  }

  async function handleSubmit(){
    console.log(answers);
    if(validateLikert(answers, setIsError)){
        const response = await createResponse(id, answers)
        if (response.data) {
            navigate("/closing")
        }
    }

    // console.log(response)
  }

  return (
    <Container>
        <Row className='d-flex justify-content'>
            <Col lg={12} className='d-flex justify-content logo'><img src={logo} width={150} height={75}/></Col>
        </Row>

        <Row>
            <Col lg={12} className='d-flex justify-content instructions wrap'>
                <p className='body'><b>Instructions:</b> &nbsp; 
                All of the following questions will ask you to indicate to what extent you agree or disagree with the statements about SAIS. 
                Click and drag the slider to the appropriate position on the range scale that represents your answer. The 0 value indicates strongly disagree and 10 for strongly agree.
                Once you have made your selection, be sure to check that your answer is clearly displayed on the range scale before submitting your response.
                </p>
            </Col>
        </Row>

        <Row>
            <Col className='d-flex justify-content question wrap'>1. SAIS is simple for me to use.</Col>
            <Col>
            <Slider
              aria-label="Small steps"
              defaultValue={5}
              step={0.1}
              min={0}
              max={10}
              name="group1"
              valueLabelDisplay="auto"
              marks={marks}
              onChange={(e)=>handleAnswerChange("1",e)}
            />
            {/*<InputError isValid={isError.q1} message="This field is required."/>*/}
            </Col>
            <hr /> 
        </Row>

        <Row>
            <Col className='d-flex justify-content question wrap'>2. It is simple for me to get SAIS to do what I want.</Col>
            <Col>
            <Slider
              aria-label="Small steps"
              defaultValue={5}
              step={0.1}
              min={0}
              max={10}
              name="group2"
              valueLabelDisplay="auto"
              marks={marks}
              onChange={(e)=>handleAnswerChange("2",e)}
            />
            {/*<InputError isValid={isError.q2} message="This field is required."/>*/}
            </Col>
            <hr /> 
        </Row>

        
        <Row>
            <Col className='d-flex justify-content question wrap'>3. SAIS allows for versatile interaction.</Col>
            <Col>
            <Slider
              aria-label="Small steps"
              defaultValue={5}
              step={0.1}
              min={0}
              max={10}
              name="group3"
              valueLabelDisplay="auto"
              marks={marks}
              onChange={(e)=>handleAnswerChange("3",e)}
            />
            {/*<InputError isValid={isError.q3} message="This field is required."/>*/}
            </Col>
            <hr /> 
        </Row>

        <Row>
            <Col className='d-flex justify-content question wrap'>4. I had no trouble figuring out how to use SAIS.</Col>
            <Col>
            <Slider
              aria-label="Small steps"
              defaultValue={5}
              step={0.1}
              min={0}
              max={10}
              name="group4"
              valueLabelDisplay="auto"
              marks={marks}
              onChange={(e)=>handleAnswerChange("4",e)}
            />
            {/*<InputError isValid={isError.q4} message="This field is required."/>*/}
            </Col>
            <hr /> 
        </Row>

        <Row>
            <Col className='d-flex justify-content question wrap'>5. SAIS generated information is accurate.</Col>
            <Col>
            <Slider
              aria-label="Small steps"
              defaultValue={5}
              step={0.1}
              min={0}
              max={10}
              name="group5"
              valueLabelDisplay="auto"
              marks={marks}
              onChange={(e)=>handleAnswerChange("5",e)}
            />
            {/*<InputError isValid={isError.q5} message="This field is required."/>*/}
            </Col>
            <hr /> 
        </Row>


        <Row>
            <Col className='d-flex justify-content question wrap'>6. SAIS generated information serves its intended purpose.</Col>
            <Col>
            <Slider
              aria-label="Small steps"
              defaultValue={5}
              step={0.1}
              min={0}
              max={10}
              name="group6"
              valueLabelDisplay="auto"
              marks={marks}
              onChange={(e)=>handleAnswerChange("6",e)}
            />
            {/*<InputError isValid={isError.q6} message="This field is required."/>*/}
            </Col>
            <hr /> 
        </Row>

        <Row>
            <Col className='d-flex justify-content question wrap'>7. Information from SAIS is generated in a timely manner.</Col>
            <Col>
            <Slider
              aria-label="Small steps"
              defaultValue={5}
              step={0.1}
              min={0}
              max={10}
              name="group7"
              valueLabelDisplay="auto"
              marks={marks}
              onChange={(e)=>handleAnswerChange("7",e)}
            />
            {/*<InputError isValid={isError.q7} message="This field is required."/>*/}
            </Col>
            <hr /> 
        </Row>

        
        <Row>
            <Col className='d-flex justify-content question wrap'>8. I am confident with the information generated by SAIS.</Col>
            <Col>
            <Slider
              aria-label="Small steps"
              defaultValue={5}
              step={0.1}
              min={0}
              max={10}
              name="group8"
              valueLabelDisplay="auto"
              marks={marks}
              onChange={(e)=>handleAnswerChange("8",e)}
            />
            {/*<InputError isValid={isError.q8} message="This field is required."/>*/}
            </Col>
            <hr /> 
        </Row>
        
        <Row>
            <Col className='d-flex justify-content question wrap'>9. The system provider offers adequate technical assistance.</Col>
            <Col>
            <Slider
              aria-label="Small steps"
              defaultValue={5}
              step={0.1}
              min={0}
              max={10}
              name="group9"
              valueLabelDisplay="auto"
              marks={marks}
              onChange={(e)=>handleAnswerChange("9",e)}
            />
            {/*<InputError isValid={isError.q9} message="This field is required."/>*/}
            </Col>
            <hr /> 
        </Row>

        <Row>
            <Col className='d-flex justify-content question wrap'>10. The current system infrastructure is sufficient to support SAIS.</Col>
            <Col>
            <Slider
              aria-label="Small steps"
              defaultValue={5}
              step={0.1}
              min={0}
              max={10}
              name="group10"
              valueLabelDisplay="auto"
              marks={marks}
              onChange={(e)=>handleAnswerChange("10",e)}
            />
            {/*<InputError isValid={isError.q10} message="This field is required."/>*/}
            </Col>
            <hr /> 
        </Row>

        <Row>
            <Col className='d-flex justify-content question wrap'>11. SAIS can be relied upon to deliver information when necessary.</Col>
            <Col>
            <Slider
              aria-label="Small steps"
              defaultValue={5}
              step={0.1}
              min={0}
              max={10}
              name="group11"
              valueLabelDisplay="auto"
              marks={marks}
              onChange={(e)=>handleAnswerChange("11",e)}
            />
            {/*<InputError isValid={isError.q11} message="This field is required."/>*/}
            </Col>
            <hr /> 
        </Row>

        <Row>
            <Col className='d-flex justify-content question wrap'>12. SAIS is complete for work procedures.</Col>
            <Col>
            <Slider
              aria-label="Small steps"
              defaultValue={5}
              step={0.1}
              min={0}
              max={10}
              name="group12"
              valueLabelDisplay="auto"
              marks={marks}
              onChange={(e)=>handleAnswerChange("12",e)}
            />
            {/*<InputError isValid={isError.q12} message="This field is required."/>*/}
            </Col>
            <hr /> 
        </Row>

        <Row>
            <Col className='d-flex justify-content question wrap'>13. I can complete transactions more rapidly by utilizing SAIS.</Col>
            <Col>
            <Slider
              aria-label="Small steps"
              defaultValue={5}
              step={0.1}
              min={0}
              max={10}
              name="group13"
              valueLabelDisplay="auto"
              marks={marks}
              onChange={(e)=>handleAnswerChange("13",e)}
            />
            {/*<InputError isValid={isError.q13} message="This field is required."/>*/}
            </Col>
            <hr /> 
        </Row>
 
        <Row>
            <Col className='d-flex justify-content question wrap'>14. Using SAIS has increased my transaction performance.</Col>
            <Col>
            <Slider
              aria-label="Small steps"
              defaultValue={5}
              step={0.1}
              min={0}
              max={10}
              name="group14"
              valueLabelDisplay="auto"
              marks={marks}
              onChange={(e)=>handleAnswerChange("14",e)}
            />
            {/*<InputError isValid={isError.q14} message="This field is required."/>*/}
            </Col>
            <hr /> 
        </Row>

        <Row>
            <Col className='d-flex justify-content question wrap'>15. Transactions has been made simpler by using SAIS.</Col>
            <Col>
            <Slider
              aria-label="Small steps"
              defaultValue={5}
              step={0.1}
              min={0}
              max={10}
              name="group15"
              valueLabelDisplay="auto"
              marks={marks}
              onChange={(e)=>handleAnswerChange("15",e)}
            />
            {/*<InputError isValid={isError.q15} message="This field is required."/>*/}
            </Col>
            <hr /> 
        </Row>

        <Row>
            <Col className='d-flex justify-content question wrap'>16. SAIS is helpful to me in my transactions.</Col>
            <Col>
            <Slider
              aria-label="Small steps"
              defaultValue={5}
              step={0.1}
              min={0}
              max={10}
              name="group16"
              valueLabelDisplay="auto"
              marks={marks}
              onChange={(e)=>handleAnswerChange("16",e)}
            />
            {/*<InputError isValid={isError.q16} message="This field is required."/>*/}
            </Col>
            <hr /> 
        </Row>

        <Row>
            <Col className='d-flex justify-content question wrap'>17. I am satisfied with how SAIS functions.</Col>
            <Col>
            <Slider
              aria-label="Small steps"
              defaultValue={5}
              step={0.1}
              min={0}
              max={10}
              name="group17"
              valueLabelDisplay="auto"
              marks={marks}
              onChange={(e)=>handleAnswerChange("17",e)}
            />
            {/*<InputError isValid={isError.q17} message="This field is required."/>*/}
            </Col>
            <hr /> 
        </Row>

        <Row>
            <Col className='d-flex justify-content question wrap'>18. SAIS has made transaction procedures easier.</Col>
            <Col>
            <Slider
              aria-label="Small steps"
              defaultValue={5}
              step={0.1}
              min={0}
              max={10}
              name="group18"
              valueLabelDisplay="auto"
              marks={marks}
              onChange={(e)=>handleAnswerChange("18",e)}
            />
            {/*<InputError isValid={isError.q18} message="This field is required."/>*/}
            </Col>
            <hr /> 
        </Row>

        <Row>
            <Col className='d-flex justify-content question wrap'>19. I am generally satisfied when utilizing SAIS.</Col>
            <Col>
            <Slider
              aria-label="Small steps"
              defaultValue={5}
              step={0.1}
              min={0}
              max={10}
              name="group19"
              valueLabelDisplay="auto"
              marks={marks}
              onChange={(e)=>handleAnswerChange("19",e)}
              />
            {/*<InputError isValid={isError.q19} message="This field is required."/>*/}
            </Col>
            <hr /> 
        </Row>

        <Row>
            <Col className='d-flex justify-content question wrap'>20. The paper-based system's shortcomings are effectively addressed by SAIS.</Col>
            <Col>
            <Slider
              aria-label="Small steps"
              defaultValue={5}
              step={0.1}
              min={0}
              max={10}
              name="group20"
              valueLabelDisplay="auto"
              marks={marks}
              onChange={(e)=>handleAnswerChange("20",e)}
            />
            {/*<InputError isValid={isError.q20} message="This field is required."/>*/}
            </Col>
            <hr /> 
        </Row>

        <Row>
            <Col className='d-flex justify-content question wrap'>21. Using SAIS cause an improvement on student academic related transactions.</Col>
            <Col>
            <Slider
              aria-label="Small steps"
              defaultValue={5}
              step={0.1}
              min={0}
              max={10}
              name="group21"
              valueLabelDisplay="auto"
              marks={marks}
              onChange={(e)=>handleAnswerChange("21",e)}
            />
            {/*<InputError isValid={isError.q21} message="This field is required."/>*/}
            </Col>
            <hr /> 
        </Row>

        <Row>
            <Col className='d-flex justify-content question wrap'>22. SAIS makes it simple to obtain student information.</Col>
            <Col>
            <Slider
              aria-label="Small steps"
              defaultValue={5}
              step={0.1}
              min={0}
              max={10}
              name="group22"
              valueLabelDisplay="auto"
              marks={marks}
              onChange={(e)=>handleAnswerChange("22",e)}
            />
            {/*<InputError isValid={isError.q22} message="This field is required."/>*/}
            </Col>
            <hr /> 
        </Row>

        <Row>
            <Col className='d-flex justify-content question wrap'>23. SAIS improves transaction communication.</Col>
            <Col>
            <Slider
              aria-label="Small steps"
              defaultValue={5}
              step={0.1}
              min={0}
              max={10}
              name="group23"
              valueLabelDisplay="auto"
              marks={marks}
              onChange={(e)=>handleAnswerChange("23",e)}
            />
            {/*<InputError isValid={isError.q23} message="This field is required."/>*/}
            </Col>
            <hr /> 
        </Row>

        <Row>
            <Col className='d-flex justify-content question wrap'>24. Utilizing SAIS results in better judgment on student academic related transactions.</Col>
            <Col>
            <Slider
              aria-label="Small steps"
              defaultValue={5}
              step={0.1}
              min={0}
              max={10}
              name="group24"
              valueLabelDisplay="auto"
              marks={marks}
              onChange={(e)=>handleAnswerChange("24",e)}
            />
            {/*<InputError isValid={isError.q24} message="This field is required."/>*/}
            </Col>
            <hr /> 
        </Row>

        <Row className='justify-content'>
            <Col>
                <div lg={12} className='justify-content note wrap center'>Once you click submit, it will be saved and cannot be undone.</div>
            </Col>
        </Row>

        <Row>
            <div className='d-flex justify-content-end' style={{marginTop:"30px"}}>
                {/* <button type='button' className='btn btn-lg btn-secondary' onClick={()=>navigate("/demographics")}>Back</button> */}
                <button type='button' className='btn btn-lg btn-primary' style={{marginLeft:"10px"}} onClick={handleSubmit}>Submit</button>
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

export default Likert