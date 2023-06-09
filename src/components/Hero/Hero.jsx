import React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import * as Scroll from "react-scroll";
import {
  Link,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const navigation = [
  { name: "Servicios", href: "servicios" },
  { name: "Nosotros", href: "about" },
  { name: "Clientes", href: "logos" },
  { name: "Contacto", href: "contact" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="sticky top-0 z-10 flex bg-white bg-opacity-90 items-center justify-between lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <div className="-m-1.5 p-1.5">
            <Link
              style={{ cursor: "pointer" }}
              to={"hero"}
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
              <img
                className="h-10 w-auto"
                src="https://images2.imgbox.com/6b/fa/NaaHjerq_o.png"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-blue-950"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              style={{ cursor: "pointer" }}
              key={item.name}
              to={item.href}
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              className="text-sm font-bold leading-6 text-blue-950"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      <div className="bg-[url('../images/bgf.png')] bg-fixed bg-cover">
        <header className="absolute inset-x-0 top-0 z-50">
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Ximax Seguridad</span>
                  <img
                    className="h-8 w-auto"
                    src="https://www.iconpacks.net/free-icon/xing-logo-2447.html"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        smooth
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>

        <div className="relative mx-12 isolate px-4 pt-4 lg:px-8" name="hero">
          <div className="max-w-2xl py-24 sm:py-48 lg:py-40">
            <div className="text-left">
              <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
                Convierta su negocio en un proyecto sustentable y seguro.
              </h1>
              <p className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                Con nuestros servicios su negocio puede transformarse para
                convertirse en un proyecto desarrollable a largo plazo.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="servicios"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                  className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950 bg-blue-950"
                >
                  Servicios
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
