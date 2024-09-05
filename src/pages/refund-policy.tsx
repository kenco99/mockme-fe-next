import React from 'react';
import Head from 'next/head';

const RefundPolicy: React.FC = () => {
  return (
    <>
      <Head>
        <title>Refund Policy | Your Website Name</title>
        <meta name="description" content="Refund policy for Your Website Name" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100">
        <main className="container mx-auto px-4 py-12 max-w-3xl">
          <h1 className="text-5xl font-extrabold mb-8 text-center text-purple-800 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Refund Policy
          </h1>
          
          <div className="bg-white shadow-2xl rounded-3xl p-8 space-y-8">
            <p className="text-gray-700 leading-relaxed">
              We strive to provide high-quality educational products and want you to be satisfied with your purchase. However, if you are not entirely happy, we're here to help.
            </p>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-pink-700">1. Subscription Services</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-purple-600">1.1 Cancellation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    You may cancel your subscription at any time. After cancellation, you will continue to have access to the service until the end of your current billing cycle, but no further charges will be applied.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-purple-600">1.2 Refunds</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Refunds for subscription services will only be provided if you contact us within 7 days of the initial purchase or renewal date.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-pink-700">3. How to Request a Refund</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To request a refund, please contact our support team at <a href="mailto:harish@bluelearn.in" className="text-blue-500 hover:underline">harish@bluelearn.in</a> with the following details:
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
              <h2 className="text-3xl font-bold mb-4 text-pink-700">4. Refund Processing</h2>
              <p className="text-gray-700 leading-relaxed">
                If your refund request is approved, the refund will be processed through your original payment method within [X] business days. Please note that it may take additional time for your bank or credit card company to process and post the refund.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-pink-700">5. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about our Refund Policy, please contact us at:
              </p>
              <p className="text-gray-700 mt-2 font-semibold">
                <strong>Email:</strong> <a href="mailto:harish@bluelearn.in" className="text-blue-500 hover:underline">harish@bluelearn.in</a>
              </p>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default RefundPolicy;
