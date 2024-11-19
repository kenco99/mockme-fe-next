import React, { useState } from 'react';
import { useRazorpay, RazorpayOrderOptions } from 'react-razorpay';
import { createOrder } from '@/utils/api';
import { X } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SubscriptionModalProps {
  onClose: () => void;
}


const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const { error, isLoading, Razorpay } = useRazorpay();

  const handlePayment = async () => {
    
    try {
      console.log("paynow  button clicked")
      setLoading(true);
      const orderData = await createOrder();
      setLoading(false);
      
      if (!Razorpay) {
        throw new Error('Razorpay not initialized');
      }

      const options: RazorpayOrderOptions = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: orderData.data.amount,
        currency: orderData.data.currency,
        name: "PracticeGMAT",
        description: "Pro Membership",
        image: "https://example.com/your_logo",
        order_id: orderData.data.id,
        handler: (response: any) => {
          console.log(response);
          onClose();
        },
        prefill: {
          name: orderData.data.notes?.firstname + " " + orderData.data.notes?.lastname,
          email: orderData.data.notes?.email,
          contact: orderData.data.notes?.mobile_number
        },
        notes: orderData.data.notes,
        theme: {
          color: "#3399cc"
        }
      };

      const razorpayInstance = new Razorpay(options);
      razorpayInstance.open();
    } catch (error) {
      console.error('Error creating order:', error);
    } finally {
    //   setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    // <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    //   <div className="bg-white p-8 rounded-lg max-w-md w-full">
    //     <h2 className="text-2xl font-bold mb-4">Pro Membership Payment</h2>
    //     <p className="mb-4">You are about to purchase a Pro Membership for MockMe.</p>
    //     <p className="mb-4">Click "Pay Now" to proceed with the payment.</p>
    //     {error && <p className="text-red-500 mb-4">Error loading Razorpay: {error}</p>}
    //     <div className="flex justify-end">
    //       <button
    //         onClick={onClose}
    //         className="mr-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
    //       >
    //         Cancel
    //       </button>
    //       <button
    //         onClick={handlePayment}
    //         disabled={loading}
    //         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
    //       >
    //         {loading ? 'Processing...' : 'Pay Now'}
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-xl mx-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg sm:text-xl font-semibold">Get GMAT PRO to continue</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline mb-6">
            <span className="text-3xl sm:text-4xl font-bold">₹ 999</span>
            <span className="mt-1 sm:mt-0 sm:ml-2 text-gray-600">lifetime access</span>
          </div>
          <div className="mb-[24px]">
            <h3 className="text-sm uppercase text-gray-500 mb-2">WHAT'S INCLUDED</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-blue-500 mr-2 flex-shrink-0"></div>
                <span>Access to 1000+ questions</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-blue-500 mr-2 flex-shrink-0"></div>
                <span>GMAT Focus Edition questions</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm w-max">
              early user price
            </span>
            <button
            onClick={handlePayment}
             disabled={loading}
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition duration-300">
              {loading ? 'Processing...' : 'Pay Now'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
