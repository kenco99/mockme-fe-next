import React from 'react';
import Head from 'next/head';

const ContactUs: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Your Website Name</title>
        <meta name="description" content="Contact information for Your Website Name" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-teal-100">
        <main className="container mx-auto px-4 py-12 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">Contact Us</h1>
          
          <div className="bg-white shadow-lg rounded-lg p-8">
            <p className="text-gray-700 mb-8">
              We'd love to hear from you! Whether you have questions about our products, need support, or just want to share feedback, feel free to reach out to us.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-teal-700">Contact Information</h2>
              <h3 className="text-xl font-semibold mb-2 text-blue-600">Email:</h3>
              <p className="text-gray-700 mb-4">
                For general inquiries and support, please email us at:
              </p>
              <a href="mailto:harish@bluelearn.in" className="text-blue-500 hover:underline text-lg">
                harish@bluelearn.in
              </a>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-teal-700">Support Hours</h2>
              <p className="text-gray-700 mb-2">
                Our support team is available:
              </p>
              <p className="text-gray-800 font-semibold">
                Mon to Friday, 12pm to 6pm
              </p>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default ContactUs;
