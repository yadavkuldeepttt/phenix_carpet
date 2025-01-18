import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/header";
import Home from "./pages/home.jsx";
import Footer from "./components/footer.jsx";
import WhatsAppFloat from "./components/whatsappFloat.jsx"
import Contact from "./pages/contact.jsx";
import AboutPage from "./pages/about.jsx";

class App extends Component {
  render() {
    return (
      <div className="App min-h-screen ">
        <Header />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage/>} />
            
          </Routes>
        </div>
              <WhatsAppFloat phoneNumber="" />
        <Footer />
      </div>
    );
  }
}

export default App;
