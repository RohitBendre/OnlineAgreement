import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        
      }}>
        <div className="bg-dark opacity-75 " >
          <h6 className="text-light text-center">CONTACT WITH US</h6>
         <footer className="text-light text-center">
          <div>
            <p>
              SANJAY BENDRE
              <br />
              MOBILE NO- 9220216430
              <br />
              MAIL ID- yourmail@gmail.com
            </p>
          </div>
         </footer>
        </div>
        <div className="text-center"
          style={{
            backgroundColor: "black",
            color: "white",
          }}
        >
         Copyright &copy; 2022 ONLINE RENT AGREEMENT. ALL RIGHTS ARE RESERVED.
        </div>
      </div>
    );
  }
}

export default Footer;
