import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import About from "./components/About";
import Contacts from "./components/Contacts";
import './App.css';
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {
  render() {
    return (
      <div>
          <NavBar/>
          <Services/>  
          <About/>
          <Contacts/>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d942.5221843100718!2d72.91129638421059!3d19.10376267241751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7c5391cae53%3A0xf69db1bfa749a36!2sAmrut%20Nagar%20Cir%2C%20Amrut%20Nagar%2C%20Ghatkopar%20West%2C%20Mumbai%2C%20Maharashtra%20400086!5e0!3m2!1sen!2sin!4v1670787001585!5m2!1sen!2sin" width="100%" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <Footer/>
        
      </div>
    );
  }
}