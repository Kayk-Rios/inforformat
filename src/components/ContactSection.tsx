import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Entre em Contato</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Estamos prontos para atender suas necessidades de formatação e serviços de informática.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6">Informações de Contato</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-gray-900 font-medium">Telefone/WhatsApp</p>
                  <p className="text-gray-600">(81) 981699096</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-gray-900 font-medium">Email</p>
                  <p className="text-gray-600">contato@inforformat.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-gray-900 font-medium">Endereço</p>
                  <p className="text-gray-600">Rua brasabante - Cordeiro</p>
                  <p className="text-gray-600">Recife - Pernambuco</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="/whatsapp/page" 
                className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700"
              >
                <MessageCircle size={20} className="mr-2" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
