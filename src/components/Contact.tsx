import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {  Mail, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';
// Removed backend-related imports

// Removed duplicate Contact function

function sendEmail(name: string, email: string, message: string) {
  // Mocking the API call for testing purposes
  return new Promise<Response>((resolve) => {
    setTimeout(() => {
      resolve(new Response(JSON.stringify({ success: true }), { status: 200 }));
    }, 1000);
  });
}
// Removed from here
export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await sendEmail(formData.name, formData.email, formData.message);
      if (response.ok) {
        setSuccessMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setErrorMessage('Failed to send your message. Please try again later.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="max-w-2xl mx-auto"
        >
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ y: 20 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div>
              <label htmlFor="name" className="block text-white mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </button>
          </motion.form>

          {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
          {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        </motion.div>
      </div>
    </section>
  );
}

// Note: To receive messages on your email, you need a backend service to handle the email sending. 
// Removed backend code. Ensure the backend is implemented in a separate file.
// No additional code is needed here. The placeholder can be left empty.