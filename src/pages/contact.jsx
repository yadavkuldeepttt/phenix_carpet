import { ChevronRight, Phone, Mail, MapPin, Clock, Send, ArrowRight } from 'lucide-react'
import React from 'react'

function Contact() {
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div className="bg-gradient-to-b from-yellow-50 to-white min-h-screen">
      {/* Hero Section with Breadcrumb */}
      <nav
        className="relative bg-cover bg-center bg-no-repeat text-sm text-gray-600 py-32"
        aria-label="Breadcrumb"
        style={{
          backgroundImage: "url('/images/about/about_banner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl tracking-[0.05rem] font-bold text-white mb-3">Get in Touch</h1>
            <p className="text-yellow-300 text-xs md:text-xl">We'd love to hear from you</p>
          </div>
          <ol className="flex justify-center items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a href="/" className="text-gray-200 hover:text-yellow-300 transition duration-300">
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-2 text-gray-200" />
                <span className="text-yellow-300 font-semibold">Contact Us</span>
              </div>
            </li>
          </ol>
        </div>
      </nav>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Phone, title: "Call Us", content: "+1 (555) 123-4567", subContent: "Mon-Fri 9AM to 6PM" },
            { icon: Mail, title: "Email Us", content: "info@yourcompany.com", subContent: "We'll respond within 24 hours" },
            { icon: MapPin, title: "Visit Us", content: "123 Business Street", subContent: "New York, NY 10001" }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="bg-yellow-50 p-4 rounded-full mb-4">
                  <item.icon className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 font-medium mb-1">{item.content}</p>
                <p className="text-sm text-gray-500">{item.subContent}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Send us a Message</h2>
              <p className="text-gray-600">Fill out the form below and we'll get back to you shortly.</p>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-start text-gray-700 font-medium mb-1" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition duration-200"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 text-start font-medium mb-1" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition duration-200"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-700 text-start font-medium mb-1" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition duration-200"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 text-start font-medium mb-1" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition duration-200"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 text-start font-medium mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition duration-200"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-4 px-6 rounded-lg transition duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 transform group-hover:translate-x-1 transition duration-300" />
              </button>
            </form>
          </div>

          {/* Map and Business Hours */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986790365237!3d40.69714941680757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1701234567890!5m2!1sen!2s"
                className="w-full h-[400px]"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Business Hours</h3>
              <div className="space-y-4">
                {[
                  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
                  { day: "Sunday", hours: "Closed" }
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">{schedule.day}</span>
                    <span className="text-gray-800">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Need Immediate Assistance?</h3>
              <p className="text-gray-600 mb-6">Our support team is available 24/7 to help you with any questions.</p>
              <a
                href="#"
                onClick={handleClick}
                className="inline-flex items-center space-x-2 text-yellow-600 hover:text-yellow-700 font-medium"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact