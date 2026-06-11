

'use client';
import { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Send, Clock } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa6';
import OptimizedImage from '@/components/ui/OptimizedImage';

const contactInfo = [
  { icon: MapPin, title: 'Head Office Address', details: 'Near Pashupati School, Bajrang Tola, Birganj' },
  { icon: Phone, title: 'Phone Number', details: '+977 9841441374', link: 'tel:+9779841441374' },
  { icon: Mail, title: 'Email Address', details: 'info@lpm.org.np', link: 'mailto:info@lpm.org.np' },
  { icon: Globe, title: 'Website', details: 'www.lpm.org.np', link: 'https://www.lpm.org.np' }
];

const socialLinks = [
  { icon: FaFacebook, name: 'Facebook', color: 'bg-[#1877f2]' },
  { icon: FaTwitter, name: 'Twitter', color: 'bg-[#1da1f2]' },
  { icon: FaLinkedin, name: 'LinkedIn', color: 'bg-[#0a66c2]' },
  { icon: FaInstagram, name: 'Instagram', color: 'bg-gradient-to-tr from-[#f09433] to-[#bc1888]' },
  { icon: FaYoutube, name: 'YouTube', color: 'bg-[#ff0000]' }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', phone: '', message: '' });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill all required fields.' });
      return;
    }
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1000));
    setStatus({ type: 'success', message: 'Message sent! We will get back to you soon.' });
    setFormData({ name: '', email: '', subject: '', phone: '', message: '' });
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <span className="text-orange-500 text-sm font-semibold uppercase">CONTACT US</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Feel free to contact & reach us !!</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mb-6" />
            <p className="text-gray-600 mb-8">We are here to assist you on your journey of transformation.</p>
            
            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center">
                    <info.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{info.title}</h3>
                    {info.link ? <a href={info.link} className="text-gray-600 hover:text-orange-500">{info.details}</a> : <span className="text-gray-600">{info.details}</span>}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-xl shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center">
                  <Clock size={18} className="text-white" />
                </div>
                <h3 className="font-semibold">Working Hours</h3>
              </div>
              <div className="space-y-2 pl-14">
                <div className="flex justify-between"><span>Monday - Friday</span><span>9:00 AM - 6:00 PM</span></div>
                <div className="flex justify-between"><span>Saturday</span><span>10:00 AM - 4:00 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span><span>Closed</span></div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0">
                <OptimizedImage src="/contact/formbg.jpg" alt="Background" type="hero" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-900/90 to-pink-900/90" />
              </div>
              <div className="relative z-10 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input type="text" name="name" placeholder="Enter Name*" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    <input type="email" name="email" placeholder="Enter Email*" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input type="text" name="subject" placeholder="Enter Subject*" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    <input type="tel" name="phone" placeholder="Enter Number" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                  </div>
                  <textarea name="message" rows={5} placeholder="Enter Message*" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none" />
                  {status.type && <div className={`flex items-center gap-2 p-3 rounded-xl ${status.type === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}><span>{status.message}</span></div>}
                  <button type="submit" disabled={submitting} className="w-full py-3 bg-white text-orange-500 rounded-xl font-semibold flex items-center justify-center gap-2">{submitting ? 'Sending...' : <>Submit Now <Send size={18} /></>}</button>
                </form>
              </div>
            </div>

            <div className="mt-6 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
              <h3 className="font-semibold mb-4">Follow us on social media..</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, idx) => (
                  <a key={idx} href="#" target="_blank" className={`${social.color} text-white rounded-xl px-4 py-2 flex items-center gap-2 hover:scale-105 transition`}><social.icon size={16} /><span>{social.name}</span></a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 w-full h-[350px]">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113710.36495423553!2d84.7906101189676!3d27.04757484692372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39935446b21c98cb%3A0x42938e30ff4f6cb5!2sBirgunj!5e0!3m2!1sen!2snp!4v1779797183705!5m2!1sen!2snp" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Location" />
      </div>
    </div>
  );
}