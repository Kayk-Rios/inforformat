import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <Image
          src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Computador em manutenção"
          layout="fill"
          objectFit="cover"
          className="w-full"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Infor Format
          </h1>
          <p className="mt-6 text-xl max-w-prose mx-auto">
            Especialistas em formatação e instalação de sistemas operacionais, aplicativos e serviços para seu computador.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/servicos/page" className="inline-block bg-blue-600 px-6 py-3 border border-transparent rounded-md text-base font-medium hover:bg-blue-700">
              Nossos Serviços
            </Link>
            <Link href="/whatsapp/page" className="inline-block bg-green-600 px-6 py-3 border border-transparent rounded-md text-base font-medium hover:bg-green-700">
              Fale Conosco
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
