import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Infor Format</h3>
            <p className="text-gray-300 text-sm">
              Especialistas em formatação e serviços de informática para sua empresa ou residência.
            </p>
            <div className="flex space-x-4">
  <Link href="#" className="text-gray-400 hover:text-white">
    <Facebook size={20} />
  </Link>
  <Link href="#" className="text-gray-400 hover:text-white">
    <Instagram size={20} />
  </Link>
  <Link href="#" className="text-gray-400 hover:text-white">
    <Twitter size={20} />
  </Link>
  <Link href="#" className="text-gray-400 hover:text-white">
    <Linkedin size={20} />
  </Link>
</div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicos/windows" className="text-gray-300 hover:text-white text-sm">
                  Formatação Windows
                </Link>
              </li>
              <li>
                <Link href="/servicos/linux" className="text-gray-300 hover:text-white text-sm">
                  Instalação Linux
                </Link>
              </li>
              <li>
                <Link href="/servicos/office" className="text-gray-300 hover:text-white text-sm">
                  Pacote Office
                </Link>
              </li>
              <li>
                <Link href="/servicos/backup" className="text-gray-300 hover:text-white text-sm">
                  Backup e Migração
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-white text-sm">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-300 hover:text-white text-sm">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidade" className="text-gray-300 hover:text-white text-sm">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos" className="text-gray-300 hover:text-white text-sm">
                  Termos de Serviço
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">
                Rua brasabante, Cordeiro
              </li>
              <li className="text-gray-300">
                Recife - Pernambuco
              </li>
              <li className="text-gray-300">
                menosum48@gmail.com
              </li>
              <li className="text-gray-300">
                (81) 981699096
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Infor Format. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
