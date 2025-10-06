import React from "react";
import profile from "../data/profile.json";
import { useForm, ValidationError } from '@formspree/react';
import Section from "./Section.jsx"; // Assuming Section component exists

export default function Contact() {
  // Your Formspree State hook
  const [state, handleSubmit] = useForm("mldplzlv"); 

  // Success Message
  if (state.succeeded) {
      return (
        <Section id="contact" title="Message Sent!" badge="Contact form">
            <div className="text-center py-12 rounded-lg bg-gray-800 text-white">
                <p className="text-2xl font-bold mb-2">Thank you for reaching out, {profile.name.split(' ')[0]}!</p>
                <p className="text-gray-400">I'll get back to you as soon as possible.</p>
            </div>
        </Section>
      );
  }

  // --- Form Content ---
  return (
    <Section id="contact" title="Send me a message" badge="Contact form" icon="⚡️">
      <div className="max-w-xl mx-auto p-8 rounded-2xl bg-[#16161b] shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Full Name Input (Not currently in your simple form, but added for the look) */}
          {/* NOTE: You must register a 'name' field in your Formspree form settings */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Full Name
            </label>
            <input
              id="name"
              type="text" 
              name="name"
              className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-pink-500 focus:border-pink-500"
              placeholder="Enter your full name"
              required
            />
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email" 
              name="email"
              className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-pink-500 focus:border-pink-500"
              placeholder="Enter your email address"
              required
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-pink-500 focus:border-pink-500 resize-none"
              placeholder="Please describe your inquiry in detail..."
              required
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>
          
          {/* Submit Button (Styled with Accent Gradient) */}
          <button 
            type="submit" 
            disabled={state.submitting}
            className="w-full flex items-center justify-center gap-2 mt-8 px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:opacity-90 disabled:opacity-50"
            style={{ 
              backgroundImage: 'var(--accent-grad)',
              boxShadow: '0 4px 15px rgba(236, 72, 153, 0.4)' 
            }}
          >
            {/* Added a send icon for polish */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-send">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
            {state.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </Section>
  );
}