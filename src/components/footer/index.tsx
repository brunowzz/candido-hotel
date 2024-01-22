import Link from "next/link";
import { BiMessageDetail } from "react-icons/bi";
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="container mx-auto px-4">
        <Link href="/" className="font-black text-tertiary-dark">
          Cândido Hotel
        </Link>

        <h4 className="font-semibold text-[40px] py-6">Contato</h4>

        <div className="flex items-start flex-col md:flex-row gap-16 md:items-center md:justify-between">
          <div className="flex-1">
            <p>Rua dos Bobos, 123</p>
            <div className="flex items-center py-4">
              <BsTelephoneOutbound />
              <p className="ml-2">(99) 99999-9999</p>
            </div>

            <div className="flex items-center">
              <BiMessageDetail />
              <a
                href="https://brunobarreiras.vercel.app"
                target="_blank"
                className="ml-2"
              >
                Bruno Barreiras
              </a>
            </div>
          </div>
          <div className="flex-1 md:text-center">
            <p className="pb-4">Nossa história</p>
            <p className="pb-4">Entrar em contato</p>
            <p className="pb-4">Privacidade</p>
            <p className="pb-4">Termos de serviço</p>
            <p>Assistência ao Cliente</p>
          </div>

          <div className="flex-1 md:text-right">
            <p className="pb-4">Experiência de jantar</p>
            <p className="pb-4">Bem-estar</p>
            <p className="pb-4">Fitness</p>
            <p className="pb-4">Esportes</p>
            <p>Eventos</p>
          </div>
        </div>
      </div>

      <div className="bg-tertiary-light h-10 md:h-[70px] mt-16 w-full bottom-0 left-0" />
    </footer>
  );
};
