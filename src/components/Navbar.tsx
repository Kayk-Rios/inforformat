import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    return (
      <nav className="bg-blue-800 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 font-bold text-xl">
                Infor Format
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Link href="/" className="px-3 py-2 rounded-md hover:bg-blue-700">
                  Início
                </Link>
                <Link href="/" className="px-3 py-2 rounded-md hover:bg-blue-700">
                  Serviços
                </Link>
                <Link href="/" className="px-3 py-2 rounded-md hover:bg-blue-700">
                  Sobre
                </Link>
                <Link href="/whatsapp/page" className="flex items-center gap-2 bg-green-600 px-4 py-2 rounded-md hover:bg-green-700">
                  <Phone size={16} />
                  Whatsapp
                </Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-700 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
  
        {/* Menu móvel */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block px-3 py-2 rounded-md hover:bg-blue-700">
                Início
              </Link>
              <Link href="/servicos" className="block px-3 py-2 rounded-md hover:bg-blue-700">
                Serviços
              </Link>
              <Link href="/sobre" className="block px-3 py-2 rounded-md hover:bg-blue-700">
                Sobre
              </Link>
              <Link href="/contato" className="block px-3 py-2 rounded-md hover:bg-blue-700">
                Contato
              </Link>
              <Link href="/whatsapp/page" className="flex items-center gap-2 bg-green-600 px-4 py-2 rounded-md hover:bg-green-700">
                <Phone size={16} />
                Whatsapp
              </Link>
            </div>
          </div>
        )}
      </nav>
    );
  }