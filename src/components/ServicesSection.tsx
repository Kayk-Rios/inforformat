import ServiceCard from './ServiceCard';
import { Monitor, Server, FileText, HardDrive, Database, Shield } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: "Formatação Windows",
      description: "Instalação limpa do Windows 10/11 com todos os drivers e atualizações necessárias.",
      icon: <Monitor size={24} />,
    },
    {
      title: "Instalação Linux",
      description: "Configuração personalizada de distribuições Linux como Ubuntu, Fedora, Mint e outras.",
      icon: <Server size={24} />,
    },
    {
      title: "Pacote Office",
      description: "Instalação e configuração do Microsoft Office ou alternativas como LibreOffice.",
      icon: <FileText size={24} />,
    },
    {
      title: "Recuperação de Dados",
      description: "Recuperação de arquivos importantes de discos com problemas.",
      icon: <HardDrive size={24} />,
    },
    {
      title: "Backup e Migração",
      description: "Backup seguro dos seus dados e migração para novo sistema ou equipamento.",
      icon: <Database size={24} />,
    },
    {
      title: "Segurança Digital",
      description: "Instalação de antivírus, firewall e configurações de segurança para seu sistema.",
      icon: <Shield size={24} />,
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Nossos Serviços</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Oferecemos soluções completas para manter seu computador funcionando perfeitamente.
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
