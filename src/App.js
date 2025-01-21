import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/header";
import Home from "./pages/home.jsx";
import Footer from "./components/footer.jsx";
import WhatsAppFloat from "./components/whatsappFloat.jsx";
import Contact from "./pages/contact.jsx";
import AboutPage from "./pages/about.jsx";
import ContactPage from "./pages/contact.jsx";
import HospitalityCollection from "./pages/product/hospitality/hospitalityCollection.jsx";
import ProductDetails from "./pages/product/hospitality/productDetails.jsx";
import LuxuryCollection from "./pages/product/luxury/luxuryCollection.jsx";
import ProductDetailsLuxury from "./pages/product/luxury/productDetailsLuxury.jsx";

class App extends Component {
  render() {
    return (
      <div className="App min-h-screen ">
        <Header />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/hospitality-collection"
              element={<HospitalityCollection />}
            />
            <Route path="/luxury-collection" element={<LuxuryCollection />} />

            <Route
              path="/hospitality-collection/:productId"
              element={<ProductDetails />}
            />

            <Route
              path="/luxury-collection/:productId"
              element={<ProductDetailsLuxury />}
            />
          </Routes>
        </div>
        <WhatsAppFloat phoneNumber="" />
        <Footer />
      </div>
    );
  }
}

export default App;
