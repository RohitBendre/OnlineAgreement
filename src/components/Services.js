import React, { Component } from "react";

export class Services extends Component {
  render() {
    return (
      <div className="card-body" >
        <div  className="my-5" style={{
          padding : "18px"

        }}>
          <h5 className="card-title text-center">SERVICES</h5>
          <p className="card-text text-center">
            OUR SIMPLE 3-STEP ONLINE RENT AGREEMENT PROCESS:
          </p>
          <div className="container">
            <div className="card">
              <img
                src="https://storage.googleapis.com/fplswordpressblog/2022/07/rental-agreement-form.png"
                className="imgdrafting"
                alt="new"
                height="350"
              />
              <div className="card-body">
                <h5 className="card-title text-center">DRAFTING</h5>
                <p className="card-text">
                  You can either share your old agreement (if you have one) or
                  fill in our online registration form. After you log in, your
                  draft will be automatically created. You may add/remove
                  clauses as per your requirements, or share your documents with
                  us on WhatsApp.
                </p>
              </div>
            </div>
            
            
            <div className="card mx-3">
              <img
                src="https://www.docuinkk.com/wp-content/uploads/2020/01/fingerprint_1.jpg"
                className="max-width: 100%;"
                alt="new"
                height="350"
              />
              <div className="card-body">
                <h5 className="card-title text-center">BIOMETRICS</h5>
                <p className="card-text">
                  Once the draft copy is finalized from both parties (owner and
                  tenant), you’ll be able to book an appointment to get done
                  with your biometrics. On the selected date, our trained
                  executive will visit your doorstep for Aadhar verification.
                </p>
              </div>
            </div>
            
            
            <div className="card mx-2">
              <img
                src="https://www.rentersaathi.in/agreement.png"
                id="imgregistration"
                alt="new"
                height="350"
              />

              <div className="card-body">
                <h5 className="card-title text-center">REGISTRATION</h5>
                <p className="card-text">
                  After verification, within 5-6 working days, you’ll receive
                  the soft copy of your registered online rent agreement on your
                  e-mail ID. The good news is, everything is done from the
                  comfort of your home!
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      
    );
  }
}

export default Services;
