import React from 'react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="min-h-screen py-6 bg-gray-100">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
                    <p>At practiceGMAT.com, your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website and services. By using our website, you agree to the practices described in this policy.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
                    <h3 className="text-xl font-medium mb-2">Personal Information</h3>
                    <p>We collect personal information that you voluntarily provide to us, such as your name, email address, payment details, and any other information necessary to provide our services.</p>
                    <h3 className="text-xl font-medium mt-4 mb-2">Usage Data</h3>
                    <p>We automatically collect information about how you use our website, such as your IP address, browser type, the pages you visit, and the time you spend on each page.</p>
                    <h3 className="text-xl font-medium mt-4 mb-2">Cookies</h3>
                    <p>Our website uses cookies and similar technologies to improve your experience. Cookies help us understand your preferences and enable certain website features.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-3">How We Use Your Information</h2>
                    <ul className="list-disc pl-6">
                        <li><strong>To Provide Services:</strong> We use your information to process transactions, deliver digital products, and offer customer support.</li>
                        <li><strong>To Improve Our Website:</strong> We analyze usage data to enhance our website, tailor your experience, and develop new features.</li>
                        <li><strong>To Communicate:</strong> We may send you updates, promotional offers, and other communications. You can opt out of marketing communications at any time.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-3">Sharing Your Information</h2>
                    <h3 className="text-xl font-medium mb-2">With Service Providers</h3>
                    <p>We may share your information with third-party providers who assist us in operating our website, processing payments, and delivering emails.</p>
                    <h3 className="text-xl font-medium mt-4 mb-2">For Legal Purposes</h3>
                    <p>We may disclose your information if required by law or to respond to legal requests from authorities.</p>
                    <h3 className="text-xl font-medium mt-4 mb-2">In Business Transfers</h3>
                    <p>In the event of a business transaction such as a merger, acquisition, or sale of assets, your information may be transferred to the new owner.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
                    <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
                    <ul className="list-disc pl-6">
                        <li><strong>Access and Update:</strong> You have the right to access and update your personal information.</li>
                        <li><strong>Request Deletion:</strong> You can request the deletion of your personal data, subject to certain legal exceptions.</li>
                        <li><strong>Opt-Out:</strong> You can opt out of receiving promotional emails by following the unsubscribe instructions provided in those emails.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-3">Children's Privacy</h2>
                    <p>Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we discover that we have collected such information, we will take steps to delete it.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-3">Changes to This Policy</h2>
                    <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the "Last Updated" date will be updated accordingly. We encourage you to review this policy periodically.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
                    <p>If you have any questions or concerns about our Privacy Policy, please contact us at harish@bluelearn.in</p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
