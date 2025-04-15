'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function WhatsAppPage() {
  const router = useRouter();

  const phoneNumber = '5581981699096'; // Altere para seu número (com DDI + DDD)
  const message = encodeURIComponent('Olá! Gostaria de mais informações.');
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  const handleRedirect = () => {
    window.open(whatsappURL, '_blank');
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-green-50 text-center px-4">
      <Image
        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Coloque um logo em public/whatsapp-logo.png
        alt="Logo do WhatsApp"
        width={100}
        height={100}
        className="mb-4"
      />
      <h1 className="text-3xl font-bold text-green-800 mb-2">
        Fale Conosco pelo WhatsApp
      </h1>
      <p className="text-gray-700 mb-6 max-w-md">
        Clique no botão abaixo para iniciar uma conversa diretamente no nosso WhatsApp. Estamos prontos para te atender!
      </p>
      <button
        onClick={handleRedirect}
        className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-green-600 transition-colors"
      >
        Iniciar conversa
      </button>
    </main>
  );
}






// import { useEffect } from 'react';
// import Head from 'next/head';
// import Navbar from '../../components/Navbar';
// import Footer from '../../components/Footer';

// export default function WhatsappPage() {
//   const phoneNumber = '5511999999999'; // Substitua pelo seu número
//   const message = 'Olá! Vim pelo site e gostaria de saber mais sobre os serviços da Infor Format.';
//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
//   useEffect(() => {
//     // Redireciona após 5 segundos
//     const redirectTimer = setTimeout(() => {
//       window.location.href = whatsappUrl;
//     }, 5000);
    
//     return () => clearTimeout(redirectTimer);
//   }, []);
  
//   return (
//     <div>
//       <Head>
//         <title>Redirecionando para WhatsApp - Infor Format</title>
//         <meta name="description" content="Redirecionando para nosso atendimento via WhatsApp" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <Navbar />
//       <main className="py-20 bg-gray-50">
//         <div className="max-w-3xl mx-auto px-4 text-center">
//           <h1 className="text-3xl font-bold text-gray-900 mb-6">Redirecionando para WhatsApp</h1>
//           <p className="text-lg text-gray-600 mb-8">
//             Você será redirecionado para nosso atendimento via WhatsApp em alguns segundos...
//           </p>
//           <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-8"></div>
//           <p>
//             Se o redirecionamento não funcionar, 
//             <a 
//               href={whatsappUrl} 
//               className="text-blue-600 hover:text-blue-800 font-medium ml-1"
//               target="_blank" 
//               rel="noopener noreferrer"
//             >
//               clique aqui
//             </a>
//           </p>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }

