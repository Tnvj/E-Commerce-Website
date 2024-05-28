import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  return (
    <div className="bg-white">
      <Header />
      <main className="container mx-auto p-8 mb-12">
        <div className="flex justify-between items-center mb-16 mt-16">
          <nav className="text-gray-500">
            <a href="/home" className="hover:text-black">Home</a> / 
            <span> Contact</span>
          </nav>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2 text-black p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-red-500 w-12 h-12 flex justify-center items-center rounded-full mr-4">
                <img src="/images/icons-phone.png" alt="Call" className="w-12 h-12" />
              </div>
              <div className='p-4'>
                <h2 className="text-lg font-medium">Call To Us</h2>
                <p>We are available 24/7, 7 days a week.</p>
                <p>Phone: +8801611112222</p>
              </div>
            </div>
            <hr className="my-4 color-black" />
            <div className="flex items-center">
              <div className="bg-red-500 w-12 h-12 flex justify-center items-center rounded-full mr-4">
                <img src="/images/icons-mail.png" alt="Email" className="w-12 h-12" />
              </div>
              <div>
                <h2 className="text-lg font-medium">Write To Us</h2>
                <p>Fill out our form and we will contact you within 24 hours.</p>
                <p>Emails: customer@exclusive.com</p>
                <p>Emails: support@exclusive.com</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-3 p-6 rounded-lg shadow-md">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="col-span-1 md:col-span-1 p-2 bg-gray-100 rounded-sm focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  className="col-span-1 md:col-span-1 p-2 bg-gray-100 rounded-sm focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Your Phone *"
                  className="col-span-1 md:col-span-1 p-2 bg-gray-100 rounded-sm focus:outline-none"
                />
              </div>
              <textarea
                placeholder="Your Message"
                className="w-full p-2 bg-gray-100 rounded-sm mb-4 focus:outline-none"
                rows={6}
              ></textarea>
              <button
                type="submit"
                className="bg-red-500 text-white px-4 py-2 rounded-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
