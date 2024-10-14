import React, { useState } from 'react';
import { useRazorpay, RazorpayOrderOptions } from 'react-razorpay';
import { createOrder } from '@/utils/api';

interface PaymentModalProps {
  isOpen: boolean;
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
        name: "MockMe",
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Pro Membership Payment</h2>
        <p className="mb-4">You are about to purchase a Pro Membership for MockMe.</p>
        <p className="mb-4">Click "Pay Now" to proceed with the payment.</p>
        {error && <p className="text-red-500 mb-4">Error loading Razorpay: {error}</p>}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handlePayment}
            disabled={loading}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
          >
            {loading ? 'Processing...' : 'Pay Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
