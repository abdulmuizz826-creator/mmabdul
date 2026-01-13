import { useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success
  const address = "Victoria Island, Lagos, Nigeria";
  
  // Encoded URL for Google Maps Embed
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(address)}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormStatus('success');
        e.target.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('idle');
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      setFormStatus('idle');
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="min-h-screen py-24 px-4 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Get in touch for consultations or project inquiries.">
          Contact Us
        </SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT COLUMN: Contact Info & Map */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="flex flex-col items-center justify-center text-center p-8">
                <Mail className="w-8 h-8 text-cyan-600 mb-4" />
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">Email</h3>
                <p className="text-slate-500 text-sm">ceo@netsolutions.com</p>
              </Card>
              <Card className="flex flex-col items-center justify-center text-center p-8">
                <Phone className="w-8 h-8 text-cyan-600 mb-4" />
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">Phone</h3>
                <p className="text-slate-500 text-sm">+234 (706) 656-6079</p>
              </Card>
            </div>

            <div className="h-80 w-full rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 relative bg-slate-200">
              <iframe 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.72859714247!2d3.4184646147701964!3d6.42805599534914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8ad167c13203%3A0xc39116c90d655f44!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1647432000000!5m2!1sen!2sng"
                title="Google Map"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0"
              ></iframe>
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-500">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Headquarters: {address}</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <Card>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                <input 
                  required 
                  name="name"
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 outline-none transition-all" 
                  placeholder="Your Name" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                <input 
                  required 
                  name="email"
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 outline-none transition-all" 
                  placeholder="you@company.com" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea 
                  required 
                  name="message"
                  rows="4" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 outline-none transition-all" 
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={formStatus === 'submitting' || formStatus === 'success'}
                className={`w-full py-4 rounded-lg font-bold text-white transition-all flex items-center justify-center gap-2 ${
                  formStatus === 'success' ? 'bg-green-500' : 'bg-cyan-600 hover:bg-cyan-700 shadow-lg shadow-cyan-500/20'
                }`}
              >
                {formStatus === 'submitting' ? (
                  <span>Sending...</span>
                ) : formStatus === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" /> Message Sent!
                  </>
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </button>
              {formStatus === 'success' && (
                <p className="text-center text-green-600 text-sm mt-2 animate-pulse">
                  Thank you! Your inquiry has been saved to our database.
                </p>
              )}
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}