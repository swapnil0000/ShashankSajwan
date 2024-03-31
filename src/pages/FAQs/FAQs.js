import { Box } from '@mui/material';
import React from 'react';

const FAQs = () => {
  return (
    <Box sx={{ marginTop: '120px', display: 'flex', alignItems: 'center', width: '100%' }}>
      <section className="bg-light py-3 py-md-1">
        <div className="container">
          <div className="row gy-5 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-6"></div>
            <div className="col-12 col-lg-6">
              <div className="row justify-content-xl-end">
                <div className="col-12 col-xl-11">
                  <h2 className="h1 mb-3">Frequently Asked Question?</h2>
                  <p className="lead fs-4 text-secondary mb-5">
                    We hope you have found an answer to your question. If you need any help, please search your query on our Support Center or contact us via email.
                  </p>
                  <div className="accordion accordion-flush" id="accordionExample">
                    {/* Your accordion items */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Box>
  );
};

export default FAQs;
