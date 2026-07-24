import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import topRightLeaf from "../assets/leaves/leaves-top-right.svg";
import smallLeaves from "../assets/leaves/small-leaves.svg";

function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      className="relative overflow-hidden bg-[#FAF8F3]"
      data-aos="fade-up"
    >
      {/* Top Right Botanical Decoration */}
      <img
        src={topRightLeaf}
        alt=""
        className="pointer-events-none absolute -right-16 -top-6 w-[28rem] opacity-40"
      />

      {/* Bottom Left Botanical Decoration */}
      <img
        src={smallLeaves}
        alt=""
        className="pointer-events-none absolute -left-10 bottom-0 w-[26rem] opacity-50"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center">
        <div className="w-full">

          <span className="inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            {t.heroBadge}
          </span>


          <h1
            className="mt-6 text-5xl font-bold leading-tight text-slate-900 lg:text-7xl"
            style={{ fontFamily: "Playfair Display" }}
          >
            {t.heroTitle}
          </h1>


          <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-slate-600">
            {t.heroDescription}
          </p>



          {/* Buttons */}

          <div className="mt-10 flex flex-wrap justify-center gap-4">


            {/* Free Trial Button */}

            <a
              href="#booking"
              className="rounded-xl bg-[#799A76] px-8 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#5F805C] hover:shadow-xl"
            >
              {t.freeTrial}
            </a>



            {/* WhatsApp Button */}

            <a
              href="https://wa.me/12397660716"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border-2 border-slate-900 px-8 py-4 text-lg font-semibold transition duration-300 hover:bg-slate-900 hover:text-white"
            >
              {t.whatsapp}
            </a>


          </div>




          {/* Trust Badges */}

          <div className="mt-12 grid grid-cols-2 gap-5 text-slate-700">

            <div>{t.nativeSpeaker}</div>

            <div>{t.zoomClasses}</div>

            <div>{t.worldwide}</div>

            <div>{t.allAges}</div>

          </div>


        </div>

      </div>

    </section>
  );
}

export default Hero;