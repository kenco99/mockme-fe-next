import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const TermsAndConditions: React.FC = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions | Your Website Name</title>
        <meta name="description" content="Terms and Conditions for Your Website Name" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-black">Terms and Conditions</h1>
          
          <div className="bg-white shadow-lg rounded-lg p-8">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-black">1. Introduction</h2>
              <p className="text-gray-700">
                Welcome to PracticeGMAT. By accessing or using our website and services, you agree to be bound by these Terms and Conditions. Please read them carefully. If you do not agree with these terms, you should not use our website or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-black">2. Definitions</h2>
              <ul className="list-disc pl-6 text-gray-700">
                <li><strong>"We," "Our," "Us":</strong> Refers to [Your Company Name], the owner and operator of this website.</li>
                <li><strong>"You," "Your," "User":</strong> Refers to the person accessing or using our website and services.</li>
                <li><strong>"Service":</strong> Refers to the educational digital products and other services offered through this website.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-black">3. Eligibility</h2>
              <p className="text-gray-700">
                By using our services, you confirm that you are at least 18 years old or have the necessary parental consent. You agree to provide accurate and truthful information during the registration or purchase process.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-black">4. Use of Service</h2>
              <ul className="list-disc pl-6 text-gray-700">
                <li><strong>License:</strong> We grant you a limited, non-exclusive, non-transferable license to access and use our digital products for personal, non-commercial purposes.</li>
                <li><strong>Restrictions:</strong> You agree not to copy, modify, distribute, or sell any part of our content or services without our prior written consent.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-black">5. Accounts and Security</h2>
              <ul className="list-disc pl-6 text-gray-700">
                <li><strong>Account Creation:</strong> You may need to create an account to access certain features of our service. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</li>
                <li><strong>Security:</strong> You agree to notify us immediately of any unauthorized use of your account or any other breach of security.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-black">6. Payments and Refunds</h2>
              <ul className="list-disc pl-6 text-gray-700">
                <li><strong>Payments:</strong> All payments for our services must be made through the available payment methods listed on our website.</li>
                <li><strong>Refunds:</strong> Our refund policy is outlined in our Pricing Policy. Please review it before making a purchase.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-black">7. Intellectual Property</h2>
              <ul className="list-disc pl-6 text-gray-700">
                <li><strong>Ownership:</strong> All content, including but not limited to text, images, logos, and software, is the property of [Your Company Name] or its licensors and is protected by copyright and other intellectual property laws.</li>
                <li><strong>User Content:</strong> Any content you submit to our website, such as comments or reviews, remains your property, but you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display your content.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-black">8. Disclaimer of Warranties</h2>
              <p className="text-gray-700">
                Our services are provided "as is" without any warranties, express or implied. We do not guarantee that our services will be error-free or uninterrupted.
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

export default TermsAndConditions;
