import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const CancellationPolicy: React.FC = () => {
  return (
    <>
      <Head>
        <title>Cancellation Policy | Your Website Name</title>
        <meta name="description" content="Cancellation policy for Your Website Name" />
      </Head>
      <div className="flex flex-col min-h-screen bg-white">
        <main className="flex-grow container mx-auto px-4 py-12 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-black">Cancellation Policy</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-black">1. Subscription Services</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-black">1.1 Cancellation by You</h3>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>
                      <strong>Monthly Subscriptions:</strong> You may cancel your subscription at any time. Upon cancellation, your access to the service will continue until the end of the current billing period. No further charges will be applied, but refunds for the current billing period are not available.
                    </li>
                    <li>
                      <strong>Annual Subscriptions:</strong> You can cancel your subscription at any time. Upon cancellation, your access to the service will continue until the end of the current billing year. No refunds will be issued for the unused portion of the subscription.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-black">1.2 How to Cancel</h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    To cancel your subscription, please follow these steps:
                  </p>
                  <ol className="list-decimal pl-6 text-gray-700">
                    <li>Log in to your account on our website.</li>
                    <li>Navigate to the profile section.</li>
                    <li>Select "Cancel Subscription" and follow the on-screen instructions.</li>
                  </ol>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Alternatively, you can contact our support team at <a href="mailto:harish@bluelearn.in" className="text-blue-500 hover:underline">harish@bluelearn.in</a> for assistance with cancellation.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-black">1.3 Auto-Renewal</h3>
                  <p className="text-gray-700 leading-relaxed">
                    All subscriptions are set to auto-renew by default. If you wish to disable auto-renewal, you can do so in your account settings or by contacting our support team.
                  </p>
                </div>
              </div>
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

export default CancellationPolicy;
