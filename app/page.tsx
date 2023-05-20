import Image from "next/image";
import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import { SiGooglemaps } from "react-icons/si";

const Page = () => {
  return (
    <>
      <section
        id="home"
        className="flex items-center justify-center min-h-screen w-full mt-20 py-20 md:mt-0"
      >
        <div className="max-w-4xl flex flex-col p-4">
          <div className="flex flex-col md:flex-row-reverse items-center mb-10">
            <Image
              src="/perfil.jpg"
              alt="Perfil"
              className="object-cover w-60 h-60 sm:w-80 sm:h-80 rounded-full border-2 mb-10"
              width={500}
              height={500}
            />
            <div className="flex flex-col gap-y-6">
              <span className="text-5xl font-bold text-center md:text-left text-[#141414] max-w-xl md:w-full">
                Front-End Next.js Developer 👋🏻
              </span>

              <div className="text-center md:text-left">
                <p className="text-gray-500">
                  Olá, eu sou Leandro Rodrigues. Um praticante apaixonado por
                  Next.js
                </p>
                <p className="text-gray-500">
                  Desenvolvedor localizado em São Paulo, Brasil 📍
                </p>
              </div>

              {/* Links */}
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Link
                  href="https://www.linkedin.com/in/leandro-rodrigues-8aaa19221"
                  target="_blank"
                  className="p-2 rounded-full hover:bg-gray-200 transition"
                >
                  <IoLogoLinkedin size={26} />
                </Link>
                <Link
                  href="https://github.com/leandrordg"
                  target="_blank"
                  className="p-2 rounded-full hover:bg-gray-200 transition"
                >
                  <IoLogoGithub size={26} />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <span className="font-bold text-xl md:text-sm">Tech Skills</span>
            <span className="text-xl hidden md:block">|</span>
            <div className="flex items-center justify-center flex-wrap gap-8">
              <Image
                src="/html.png"
                alt=""
                height={32}
                width={32}
                className="w-6 h-6"
              />
              <Image
                src="/css.png"
                alt=""
                height={32}
                width={32}
                className="w-6 h-6"
              />
              <Image
                src="/javascript.png"
                alt=""
                height={32}
                width={32}
                className="w-6 h-6"
              />
              <Image
                src="/typescript.png"
                alt=""
                height={32}
                width={32}
                className="w-6 h-6"
              />
              <Image
                src="/react.png"
                alt=""
                height={32}
                width={32}
                className="w-6 h-6"
              />
              <Image
                src="/nextjs.png"
                alt=""
                height={32}
                width={32}
                className="w-6 h-6"
              />
              <Image
                src="/t3.svg"
                alt=""
                height={32}
                width={32}
                className="w-6 h-6"
              />
              <Image
                src="/tailwindcss.png"
                alt=""
                height={32}
                width={32}
                className="w-6 h-6"
              />
              <Image
                src="/mui.png"
                alt=""
                height={32}
                width={32}
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="sobre"
        className="flex items-center justify-center min-h-screen w-full py-20 bg-gray-50"
      >
        <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left max-w-4xl gap-10 p-4">
          <div className="min-w-fit">
            <Image
              src="/sobre.png"
              alt="Sobre mim"
              className="w-96 h-80 object-cover rounded-2xl"
              width={1080}
              height={1080}
            />
          </div>
          <div className="flex flex-col gap-4 mx-10 md:mx-0">
            <span className="uppercase text-teal-600 font-bold text-sm">
              Sobre mim
            </span>
            <p className="font-extrabold tracking-tight text-2xl">
              Um Desenvolvedor Front-End Dedicado Localizado em São Paulo,
              Brasil 📍
            </p>
            <p className="text-gray-500 leading-tight tracking-wide md:text-justify">
              Além de programar em HTML, CSS, JavaScript e utilizar frameworks
              como React, Next.js, e bibliotecas como Tailwind CSS e
              Material-UI, também tenho experiência em desenvolvimento de
              aplicações web responsivas, otimizadas e acessíveis. Sou
              apaixonado por estar sempre atualizado com as últimas tendências e
              melhores práticas do desenvolvimento frontend, garantindo que
              minhas habilidades estejam sempre em evolução. Com um olhar atento
              para o design e usabilidade, busco oferecer uma experiência
              agradável e intuitiva aos usuários finais dos produtos que
              desenvolvo.
            </p>
          </div>
        </div>
      </section>

      <section
        id="projetos"
        className="flex items-center justify-center min-h-screen w-full py-20"
      >
        <div className="max-w-4xl flex flex-col gap-10 p-4">
          <div className="">
            <span className="uppercase text-teal-600 font-bold text-lg">
              PORTFOLIO
            </span>
            <p className="font-extrabold tracking-tight text-2xl">
              Cada projeto foi desenvolvido de forma habilidosa e única 🍀
            </p>
          </div>

          {/* 1 projeto */}
          <div className="flex flex-col lg:flex-row items-start gap-10 shadow p-4 md:p-10 rounded-xl bg-gray-50">
            <div className="min-w-fit">
              <Image
                src="/techblog.png"
                alt="Tech Blog"
                className="w-full lg:w-[480px] object-cover rounded-2xl"
                width={1080}
                height={1080}
              />
            </div>
            <div className="flex flex-col gap-2 text-center">
              <p className="text-2xl font-bold">Tech Blog 👨🏻‍💻</p>
              <p className="text-gray-500">
                O Tech Blog é um blog confiável que oferece notícias atualizadas
                sobre programação e tecnologia, ajudando entusiastas e
                profissionais de TI a se manterem informados e aprimorarem suas
                habilidades.
              </p>

              <div className="flex items-center justify-center gap-4 mt-4 mb-6">
                <Image
                  src="/javascript.png"
                  alt=""
                  height={32}
                  width={32}
                  className="w-6 h-6"
                />
                <Image
                  src="/nextjs.png"
                  alt=""
                  height={32}
                  width={32}
                  className="w-6 h-6"
                />
                <Image
                  src="/tailwindcss.png"
                  alt=""
                  height={32}
                  width={32}
                  className="w-6 h-6"
                />
                <Image
                  src="/graphql.png"
                  alt=""
                  height={32}
                  width={32}
                  className="w-6 h-6"
                />
              </div>

              <div className="flex items-center justify-evenly">
                <Link
                  href="https://github.com/leandrordg/tech-blog"
                  className="flex items-center gap-2 font-semibold text-gray-600 hover:bg-neutral-100 px-6 py-2 rounded-xl transition"
                >
                  <span className="text-sm">Código</span>
                  <IoLogoGithub size={26} />
                </Link>
                <Link
                  href="https://techblogweb.vercel.app"
                  className="flex items-center gap-2 font-semibold text-gray-600 hover:bg-neutral-100 px-6 py-2 rounded-xl transition"
                >
                  <span className="text-sm">Ver prévia</span>
                  <FiExternalLink size={26} />
                </Link>
              </div>
            </div>
          </div>

          {/* 2 projeto */}
          <div className="flex flex-col lg:flex-row items-start gap-10 shadow p-4 md:p-10 rounded-xl bg-gray-50">
            <div className="flex flex-col gap-2 text-center">
              <p className="text-2xl font-bold">ESM 💬</p>
              <p className="text-gray-500">
                Uma plataforma social onde cada usuário tem a experiência única
                de poder personalizar o seu perfil como quiser, deixando do
                jeito que gosta. Essa rede social está atualmente funcionando
                com front-end e back-end.
              </p>

              <div className="flex items-center justify-center gap-4 mt-4 mb-6">
                <Image
                  src="/javascript.png"
                  alt=""
                  height={32}
                  width={32}
                  className="w-6 h-6"
                />
                <Image
                  src="/nextjs.png"
                  alt=""
                  height={32}
                  width={32}
                  className="w-6 h-6"
                />
                <Image
                  src="/tailwindcss.png"
                  alt=""
                  height={32}
                  width={32}
                  className="w-6 h-6"
                />
                <Image
                  src="/mui.png"
                  alt=""
                  height={32}
                  width={32}
                  className="w-6 h-6"
                />
                <Image
                  src="/headlessui.png"
                  alt=""
                  height={32}
                  width={32}
                  className="w-6 h-6"
                />
              </div>

              <div className="flex items-center justify-evenly">
                <Link
                  href="https://github.com/leandrordg/esm"
                  className="flex items-center gap-2 font-semibold text-gray-600 hover:bg-neutral-100 px-6 py-2 rounded-xl transition"
                >
                  <span className="text-sm">Código</span>
                  <IoLogoGithub size={26} />
                </Link>
                <Link
                  href="https://esmtcc.vercel.app"
                  className="flex items-center gap-2 font-semibold text-gray-600 hover:bg-neutral-100 px-6 py-2 rounded-xl transition"
                >
                  <span className="text-sm">Ver prévia</span>
                  <FiExternalLink size={26} />
                </Link>
              </div>
            </div>
            <div className="min-w-fit">
              <Image
                src="/esm.png"
                alt="ESM"
                className="w-full lg:w-[480px] object-cover rounded-2xl"
                width={1080}
                height={1080}
              />
            </div>
          </div>

          {/* 3 projeto */}
          <div className="flex flex-col lg:flex-row items-start gap-10 shadow p-4 md:p-10 rounded-xl bg-gray-50">
            <div className="min-w-fit">
              <Image
                src="/vrstore.png"
                alt="VR Store"
                className="w-full lg:w-[480px] object-cover rounded-2xl"
                width={1080}
                height={1080}
              />
            </div>
            <div className="flex flex-col gap-2 text-center">
              <p className="text-2xl font-bold">VR Store 🛒</p>
              <p className="text-gray-500">
                A VR Store é a loja online perfeita para gamers, oferecendo uma
                ampla variedade de produtos para uma experiência de jogo
                imersiva.
              </p>

              <div className="flex items-center justify-center gap-4 mt-4 mb-6">
                <Image
                  src="/javascript.png"
                  alt=""
                  height={32}
                  width={32}
                  className="w-6 h-6"
                />
                <Image
                  src="/nextjs.png"
                  alt=""
                  height={32}
                  width={32}
                  className="w-6 h-6"
                />
                <Image
                  src="/tailwindcss.png"
                  alt=""
                  height={32}
                  width={32}
                  className="w-6 h-6"
                />
                <Image
                  src="/graphql.png"
                  alt=""
                  height={32}
                  width={32}
                  className="w-6 h-6"
                />
              </div>

              <div className="flex items-center justify-evenly">
                <Link
                  href="https://github.com/leandrordg/vrstore"
                  className="flex items-center gap-2 font-semibold text-gray-600 hover:bg-neutral-100 px-6 py-2 rounded-xl transition"
                >
                  <span className="text-sm">Código</span>
                  <IoLogoGithub size={26} />
                </Link>
                <Link
                  href="https://vrstore.vercel.app"
                  className="flex items-center gap-2 font-semibold text-gray-600 hover:bg-neutral-100 px-6 py-2 rounded-xl transition"
                >
                  <span className="text-sm">Ver prévia</span>
                  <FiExternalLink size={26} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contato"
        className="flex items-center justify-center w-full py-20 bg-gray-50/50"
      >
        <div className="max-w-4xl w-full p-4">
          <div>
            <span className="uppercase text-teal-600 font-bold text-lg">
              Contato
            </span>
            <p className="font-extrabold tracking-tight text-2xl">
              Não seja tímido! Entre em contato comigo! 👇
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-10 mt-10">
            <div className="flex items-center gap-6">
              <div className="p-4 rounded-full shadow-md">
                <SiGooglemaps size={26} className="text-teal-600" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold">Localização</span>
                <span className="text-gray-500 hover:text-teal-600 transition cursor-pointer">
                  São Paulo, Brasil
                </span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="p-4 rounded-full shadow-md">
                <SiGooglemaps size={26} className="text-teal-600" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold">E-mail</span>
                <Link
                  href="mailto:lj251004@gmail.com"
                  className="text-gray-500 hover:text-teal-600 transition"
                >
                  lj251004@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
