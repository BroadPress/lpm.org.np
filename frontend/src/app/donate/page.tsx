'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, AlertCircle, DollarSign, User, Mail, MapPin, FileText, Calendar, Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';

export default function DonatePage() {
  const [formData, setFormData] = useState({
    amount: '', firstName: '', lastName: '', email: '', address: '',
    caseDescription: '', paymentMethod: 'visa', cardHolderName: '', cardNumber: '', cvv: '', expiryDate: ''
  });
  const [selectedAmount, setSelectedAmount] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [showCVV, setShowCVV] = useState(false);

  const handleAmountSelect = (amount: string) => {
    setSelectedAmount(amount);
    setFormData({ ...formData, amount });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.amount || !formData.firstName || !formData.lastName || !formData.email) {
      setError('Please fill in all required fields.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setIsSubmitting(true);
    setError('');
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="text-center p-8">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h2 className="text-2xl font-bold">Thank You!</h2>
          <p className="text-gray-600 mt-2">Your donation of ${formData.amount} has been received.</p>
        </div>
      </div>
    );
  }

  const paymentMethods = [
    { id: 'visa', label: 'VISA', icon: '/donate/icon-img1.png' },
    { id: 'mastercard', label: 'MasterCard', icon: '/donate/icon-img2.png' },
    { id: 'skrill', label: 'Skrill', icon: '/donate/icon-img3.png' },
    { id: 'paypal', label: 'PayPal', icon: '/donate/icon-img4.png' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 dark:from-gray-900 dark:to-gray-950 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">Make a Donation</h1>
        <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto mb-8" />

        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-xl">
          {error && (
            <div className="mb-6 p-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl flex items-center gap-2 text-sm">
              <AlertCircle size={18} /> {error}
            </div>
          )}

          {/* Donation Amount */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <DollarSign className="text-orange-500" /> Your Donation
            </h3>
            <div className="flex flex-wrap gap-3 mb-4">
              {['50', '100', '200'].map(amt => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => handleAmountSelect(amt)}
                  className={`px-6 py-2 rounded-xl font-semibold transition ${
                    selectedAmount === amt
                      ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
                  }`}
                >
                  ${amt}
                </button>
              ))}
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter Amount"
                className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 w-40"
              />
            </div>
          </div>

          {/* Your Details */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <User className="text-orange-500" /> Your Details
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" name="firstName" placeholder="First Name*" value={formData.firstName} onChange={handleChange} className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500" required />
              <input type="text" name="lastName" placeholder="Last Name*" value={formData.lastName} onChange={handleChange} className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500" required />
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={16} />
                <input type="email" name="email" placeholder="Email*" value={formData.email} onChange={handleChange} className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500" required />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-gray-400" size={16} />
                <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div className="md:col-span-2 relative">
                <FileText className="absolute left-3 top-3 text-gray-400" size={16} />
                <textarea name="caseDescription" rows={3} placeholder="Case Description" value={formData.caseDescription} onChange={handleChange} className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none" />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <CreditCard className="text-orange-500" /> Choose Your Payment Method
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {paymentMethods.map(method => (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, paymentMethod: method.id })}
                  className={`py-3 rounded-xl border-2 transition ${
                    formData.paymentMethod === method.id
                      ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-orange-300'
                  }`}
                >
                  <div className="relative w-12 h-8 mx-auto"><Image src={method.icon} alt={method.label} fill className="object-contain" /></div>
                  <span className="text-xs text-gray-600 dark:text-gray-400 block mt-1">{method.label}</span>
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Card Holder Name</label>
                <input type="text" name="cardHolderName" value={formData.cardHolderName} onChange={handleChange} placeholder="Card Holder Name" className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Card Number</label>
                <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} placeholder="1234 5678 9012 3456" maxLength={16} className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">CVV</label>
                <div className="relative">
                  <input type={showCVV ? "text" : "password"} name="cvv" value={formData.cvv} onChange={handleChange} placeholder="123" maxLength={3} className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                  <button type="button" onClick={() => setShowCVV(!showCVV)} className="absolute right-3 top-3 text-gray-400">{showCVV ? <EyeOff size={16} /> : <Eye size={16} />}</button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Expire Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 text-gray-400" size={16} />
                  <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleChange} placeholder="MM/YY" maxLength={5} className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
              </div>
            </div>
          </div>

          <button type="submit" disabled={isSubmitting} className="w-full py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-semibold text-lg hover:shadow-lg transition disabled:opacity-50">
            {isSubmitting ? 'Processing...' : 'Donate Now'}
          </button>
        </form>
      </div>
    </div>
  );
}