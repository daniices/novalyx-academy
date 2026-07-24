import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="about"
      className="botanical-bg bg-[#FAF8F3] py-24"
      data-aos="fade-up"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row">

        {/* Photo */}
        <div className="flex flex-1 justify-center">
          <div className="w-full max-w-md rounded-3xl bg-[#FFFDF9] p-6 shadow-xl border border-[#EFE7D8]">

            <div className="flex h-[500px] items-center justify-center rounded-2xl bg-gradient-to-br from-[#F7F1E8] to-[#DDE8D8]">
              <p className="text-slate-500">
                Professional photo coming soon
              </p>
            </div>

          </div>
        </div>


        {/* Text */}
        <div className="flex-1 max-w-xl">

          <p className="font-semibold uppercase tracking-widest text-[#B06B45]">
            {t.aboutBadge}
          </p>


          <h2
            className="mt-4 text-5xl font-bold text-slate-900"
            style={{ fontFamily: "Playfair Display" }}
          >
            {t.aboutTitle}
          </h2>


          <p className="mt-8 text-lg leading-9 text-slate-600">
            {t.aboutParagraph1}
          </p>


          <p className="mt-6 text-lg leading-9 text-slate-600">
            {t.aboutParagraph2}
          </p>


          <div className="mt-10 grid gap-4 sm:grid-cols-2">


            <div className="rounded-2xl bg-[#FFFDF9] border border-[#E7DDCC] p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              {t.nativeSpeaker}
            </div>


            <div className="rounded-2xl bg-[#FFFDF9] border border-[#E7DDCC] p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              {t.zoomClasses}
            </div>


            <div className="rounded-2xl bg-[#FFFDF9] border border-[#E7DDCC] p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              {t.worldwide}
            </div>


            <div className="rounded-2xl bg-[#FFFDF9] border border-[#E7DDCC] p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              {t.allAges}
            </div>


          </div>

        </div>

      </div>
    </section>
  );
}

export default About;