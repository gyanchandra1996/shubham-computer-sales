import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  Building,
  PhoneCall
} from 'lucide-react';
import { SHOP_CONFIG, getGeneralWhatsAppUrl } from '../data/config';
import WhatsAppButton from '../components/WhatsAppButton';
import { useCart } from '../context/CartContext';

export default function Contact() {
  const { showToast } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'General Inquiry / Product Availability',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) {
      showToast('Please fill out your name and message.', 'error');
      return;
    }

    const compiledMessage = `Hello Shubham Computer Sales (Gorath, Azamgarh),

I am contacting you from the website contact form:

Name: ${formData.name}
Phone: ${formData.phone || 'Not provided'}
Subject: ${formData.subject}
Message: ${formData.message}

Please get back to me with details and price. Thank you!`;

    const targetUrl = `https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=${encodeURIComponent(compiledMessage)}`;
    showToast('Redirecting to WhatsApp to send your inquiry...', 'success');
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  const faqs = [
    {
      q: 'How does WhatsApp ordering work on this website?',
      a: 'It is simple and instantaneous! Browse products or add multiple items to your cart, then click "Order on WhatsApp" or "Checkout via WhatsApp". A pre-formatted order summary will open in your WhatsApp app or web (8858352762), allowing you to confirm items, request discounts, and arrange payment & delivery in Azamgarh.'
    },
    {
      q: 'Are all laptops, printers, and computer parts genuine?',
      a: 'Yes, 100%. Shubham Computer Sales is an authorized retail partner for HP, Dell, Canon, Epson, Intel, AMD, Logitech and other leading brands. Every product comes in original factory sealed packaging with official manufacturer warranty.'
    },
    {
      q: 'Do you deliver in Gorath and across Azamgarh district?',
      a: 'Yes, we provide same-day local delivery across Gorath, Azamgarh city, Bilariyaganj, Mubarakpur, Phoolpur, and nearby UP regions. In-store pickup is also available at our Gorath market showroom.'
    },
    {
      q: 'Can you assemble a custom gaming or editing PC for my budget?',
      a: 'Absolutely! Our hardware technicians in Gorath customize desktop configurations according to your specific software requirements (CAD, Premiere, Photoshop, Tally, Gaming) and budget. Contact us via WhatsApp on 8858352762 for a quick quote.'
    },
    {
      q: 'What payment methods do you accept at the Gorath shop?',
      a: 'We accept UPI (Google Pay, PhonePe, Paytm), Net Banking, Credit/Debit cards at the store, and Cash on Delivery / Store Pickup.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-electric font-bold text-xs uppercase tracking-wider mb-2">
            <Building className="w-4 h-4" />
            <span>Customer Service & Showroom</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-950">
            Contact Shubham Computer Sales
          </h1>
          <p className="text-sm text-slate-500 mt-2">
            Located at Gorath, Azamgarh (UP). Have questions about printer models, toner cartridges, laptop specifications or stock? We are here to help via WhatsApp, phone, or in person at our store.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Card 1: Shop Address */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-electric flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-navy-950 mb-1">Our Store Address</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {SHOP_CONFIG.address}
              </p>
              <p className="text-[11px] text-electric font-semibold mt-1">
                Landmark: {SHOP_CONFIG.landmark}
              </p>
            </div>
            <a
              href={SHOP_CONFIG.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-xs font-bold text-electric hover:underline flex items-center gap-1"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Phone */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-electric flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-navy-950 mb-1">Direct Call</h3>
              <p className="text-xs text-slate-500 mb-2">
                Call our sales desk directly for immediate stock check:
              </p>
              <p className="text-base font-extrabold text-navy-950">{SHOP_CONFIG.displayPhone}</p>
              <p className="text-xs text-slate-500 mt-0.5">Gorath, Azamgarh</p>
            </div>
            <a
              href={`tel:${SHOP_CONFIG.whatsappNumber}`}
              className="mt-4 text-xs font-bold text-electric hover:underline"
            >
              Call Store Representative →
            </a>
          </div>

          {/* Card 3: WhatsApp Support */}
          <div className="bg-white p-6 rounded-2xl border border-emerald-200/90 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-bl-full pointer-events-none"></div>
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-navy-950 mb-1">WhatsApp Chat</h3>
              <p className="text-xs text-slate-500 mb-2">
                Quickest way to order, get quotations, and send component photos:
              </p>
              <p className="text-base font-extrabold text-emerald-600">{SHOP_CONFIG.displayWhatsApp}</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Instant response in minutes</p>
            </div>
            <WhatsAppButton
              variant="contact"
              label="Chat on 8858352762"
              className="mt-4 py-2 px-3 text-xs font-bold"
            />
          </div>

          {/* Card 4: Business Hours */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-electric flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-navy-950 mb-1">Business Hours</h3>
              <div className="space-y-1 text-xs text-slate-600">
                <p>
                  <strong className="text-navy-900">Mon – Sat:</strong> 10:00 AM – 8:30 PM
                </p>
                <p>
                  <strong className="text-navy-900">Sunday:</strong> 11:00 AM – 5:00 PM
                </p>
                <p className="text-[11px] text-emerald-600 font-semibold pt-1">
                  WhatsApp Orders 24/7
                </p>
              </div>
            </div>
            <span className="mt-4 text-[11px] text-slate-400">Open on all regular business days</span>
          </div>
        </div>

        {/* Form & Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left: Contact & WhatsApp Order Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-navy-950">
                Send an Inquiry or Quote Request
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Fill this quick form to send directly to our WhatsApp support team (8858352762) with one click.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-electric focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Your Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. 9876543210"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-electric focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Inquiry Topic
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-electric focus:bg-white font-medium"
                >
                  <option value="General Inquiry / Product Availability">General Inquiry / Product Availability</option>
                  <option value="Printer & Toner Cartridge Requirement">Printer & Toner Cartridge Requirement</option>
                  <option value="Laptop or Desktop PC Quotation">Laptop or Desktop PC Quotation</option>
                  <option value="Custom PC Build Consultation">Custom PC Build Consultation</option>
                  <option value="Bulk Order for Office / School / Cyber Cafe">Bulk Order for Office / School / Cyber Cafe</option>
                  <option value="Cartridge Refilling & Laptop Repair">Cartridge Refilling & Laptop Repair</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Your Message or Product Requirements *
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Please specify printer model (e.g. HP 108w or 88A toner), laptop specs, RAM capacity, or question..."
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-electric focus:bg-white resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all active:scale-[0.99] text-sm"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Send to WhatsApp (8858352762)</span>
              </button>

              <p className="text-[11px] text-slate-400 text-center">
                Clicking opens WhatsApp with your pre-filled message directly to Shubham Computer Sales.
              </p>
            </form>
          </div>

          {/* Right: Gorath Azamgarh Location Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-navy-950 text-white p-6 sm:p-8 rounded-3xl border border-navy-800 shadow-md">
            <div>
              <div className="inline-flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4" />
                <span>Gorath, Azamgarh (UP)</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Visit Shubham Computer Sales</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Located in Gorath Market, Azamgarh. Walk in to test laptops, inspect printer printouts, purchase original cartridges, or pick up customized PC setups.
              </p>

              {/* Map Preview Graphic */}
              <div className="rounded-2xl overflow-hidden border border-navy-800 bg-navy-900 aspect-video relative flex items-center justify-center group mb-6">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
                  alt="City Map Navigation Preview"
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy-950/50 backdrop-blur-[1px] flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-electric text-white flex items-center justify-center shadow-lg mb-2">
                    <MapPin className="w-6 h-6 animate-bounce" />
                  </div>
                  <p className="text-sm font-bold text-white">Shubham Computer Sales</p>
                  <p className="text-xs text-emerald-400 font-bold">Gorath, Azamgarh (UP)</p>
                  <p className="text-[11px] text-slate-300">Call/WhatsApp: 8858352762</p>
                </div>
              </div>
            </div>

            <a
              href={SHOP_CONFIG.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-electric hover:bg-electric-600 text-white font-bold py-3 px-4 rounded-xl text-xs transition-colors"
            >
              <span>Get Directions to Gorath on Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-electric font-bold text-xs uppercase tracking-wider mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>Questions & Answers</span>
            </div>
            <h2 className="text-2xl font-extrabold text-navy-950">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Everything you need to know about ordering and hardware services in Gorath, Azamgarh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70">
                <h4 className="text-sm font-bold text-navy-950 mb-2 flex items-start gap-2">
                  <span className="text-electric font-black">Q.</span>
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
