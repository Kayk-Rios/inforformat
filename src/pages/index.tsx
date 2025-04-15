import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import Head from 'next/head';



export default function Home() {
  return (
    <div>
    <Head>
        <title>Infor Format - Formatação e Serviços de Informática</title>
        <meta name="Infor-Format" content="Serviços de formatação de computadores, instalação de Windows, Linux e pacotes Office. Atendimento especializado para empresas e residências." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <TestimonialsSection/>
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="5581981699096" message="Olá! Gostaria de saber mais sobre os serviços da Infor Format." />
   
    </div>
  );
}
