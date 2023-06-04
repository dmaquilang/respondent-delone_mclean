import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import './Ethics.css';

function Ethics() {
    const navigate = useNavigate()
    const { id } = useParams()
    return (
        <Container>
            <Row className='d-flex justify-content'>
                <Col lg={12} className='d-flex justify-content logo'><img src={logo} width={150} height={75}/></Col>
            </Row>
    
            <Row>
                <Col lg={12} className='d-flex justify-content ethics-title wrap' style={{marginTop:"10px", marginBottom:"10px"}}>
                    Informed Consent
                </Col>
            </Row>

          <Row>
            <Col lg={12} className='d-flex justify-content content wrap'>
                <h4 style={{color:'#0B4423'}}>Voluntary Participation</h4>
                <p className='body'>Voluntary participation is required for this study. To indicate the respondent's consent to participate, it is necessary for them to click the "continue" button within the online survey tool. In the event that the respondent chooses to discontinue their involvement during the data gathering process, they are entitled to withdraw or cancel their participation at any time. This will result in the termination of the respondent's participation and the cessation of data collection. Additionally, the respondent's information will not be disclosed to anyone beyond the scope of this research.</p>

                <h4 style={{color:'#0B4423'}}>Risks and Benefits</h4>
                <p className='body'>The study presents a low level of risk to participants. However, in the event that the respondent experiences discomfort or unease while responding to some of the questions, they reserve the right to discontinue their participation in the study at any time without facing any negative consequences or repercussions.</p>
                <p className='body'>Moreover, the participation of the respondents in this study is expected to yield benefits for the stakeholders of UP Cebu and its associated constituents who utilize SAIS, such as students, teachers, and faculty members. This study will aid the university in devising more effective measures to enhance the present SAIS and, as a result, improve the overall experience for all those who rely on it.</p>

                <h4 style={{color:'#0B4423'}}>Confidentiality and Data Management Plan</h4>
                <p className='body'>The researcher would like to extend assurance to the respondents that all data collected during the survey will be handled with the utmost confidentiality and will exclusively be utilized for the purpose of this research. Personal information of the respondents, including but not limited to email addresses used to verify the legitimacy of respondents as SAIS users, will be safeguarded and not made public. Moreover, the researcher is committed to comply with the Philippine Data Privacy Act of 2012 (DPA) <a href="http://www.officialgazette.gov.ph/2012/08/15/republic-act-no-10173/">http://www.officialgazette.gov.ph/2012/08/15/republic-act-no-10173/</a> in order to protect respondent’s right to data privacy. To ensure the security of the data, it will be stored on a secured server accessible solely by the researcher. </p>
                <p className='body'>Furthermore, the online web survey application employed for data collection has been configured to guarantee the anonymity of the data. The researcher has taken precautions to ensure that the responses provided by the participants cannot be linked to their identity or personal information. The confidentiality and privacy of the participants' data are of utmost importance and will be strictly maintained throughout the course of the research.</p>
                
                <p className='body'>In case of questions, you may contact me at <a href='mailto:dgmaquilang@up.edu.ph'>dgmaquilang@up.edu.ph</a> or <a href='tel:+639216740158'>0921-674-0158</a>, or Mr. Percival J. Forcadilla, Research Adviser at <a href='mailto:pjforcadilla@up.edu.ph'>pjforcadilla@up.edu.ph</a>.</p>
                <p className='body'>By clicking Continue, you agree and approve to the terms and conditions of this study.</p>
            </Col>
          </Row>
    
          <Row>
            <div className='d-flex justify-content-end'>
                <button type='button' className='btn btn-lg btn-secondary' onClick={()=>navigate("/objective/" + id)}>Back</button>
                <button type='button' className='btn btn-lg btn-primary' style={{marginLeft:"10px"}} onClick={()=>navigate("/demographics/" + id)}>Continue</button>
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

export default Ethics