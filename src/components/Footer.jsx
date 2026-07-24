import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer
      className="relative overflow-hidden bg-[#111827] text-white"
      data-aos="fade-up"
    >

      {/* Decorative background shapes */}

      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#799A76] opacity-10"></div>

      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#B06B45] opacity-10"></div>



      <div className="relative mx-auto max-w-7xl px-6 py-20">


        <div className="grid gap-12 lg:grid-cols-3">



          {/* Brand */}

          <div>

            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: "Playfair Display" }}
            >
              NovaLyx Academy
            </h2>


            <p className="mt-6 leading-8 text-slate-400">
              {t.footerTagline1}
              <br />
              {t.footerTagline2}
            </p>


          </div>





          {/* Links */}

          <div>

            <h3 className="text-xl font-semibold text-[#D6A07A]">
              {t.quickLinks}
            </h3>


            <ul className="mt-6 space-y-3 text-slate-400">


              <li>
                <a
                  href="#about"
                  className="transition hover:text-white"
                >
                  {t.about}
                </a>
              </li>



              <li>
                <a
                  href="#courses"
                  className="transition hover:text-white"
                >
                  {t.courses}
                </a>
              </li>



              <li>
                <a
                  href="#who"
                  className="transition hover:text-white"
                >
                  {t.whoITeach}
                </a>
              </li>



              <li>
                <a
                  href="#faq"
                  className="transition hover:text-white"
                >
                  {t.faq}
                </a>
              </li>



              <li>
                <a
                  href="#booking"
                  className="transition hover:text-white"
                >
                  {t.freeTrial}
                </a>
              </li>


            </ul>


          </div>







          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold text-[#D6A07A]">
              {t.contact}
            </h3>



            <div className="mt-6 space-y-4 text-slate-400">


              <p>
                📧 hello@novalyxacademy.com
              </p>



              <a
                href="https://wa.me/12397660716"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-white"
              >
                💬 {t.whatsapp}: +1 (239) 766-0716
              </a>



              <p>
                🌎 {t.onlineZoom}
              </p>


            </div>


          </div>



        </div>





        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-slate-500">

          © 2026 NovaLyx Academy • {t.rightsReserved}

        </div>



      </div>


    </footer>
  );
}

export default Footer;