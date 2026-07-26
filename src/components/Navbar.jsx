import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);

  const t = translations[language];

  return (
    <header className="sticky top-0 z-50 border-b border-[#3E503D] bg-[#465A45]/95 backdrop-blur-md">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">


        {/* Logo */}

        <h1
          className="text-2xl font-bold text-white"
          style={{ fontFamily: "Playfair Display" }}
        >
          NovaLyx Academy
        </h1>





        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 lg:flex">


          <a
            href="#about"
            className="text-white transition hover:text-[#F7E6D5]"
          >
            {t.about}
          </a>





          {/* Programs Dropdown */}

          <div className="relative">

            <button
              onClick={() => setProgramOpen(!programOpen)}
              className="text-white transition hover:text-[#F7E6D5]"
            >
              {t.programs || "Programs"}
            </button>



            {programOpen && (

              <div className="absolute left-0 mt-4 w-48 rounded-2xl border border-[#E7DDCC] bg-[#FFFDF9] p-4 shadow-xl">


                <a
                  href="#courses"
                  className="block rounded-lg px-3 py-2 text-slate-800 transition hover:bg-[#F3ECE0]"
                >
                  {t.spanishProgram || "Spanish"}
                </a>



                <a
                  href="#courses"
                  className="block rounded-lg px-3 py-2 text-slate-800 transition hover:bg-[#F3ECE0]"
                >
                  {t.englishProgram || "English"}
                </a>


              </div>

            )}

          </div>






          <a
            href="#how"
            className="text-white transition hover:text-[#F7E6D5]"
          >
            {t.howNav}
          </a>





          <a
            href="#faq"
            className="text-white transition hover:text-[#F7E6D5]"
          >
            {t.faq}
          </a>







          {/* Language Button */}

          <button
            onClick={toggleLanguage}
            className="rounded-full border border-white px-4 py-2 text-white transition hover:bg-white hover:text-[#465A45]"
          >
            {language === "en" ? "EN" : "ES"}
          </button>







          {/* Free Trial Button */}

          <a
            href="#booking"
            className="rounded-full bg-white px-6 py-3 font-semibold text-[#465A45] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#FAF8F3]"
          >
            {t.freeTrial}
          </a>



        </nav>







        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-white lg:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>



      </div>








      {/* Mobile Menu */}

      {menuOpen && (

        <div className="border-t border-[#3E503D] bg-[#465A45] lg:hidden">


          <nav className="flex flex-col px-6 py-6">


            <a
              href="#about"
              className="py-3 text-white"
              onClick={() => setMenuOpen(false)}
            >
              {t.about}
            </a>





            <a
              href="#courses"
              className="py-3 text-white"
              onClick={() => setMenuOpen(false)}
            >
              {t.programs || "Programs"}
            </a>





            <a
              href="#how"
              className="py-3 text-white"
              onClick={() => setMenuOpen(false)}
            >
              {t.howNav}
            </a>





            <a
              href="#faq"
              className="py-3 text-white"
              onClick={() => setMenuOpen(false)}
            >
              {t.faq}
            </a>








            <button
              onClick={() => {
                toggleLanguage();
                setMenuOpen(false);
              }}
              className="mt-4 rounded-full border border-white px-4 py-3 text-white transition hover:bg-white hover:text-[#465A45]"
            >
              {language === "en" ? "English" : "Español"}
            </button>







            <a
              href="#booking"
              className="mt-4 rounded-full bg-white px-6 py-3 text-center font-semibold text-[#465A45]"
              onClick={() => setMenuOpen(false)}
            >
              {t.freeTrial}
            </a>





          </nav>


        </div>

      )}


    </header>
  );
}

export default Navbar;