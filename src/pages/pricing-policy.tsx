import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const PricingPolicy: React.FC = () => {
  return (
    <>
      <Head>
        <title>Pricing Policy | Your Company Name</title>
        <meta name="description" content="Our pricing policy and terms" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow container mx-auto px-4 py-12 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center">Pricing Policy</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Pricing Structure</h2>
            <p className="mb-4">
              We offer a freemium pricing structure. The first 5 questions are free to access and then we charge a monthly subscription of ₹1,000 to access the rest of the questions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Payment Methods</h2>
            <p className="mb-2">We accept the following payment methods:</p>
            <ul className="list-disc pl-6">
              <li>Credit/Debit Cards (Visa, MasterCard, etc.)</li>
              <li>UPI</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Subscription Plans</h2>
            <ul className="list-disc pl-6">
              <li><strong>Billing Cycle:</strong> Subscriptions are billed on a monthly basis.</li>
              <li><strong>Auto-Renewal:</strong> Subscriptions renew automatically at the end of each billing cycle. You can cancel at any time before the renewal date to avoid further charges.</li>
              <li><strong>Cancellation:</strong> You can cancel the subscription by clicking on the cancel subscribe button under profile icon</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Taxes</h2>
            <p>All prices are inclusive of local taxes.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Refund Policy</h2>
            <ul className="list-disc pl-6">
              <li><strong>Digital Products:</strong> Due to the nature of digital products, all sales are final. However, if you encounter any issues, please contact us within 7 days of purchase for assistance. You can email us at harish@bluelearn.in</li>
              <li><strong>Subscriptions:</strong> If you are unsatisfied with your subscription, you can cancel it at any time, but refunds will only be provided if you contact us within 7 days of the initial purchase.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Price Changes</h2>
            <p>
              We reserve the right to change our prices at any time. Any changes will be communicated to existing subscribers at least 7 days in advance. Your continued use of the service after the price change indicates your acceptance of the new prices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
            <p>
              If you have any questions about our pricing policy, please contact us at{' '}
              <a href="mailto:harish@bluelearn.in" className="text-blue-600 hover:underline">
                harish@bluelearn.in
              </a>
            </p>
          </section>
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

export default PricingPolicy;
