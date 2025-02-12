import React, { Component } from "react";
import "./App.css";
import {Routes, Route } from "react-router";
import Header from "./components/header";
import Home from "./pages/home.jsx";
import Footer from "./components/footer.jsx";
import WhatsAppFloat from "./components/whatsappFloat.jsx";
import AboutPage from "./pages/about.jsx";
import ContactPage from "./pages/contact.jsx";
import HospitalityCollection from "./pages/product/hospitality/hospitalityCollection.jsx";
import ProductDetails from "./pages/product/hospitality/productDetails.jsx";
import LuxuryCollection from "./pages/product/luxury/luxuryCollection.jsx";
import ProductDetailsLuxury from "./pages/product/luxury/productDetailsLuxury.jsx";
import ProductDetailsCategory from "./pages/product/items/productDetailsCategory.jsx";
import ProductsPage from "./pages/product/items/productsPage.jsx";
import LatestProject from "./pages/latestProject.jsx";

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
            <Route path="/products/:category" element={<ProductsPage />} />

            <Route path="/product/:category/:productId" element={<ProductDetailsCategory />} />

            <Route path="/latest-project" element={<LatestProject />} />

          </Routes>
        </div>
        <WhatsAppFloat phoneNumber="9454049020" />
        <Footer />
      </div>
    );
  }
}

export default App;
