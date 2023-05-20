"use client";
import { Transition, Dialog } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useState } from "react";
import { IoCloseSharp, IoMenuOutline } from "react-icons/io5";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-full hover:bg-gray-200 transition sm:hidden"
      >
        <IoMenuOutline size={26} />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center text-center">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="w-[90%] h-screen transform overflow-hidden rounded-r-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <div className="flex items-center justify-between mb-6 p-6 pb-0">
                    <span className="text-3xl font-bold">Menu</span>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-2 rounded-full hover:bg-gray-200 transition"
                    >
                      <IoCloseSharp size={26} />
                      <span className="sr-only">Fechar</span>
                    </button>
                  </div>

                  <ul
                    className="flex flex-col items-start"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link
                      href="#home"
                      className="opacity-70 hover:opacity-100 transition cursor-pointer py-4 hover:bg-gray-100 w-full px-6"
                    >
                      Início
                    </Link>
                    <Link
                      href="#sobre"
                      className="opacity-70 hover:opacity-100 transition cursor-pointer py-4 hover:bg-gray-100 w-full px-6"
                    >
                      Sobre
                    </Link>
                    <Link
                      href="#projetos"
                      className="opacity-70 hover:opacity-100 transition cursor-pointer py-4 hover:bg-gray-100 w-full px-6"
                    >
                      Projetos
                    </Link>
                    <Link
                      href="#contato"
                      className="opacity-70 hover:opacity-100 transition cursor-pointer py-4 hover:bg-gray-100 w-full px-6"
                    >
                      Contato
                    </Link>
                  </ul>

                  <div className="my-6 px-6">
                    <p className="text-sm text-gray-500">
                      Copyright © 2023. All rights are reserved
                    </p>
                  </div>

                  <div className="mt-4 px-6">
                    <div className="inline-flex justify-center cursor-pointer rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition">
                      Leandro.dev
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MobileMenu;
