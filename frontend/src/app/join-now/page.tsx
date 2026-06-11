'use client';
import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function JoinNowPage() {
  const [form, setForm] = useState({ mission: '', email: '', education: '', phone: '', reason: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.mission || !form.email || !form.phone || !form.reason) {
      setError('Please fill all required fields.');
      return;
    }
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1000));
    setSubmitted(true);
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8"><div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"><CheckCircle size={40} className="text-white" /></div><h2 className="text-2xl font-bold">Application Submitted!</h2><p className="text-gray-600 mt-2">Thank you for your interest. Our team will contact you soon.</p></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-2">Volunteering Opportunity</h1>
        <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto mb-8" />
        
        <div className="bg-orange-50 p-5 rounded-xl mb-6">
          <p><strong>Building A Positive World</strong> - Only Youthful energy Invited. Create Self Management Leadership by providing Positive, Powerful, Purposeful thinking in the community.</p>
          <p className="mt-3">Life Positive Mission is a volunteer-run Public Charitable International Non-Profit Organization dedicated to cultivating human potential.</p>
          <p className="italic mt-2">"A touchstone for all important choices and decisions in life."</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-lg">
          {error && <div className="mb-4 p-3 bg-red-100 text-red-600 rounded-lg flex items-center gap-2"><AlertCircle size={18} />{error}</div>}
          
          <div className="mb-4"><label className="block text-sm font-medium mb-1">Life Positive Mission *</label><input type="text" value={form.mission} onChange={(e) => setForm({...form, mission: e.target.value})} className="w-full px-4 py-2 border rounded-lg" required /></div>
          <div className="mb-4"><label className="block text-sm font-medium mb-1">Email *</label><input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="w-full px-4 py-2 border rounded-lg" required /><p className="text-xs text-gray-400 mt-1">We'll never share your email.</p></div>
          <div className="mb-4"><label className="block text-sm font-medium mb-1">Highest Education</label><select value={form.education} onChange={(e) => setForm({...form, education: e.target.value})} className="w-full px-4 py-2 border rounded-lg"><option value="">Select</option><option>High School</option><option>Bachelor's</option><option>Master's</option><option>PhD</option></select></div>
          <div className="mb-4"><label className="block text-sm font-medium mb-1">Phone Number *</label><input type="tel" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} className="w-full px-4 py-2 border rounded-lg" required /></div>
          <div className="mb-6"><label className="block text-sm font-medium mb-1">Why you want to become a volunteer? *</label><textarea rows={4} value={form.reason} onChange={(e) => setForm({...form, reason: e.target.value})} className="w-full px-4 py-2 border rounded-lg" required /></div>
          
          <button type="submit" disabled={submitting} className="w-full py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg font-semibold flex items-center justify-center gap-2">{submitting ? 'Submitting...' : <>Submit <Send size={16} /></>}</button>
        </form>
      </div>
    </div>
  );
}