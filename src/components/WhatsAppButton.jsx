import React from 'react';
import { MessageSquare, Send } from 'lucide-react';
import { getProductWhatsAppUrl, getGeneralWhatsAppUrl } from '../data/config';

/**
 * WhatsAppButton supports variants:
 * - 'order': For product cards & detail views
 * - 'floating': Fixed badge at bottom corner
 * - 'header': Clean compact button for top navigation
 * - 'contact': Larger banner/card CTA
 */
export default function WhatsAppButton({
  variant = 'order',
  product = null,
  quantity = 1,
  className = '',
  label = '',
  customText = ''
}) {
  const getHref = () => {
    if (variant === 'order' && product) {
      return getProductWhatsAppUrl(product, quantity);
    }
    return getGeneralWhatsAppUrl(customText);
  };

  if (variant === 'floating') {
    return (
      <a
        href={getHref()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Shubham Computer Sales on WhatsApp"
        className={`fixed bottom-6 left-6 z-40 flex items-center gap-3 bg-whatsapp text-white px-4 py-3 rounded-full shadow-lg hover:bg-whatsapp-dark hover:scale-105 transition-all duration-300 group glow-effect-green ${className}`}
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 2C6.5 2 2 6.5 2 12.031c0 1.969.563 3.813 1.531 5.406L2 22l4.75-1.5c1.531.875 3.313 1.344 5.281 1.344 5.531 0 10.031-4.5 10.031-10.031S17.562 2 12.031 2zm0 18.25c-1.75 0-3.375-.469-4.781-1.313l-.344-.219-2.813.906.938-2.75-.219-.375c-.938-1.469-1.438-3.188-1.438-4.969 0-4.625 3.781-8.406 8.406-8.406 4.625 0 8.406 3.781 8.406 8.406 0 4.625-3.781 8.406-8.406 8.406zm4.625-6.281c-.25-.125-1.469-.719-1.688-.813-.219-.094-.375-.125-.531.125-.156.25-.625.813-.781.969-.156.188-.313.188-.563.063-.25-.125-1.063-.391-2.031-1.25-.75-.688-1.25-1.5-1.406-1.781-.156-.25 0-.406.125-.531.094-.094.25-.281.375-.406.125-.125.188-.25.281-.406.094-.156.031-.313-.031-.438-.063-.125-.531-1.281-.719-1.75-.188-.469-.375-.406-.531-.406h-.438c-.156 0-.438.063-.656.313-.219.25-.875.844-.875 2.063s.906 2.406 1.031 2.563c.125.188 1.781 2.719 4.313 3.813.594.25 1.063.406 1.438.531.625.188 1.188.156 1.625.094.5-.063 1.469-.594 1.688-1.188.219-.594.219-1.094.156-1.188-.063-.094-.219-.156-.469-.281z"/>
        </svg>
        <div className="hidden sm:block text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-green-100">Direct Chat</p>
          <p className="text-sm font-bold leading-none">Order on WhatsApp</p>
        </div>
      </a>
    );
  }

  if (variant === 'header') {
    return (
      <a
        href={getHref()}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold text-xs sm:text-sm px-3.5 py-2 rounded-lg transition-colors shadow-sm ${className}`}
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 2C6.5 2 2 6.5 2 12.031c0 1.969.563 3.813 1.531 5.406L2 22l4.75-1.5c1.531.875 3.313 1.344 5.281 1.344 5.531 0 10.031-4.5 10.031-10.031S17.562 2 12.031 2zm0 18.25c-1.75 0-3.375-.469-4.781-1.313l-.344-.219-2.813.906.938-2.75-.219-.375c-.938-1.469-1.438-3.188-1.438-4.969 0-4.625 3.781-8.406 8.406-8.406 4.625 0 8.406 3.781 8.406 8.406 0 4.625-3.781 8.406-8.406 8.406zm4.625-6.281c-.25-.125-1.469-.719-1.688-.813-.219-.094-.375-.125-.531.125-.156.25-.625.813-.781.969-.156.188-.313.188-.563.063-.25-.125-1.063-.391-2.031-1.25-.75-.688-1.25-1.5-1.406-1.781-.156-.25 0-.406.125-.531.094-.094.25-.281.375-.406.125-.125.188-.25.281-.406.094-.156.031-.313-.031-.438-.063-.125-.531-1.281-.719-1.75-.188-.469-.375-.406-.531-.406h-.438c-.156 0-.438.063-.656.313-.219.25-.875.844-.875 2.063s.906 2.406 1.031 2.563c.125.188 1.781 2.719 4.313 3.813.594.25 1.063.406 1.438.531.625.188 1.188.156 1.625.094.5-.063 1.469-.594 1.688-1.188.219-.594.219-1.094.156-1.188-.063-.094-.219-.156-.469-.281z"/>
        </svg>
        <span>WhatsApp Order</span>
      </a>
    );
  }

  // Default 'order' or custom CTA button
  return (
    <a
      href={getHref()}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-medium px-4 py-2.5 rounded-lg transition-all duration-200 active:scale-95 shadow-sm hover:shadow-md ${className}`}
    >
      <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
        <path d="M12.031 2C6.5 2 2 6.5 2 12.031c0 1.969.563 3.813 1.531 5.406L2 22l4.75-1.5c1.531.875 3.313 1.344 5.281 1.344 5.531 0 10.031-4.5 10.031-10.031S17.562 2 12.031 2zm0 18.25c-1.75 0-3.375-.469-4.781-1.313l-.344-.219-2.813.906.938-2.75-.219-.375c-.938-1.469-1.438-3.188-1.438-4.969 0-4.625 3.781-8.406 8.406-8.406 4.625 0 8.406 3.781 8.406 8.406 0 4.625-3.781 8.406-8.406 8.406zm4.625-6.281c-.25-.125-1.469-.719-1.688-.813-.219-.094-.375-.125-.531.125-.156.25-.625.813-.781.969-.156.188-.313.188-.563.063-.25-.125-1.063-.391-2.031-1.25-.75-.688-1.25-1.5-1.406-1.781-.156-.25 0-.406.125-.531.094-.094.25-.281.375-.406.125-.125.188-.25.281-.406.094-.156.031-.313-.031-.438-.063-.125-.531-1.281-.719-1.75-.188-.469-.375-.406-.531-.406h-.438c-.156 0-.438.063-.656.313-.219.25-.875.844-.875 2.063s.906 2.406 1.031 2.563c.125.188 1.781 2.719 4.313 3.813.594.25 1.063.406 1.438.531.625.188 1.188.156 1.625.094.5-.063 1.469-.594 1.688-1.188.219-.594.219-1.094.156-1.188-.063-.094-.219-.156-.469-.281z"/>
      </svg>
      <span>{label || 'Order on WhatsApp'}</span>
    </a>
  );
}
