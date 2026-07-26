import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

function About() {
  const { language } = useLanguage();
  const t = translations[language];

  const academyFeatures = [
    {
      number: "01",
      text: t.internationalAcademy,
    },
    {
      number: "02",
      text: t.experiencedTeachers,
    },
    {
      number: "03",
      text: t.zoomClasses,
    },
    {
      number: "04",
      text: t.personalizedLearning,
    },
  ];


  return (
    <section
      id="about"
      className="botanical-bg bg-[#FAF8F3] py-24"
      data-aos="fade-up"
    >

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row">


        {/* Academy Image */}

        <div className="flex flex-1 justify-center">

          <div className="w-full max-w-md rounded-3xl bg-[#FFFDF9] p-6 shadow-xl border border-[#EFE7D8]">


            <div className="flex h-[500px] items-center justify-center rounded-2xl bg-gradient-to-br from-[#F7F1E8] to-[#DDE8D8]">


              <p className="px-8 text-center text-slate-500">
                {t.academyImagePlaceholder}
              </p>


            </div>


          </div>

        </div>




        {/* Academy Text */}

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






          {/* Academy Features */}

          <div className="mt-10 grid gap-6 sm:grid-cols-2">


            {academyFeatures.map((feature) => (

              <div
                key={feature.number}
                className="rounded-3xl border border-[#E7DDCC] bg-[#FFFDF9] p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >


                <p
                  className="text-3xl font-bold text-[#B06B45]"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  {feature.number}
                </p>



                <p className="mt-4 text-lg font-semibold text-slate-900">
                  {feature.text}
                </p>


              </div>

            ))}


          </div>


        </div>


      </div>


    </section>
  );
}

export default About;