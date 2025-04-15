import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton({ phoneNumber, message }:any) {
  const encodedMessage = encodeURIComponent(message || "Olá! Gostaria de saber mais sobre os serviços de formatação.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors z-50"
    >
      <MessageCircle size={28} />
    </a>
  );
}
