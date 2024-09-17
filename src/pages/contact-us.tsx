import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ContactUs: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Your Website Name</title>
        <meta name="description" content="Contact information for Your Website Name" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow container mx-auto px-4 py-12 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-black">Contact Us</h1>
          
          <div className="bg-white shadow-lg rounded-lg p-8">
            <p className="text-gray-700 mb-8">
              We'd love to hear from you! Whether you have questions about our products, need support, or just want to share feedback, feel free to reach out to us.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-black">Contact Information</h2>
              <h3 className="text-xl font-semibold mb-2 text-black">Email:</h3>
              <p className="text-gray-700 mb-4">
                For general inquiries and support, please email us at:
              </p>
              <a href="mailto:harish@bluelearn.in" className="text-gray-700 hover:underline text-lg">
                harish@bluelearn.in
              </a>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-black">Support Hours</h2>
              <p className="text-gray-700 mb-2">
                Our support team is available:
              </p>
              <p className="text-gray-700 font-semibold">
                Mon to Friday, 12pm to 6pm
              </p>
            </section>
          </div>
          
        </main>
        
        <footer className="bg-black text-white text-sm mt-auto">
          <div className="container mx-auto px-4 py-6 flex flex-wrap justify-center items-center">
            <span className="mr-2">&copy; {new Date().getFullYear()} Huloq Enterprices. All rights reserved.</span>
            <div className="flex flex-wrap justify-center items-center">
            <Link href="/" className="text-white hover:underline mx-2">Home</Link>
              <span>|</span>
                <Link href="/contact-us" className="text-white hover:underline mx-2">Contact Us</Link>
                <span>|</span>
                <Link href="/privacy-policy" className="text-white hover:underline mx-2">Privacy Policy</Link>
                <span>|</span>
                <Link href="/refund-policy" className="text-white hover:underline mx-2">Refund Policy</Link>
                <span>|</span>
                <Link href="/terms-and-conditions" className="text-white hover:underline mx-2">Terms and Conditions</Link>
                <span>|</span>
                <Link href="/pricing-policy" className="text-white hover:underline mx-2">Pricing Policy</Link>
                <span>|</span>
                <Link href="/cancellation-policy" className="text-white hover:underline mx-2">Cancellation Policy</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactUs;
