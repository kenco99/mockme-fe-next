import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const RefundPolicy: React.FC = () => {
  return (
    <>
      <Head>
        <title>Refund Policy | Your Website Name</title>
        <meta name="description" content="Refund policy for Your Website Name" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow container mx-auto px-4 py-12 max-w-3xl">
          <h1 className="text-5xl font-extrabold mb-8 text-center text-black">
            Refund Policy
          </h1>
          
          <div className="bg-white shadow-2xl rounded-3xl p-8 space-y-8">
            <p className="text-gray-700 leading-relaxed">
              We strive to provide high-quality educational products and want you to be satisfied with your purchase. However, if you are not entirely happy, we're here to help.
            </p>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-black">1. Pro Services</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-black">1.1 Cancellation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    If you are unhapppy with the service, please contact us at harish@bluelearn.in within 2 days of the purchase date.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-black">1.2 Refunds</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Refunds for pro services will only be provided if you contact us within 2 days of the initial purchase or renewal date.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-black">3. How to Request a Refund</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To request a refund, please contact our support team at <a href="mailto:harish@bluelearn.in" className="text-gray-700 hover:underline">harish@bluelearn.in</a> with the following details:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Your name</li>
                <li>The email address used for the purchase</li>
                <li>The product or service you are requesting a refund for</li>
                <li>A brief explanation of the reason for your request</li>
              </ul>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Our team will review your request and respond within 7 business days.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-black">4. Refund Processing</h2>
              <p className="text-gray-700 leading-relaxed">
                If your refund request is approved, the refund will be processed through your original payment method within 30 business days. Please note that it may take additional time for your bank or credit card company to process and post the refund.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-black">5. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about our Refund Policy, please contact us at:
              </p>
              <p className="text-gray-700 mt-2 font-semibold">
                <strong>Email:</strong> <a href="mailto:harish@bluelearn.in" className="text-gray-700 hover:underline">harish@bluelearn.in</a>
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

export default RefundPolicy;
