import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

const FAQs = () => {
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container sx={{marginTop:'110px'}}>
    <Box sx={{ 
      width: '100%', 
      marginTop: isMobileView?"100px":"110px", 
      position: 'relative', 
      height:'200px',
      backgroundImage: "linear-gradient( 26.3deg ,rgba(8,24,68,1) 87.6%   ,rgba(0,119,182,1) 9.6%)",
    }}>
      <Typography
        variant="h4"
        component="div"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
        
           fontSize:isMobileView?"20px":"40px",
         
        }}
      >
         Frequently Asked Question
      </Typography>
    </Box>
      <Box sx={{ marginTop: '30px', display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <section className="bg-light" style={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div className="container">
            <div className="">

              <div >
                <h2 className="h3 mb-1">How can we help you?</h2>
                <p >We hope you have found an answer to your question. If you need any help, please search your query on our Support Center or contact us via email.</p>
                <div className="accordion accordion-flush" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        What is UPSC?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>UPSC stands for the Union Public Service Commission. It is India's central recruiting agency responsible for conducting examinations for various civil services and government jobs.</p>

                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      What exams does UPSC conduct?
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                      UPSC conducts a range of exams including the Civil Services Examination (CSE), Indian Forest Service Examination (IFoS), Engineering Services Examination (ESE), Combined Defence Services Examination (CDS), and many more.                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      How should I start my UPSC preparation?
                      
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>Begin by understanding the exam pattern, syllabus, and eligibility criteria. Devise a study plan and start with basic NCERT books for building a strong foundation in various subjects. Aspirant can go through our YouTube and Instagram channel for better support.

                        </p>

                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
What subjects should I focus on for UPSC?                    
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>The UPSC syllabus covers a wide range of subjects including History, Geography, Indian Polity, Economics, Science & Technology, Environment & Ecology, and Current Affairs. Each subject carries different weightage in the exam.

                      </p>

                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  Is coaching necessary for UPSC preparation?                  
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>Coaching is not mandatory but can be helpful for guidance and structured preparation. Many aspirants crack the exam without coaching by self-study and utilizing online resources effectively. Therefore, in our batch, we focus on right mentorship and guidance that would be more effective for the aspirant.

                    </p>

                  </div>
                </div>
              </div>

              <div className="accordion-item">
              <h2 className="accordion-header" id="headingSix">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                How important is newspaper reading for UPSC preparation?
                                </button>
              </h2>
              <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <p>
                  Newspaper reading is crucial for staying updated with current affairs, which is a significant part of the UPSC exam. It helps in understanding national and international events, government policies, and socio-economic issues. Aspirants can go through our daily Newspaper Notes section in our website.
                  </p>

                </div>
              </div>
            </div>

            <div className="accordion-item">
            <h2 className="accordion-header" id="headingSeven">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
              What are some recommended books for UPSC preparation?                              </button>
            </h2>
            <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>
                Some recommended books include NCERT textbooks for basics, standard reference books like Laxmikanth for Indian Polity, Bipan Chandra for History, and Ramesh Singh for Economics. However, the choice of books may vary based on individual preferences and study plans. We have uploaded complete booklist on our YouTube channel.                </p>

              </div>
            </div>
          </div> 

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEight">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
              How should I approach answer writing for UPSC mains?                                        </button>
            </h2>
            <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>
                Practice answer writing regularly, focus on clarity, structure, and coherence in your answers. Analyse previous years' question papers and model answers to understand the examiners' expectations.                         </p>

              </div>
            </div>
          </div>

          <div className="accordion-item">
          <h2 className="accordion-header" id="headingNine">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
            How do I stay motivated during UPSC preparation?                       </button>
          </h2>
          <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>
              Set realistic goals, maintain a balanced routine, and surround yourself with positive and like-minded individuals. Remember your reasons for pursuing this goal and stay persistent in your efforts. Aspirants can engage themselves by going through our social media handels.                       </p>

            </div>
          </div>
        </div>

        <div className="accordion-item">
        <h2 className="accordion-header" id="headingTen">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
          What should I do in the final days leading up to the UPSC exam?              </button>
        </h2>
        <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <p>
            - Revise your notes and important topics, practice mock tests to improve time management and accuracy, and ensure you stay calm and relaxed to perform your best on the exam day.                   </p>

          </div>
        </div>
      </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </Box>
    </Container>
  );
};

export default FAQs;
