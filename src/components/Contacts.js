import React, { Component } from "react";

export class Contacts extends Component {
  render() {
    return (
      <div
        className="card-body"
        style={{
          backgroundColor: "#7BA2B3",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            margin: "90px",
          }}
        >
          <h5 className="card-title text-dark ">BOOK YOUR APPOINTMENT</h5>
          <p className="card-text"></p>
          <div className="d-column-flex ">
            <input
              type="text"
              className="form-control "
              placeholder="Enter Name"
              aria-label="Username"
            />
            <div className=" d-inline-flex my-3">
              <div>
                <input
                  type="text"
                  className="d-inline-flex p-2"
                  placeholder="Phone"
                  aria-label="Username"
                />
              </div>
              <div className="mx-3">
                <input
                  type="text"
                  className="d-inline-flex p-2"
                  placeholder="Email"
                  aria-label="Username"
                />
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Location"
              aria-label="Username"
            />
          </div>
          <input
            class="btn btn-primary my-3"
            type="submit"
            value="Submit"
          />
        </div>
        <div>
          <img
            src="https://media.istockphoto.com/id/1287065622/vector/vector-of-a-woman-signing-document-a-rental-agreement.jpg?s=612x612&w=0&k=20&c=fxZtfEJgVCvHTFNV4fYhHpLcz3ysVHIojGMxk8RsoBs="
            alt="car"
            height="445"
            style={{
              flexDirection: "row-end",
              width:"100%",
            }}
          />
        </div>
      </div>
    );
  }
}

export default Contacts;
