import React from 'react';

const WHATSAPP_NUMBER = '17135607016';
const WHATSAPP_MESSAGE = "Hi Cloud 9 Travels! I'd like to plan a vacation.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Cloud 9 Travels on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition-transform duration-200 hover:scale-110 hover:shadow-[0_10px_28px_rgba(37,211,102,0.6)] sm:h-16 sm:w-16"
    >
      <svg viewBox="0 0 32 32" className="h-8 w-8 sm:h-9 sm:w-9" fill="white" aria-hidden="true">
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.34.652 4.527 1.784 6.393L3 29l7.8-2.744A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3zm0 21.6a9.55 9.55 0 0 1-4.87-1.334l-.35-.207-4.632 1.629 1.552-4.51-.228-.365A9.56 9.56 0 0 1 6.4 15c0-5.302 4.31-9.6 9.604-9.6 5.293 0 9.596 4.298 9.596 9.6 0 5.302-4.303 9.6-9.596 9.6zm5.263-7.19c-.288-.144-1.703-.84-1.967-.936-.264-.096-.456-.144-.648.144-.192.288-.744.936-.912 1.128-.168.192-.336.216-.624.072-.288-.144-1.216-.448-2.317-1.43-.856-.763-1.434-1.706-1.602-1.994-.168-.288-.018-.443.126-.587.13-.129.288-.336.432-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.648-1.563-.888-2.142-.234-.563-.472-.487-.648-.496l-.552-.01c-.192 0-.504.072-.768.36-.264.288-1.008.984-1.008 2.4 0 1.416 1.032 2.784 1.176 2.976.144.192 2.03 3.1 4.918 4.347.687.297 1.223.474 1.641.606.69.22 1.317.189 1.814.115.553-.083 1.703-.696 1.943-1.369.24-.672.24-1.248.168-1.368-.072-.12-.264-.192-.552-.336z"/>
      </svg>
    </a>
  );
};
