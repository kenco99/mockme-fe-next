import React from 'react';
import Head from 'next/head';

const CancellationPolicy: React.FC = () => {
  return (
    <>
      <Head>
        <title>Cancellation Policy | Your Website Name</title>
        <meta name="description" content="Cancellation policy for Your Website Name" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-teal-100 via-blue-100 to-indigo-100">
        <main className="container mx-auto px-4 py-12 max-w-3xl">
          <h1 className="text-5xl font-extrabold mb-8 text-center text-teal-800 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600">
            Cancellation Policy
          </h1>
          
          <div className="bg-white shadow-2xl rounded-3xl p-8 space-y-8">
            <p className="text-gray-700 leading-relaxed">
              We understand that circumstances may change, and you might need to cancel your subscription or purchase. Below are the details regarding our cancellation policy.
            </p>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-indigo-700">1. Subscription Services</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-teal-600">1.1 Cancellation by You</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>
                      <strong>Monthly Subscriptions:</strong> You may cancel your subscription at any time. Upon cancellation, your access to the service will continue until the end of the current billing period. No further charges will be applied, but refunds for the current billing period are not available.
                    </li>
                    <li>
                      <strong>Annual Subscriptions:</strong> You can cancel your subscription at any time. Upon cancellation, your access to the service will continue until the end of the current billing year. No refunds will be issued for the unused portion of the subscription.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-teal-600">1.2 How to Cancel</h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    To cancel your subscription, please follow these steps:
                  </p>
                  <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                    <li>Log in to your account on our website.</li>
                    <li>Navigate to the profile section.</li>
                    <li>Select "Cancel Subscription" and follow the on-screen instructions.</li>
                  </ol>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Alternatively, you can contact our support team at <a href="mailto:[Your Email Address]" className="text-blue-500 hover:underline">[Your Email Address]</a> for assistance with cancellation.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-teal-600">1.3 Auto-Renewal</h3>
                  <p className="text-gray-700 leading-relaxed">
                    All subscriptions are set to auto-renew by default. If you wish to disable auto-renewal, you can do so in your account settings or by contacting our support team.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default CancellationPolicy;
