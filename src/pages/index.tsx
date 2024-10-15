"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { signUp, fetchUserData } from "@/utils/api";
import UserDetailsModal from "@/components/UserDetailsModal";
import PaymentModal from '@/components/Rzp';
import { PiMathOperations, PiArticleNyTimes, PiChartLineUp, PiPlayCircle } from "react-icons/pi";
import Link from 'next/link';

interface User {
  firstname?: string;
  lastname?: string;
  mobile_number?: string;
}

const Index: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("jwt_token");
    if (token) {
      fetchUserData()
        .then((response) => {
          setUser(response.data);
          if (!response.data?.firstname) {
            setShowModal(true);
          }
        })
        .catch(() => {
          localStorage.removeItem("jwt_token");
        });
    }
  }, []);

  const handleCredentialResponse = async (credentialResponse: any) => {
    try {
      const { jwt_token, data } = await signUp(credentialResponse.credential);
      localStorage.setItem("jwt_token", jwt_token);
      setUser(data);
      if (!data?.firstname) {
        setShowModal(true);
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleStartMath = () => {
    if (user) {
      router.push("/dashboard");
    } else {
      alert("Please sign in to start practicing.");
    }
  };

  const handleDashboardClick = () => {
    router.push("/dashboard");
  };

  const openPaymentModal = () => setIsPaymentModalOpen(true);
  const closePaymentModal = () => setIsPaymentModalOpen(false);

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-6 bg-home-gradient rounded-b-[24px] h-[90%] w-[95%] z-0"></div>
          <div className="bg-white mx-auto rounded-xl max-w-5xl shadow-bigcard relative z-10">
            <div className="w-full mx-auto px-8 py-4 flex justify-between items-center">
              <h1 className="text-lg font-bold">Practice GMAT</h1>
              <div className="flex items-center space-x-4">
                <button
                  onClick={openPaymentModal}
                  className="bg-[#065F46] hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Pro membership
                </button>
                {user ? (
                  <button
                    className="bg-[#1E40AF] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    onClick={handleDashboardClick}
                  >
                    Dashboard
                  </button>
                ) : (
                  <GoogleLogin
                    onSuccess={handleCredentialResponse}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                  />
                )}
              </div>
            </div>
          </div>
          <main className="max-w-5xl mx-auto relative z-10 flex-grow">
            <div className="text-center my-20">
              <h2 className="font-playfair text-[52px] text-gray-500 italic mb-2">
                1000+ practice questions
              </h2>
              <h3 className="font-satoshi text-[52px] text-gray-800 font-semibold">
                For GMAT Focus Edition
              </h3>
              <p className="text-gray-400 leading-relaxed mt-6 max-w-2xl mx-auto">
               <i> Questions from past GMAT exams, verified by GMAT experts, to help
                you ace the exam. <br></br> Say bye to expensive GMAT books and prep material </i>
              </p>
              
              {/* New Video Section */}
              <div className="mt-12 bg-white rounded-3xl shadow-bigcard p-8">
                <h3 className="font-satoshi text-2xl text-gray-800 font-semibold mb-4">
                  Watch How It Works
                </h3>
                <div className="relative pb-[56.25%] h-0">
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full rounded-2xl"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Product Demo Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-gray-600 mt-4 flex items-center justify-center">
                  <PiPlayCircle className="mr-2 text-xl" />
                  Learn how our platform can boost your GMAT score
                </p>
              </div>
            </div>
            <div className="bg-white flex flex-col gap-10 rounded-3xl shadow-bigcard py-12 px-8">
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center text-gray-500 bg-gray-100 text-xl rounded-full mr-4">
                  <PiMathOperations />
                </div>
                <div className="flex-grow">
                  <h4 className="font-inter text-lg font-medium mb-1">
                    Math practice
                  </h4>
                </div>
                <button
                    className="bg-gray-900 text-white font-medium w-44 px-4 py-3 rounded-md hover:bg-gray-800 transition-colors"
                    onClick={handleStartMath}
                >
                  Start <span className="ml-1">→</span>
                </button>
              </div>
              <hr className="w-full border-gray-100"></hr>
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center text-gray-500 bg-gray-100 text-xl rounded-full mr-4">
                  <PiArticleNyTimes />
                </div>
                <div className="flex-grow">
                  <h4 className="font-inter text-lg font-medium mb-1">
                    Verbal Practice
                  </h4>
                </div>
                <button
                    className="bg-gray-900 text-white font-medium w-44 px-4 py-3 rounded-md hover:bg-gray-800 transition-colors"
                    onClick={handleStartMath}
                >
                  Start <span className="ml-1">→</span>
                </button>
              </div>
              <hr className="w-full border-gray-100"></hr>
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center text-gray-500 bg-gray-100 text-xl rounded-full mr-4">
                  <PiChartLineUp />
                </div>
                <div className="flex-grow">
                  <h4 className="font-inter text-lg font-medium mb-1">
                    Data insights
                  </h4>
                </div>
                <button
                    className="bg-gray-900 text-white font-medium w-44 px-4 py-3 rounded-md hover:bg-gray-800 transition-colors"
                    onClick={handleStartMath}
                >
                  Start <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          </main>
          {showModal && (
            <UserDetailsModal
              user={user}
              setUser={setUser}
              setShowModal={setShowModal}
            />
          )}
          <PaymentModal isOpen={isPaymentModalOpen} onClose={closePaymentModal} />
        </div>
        <footer className="bg-black text-white text-sm mt-8">
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
    </GoogleOAuthProvider>
  );
};

export default Index;
