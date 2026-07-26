import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

import leavesLeft from "../assets/leaves/leaves-left.svg";
import smallLeaves from "../assets/leaves/small-leaves.svg";

function WhyChoose() {
  const { language } = useLanguage();
  const t = translations[language];

  const features = [
    {
      number: "01",
      title: t.feature1Title,
      description: t.feature1Description,
    },
    {
      number: "02",
      title: t.feature2Title,
      description: t.feature2Description,
    },
    {
      number: "03",
      title: t.feature3Title,
      description: t.feature3Description,
    },
    {
      number: "04",
      title: t.feature4Title,
      description: t.feature4Description,
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-[#1F2937] py-24"
      data-aos="fade-up"
    >

      {/* Botanical Decorations */}

      <img
        src={leavesLeft}
        alt=""
        className="pointer-events-none absolute -left-20 top-10 w-[26rem] opacity-20 brightness-150 sepia saturate-[0.8]"
      />

      <img
        src={smallLeaves}
        alt=""
        className="pointer-events-none absolute -right-10 bottom-0 w-[18rem] opacity-20 brightness-150 sepia saturate-[0.8]"
      />


      <div className="relative z-10 mx-auto max-w-7xl px-6">


        <div className="text-center">

          <p className="font-semibold uppercase tracking-widest text-[#D6A07A]">
            {t.whyBadge}
          </p>


          <h2
            className="mt-4 text-4xl font-bold text-white md:text-5xl"
            style={{ fontFamily: "Playfair Display" }}
          >
            {t.whyTitle}
          </h2>


          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200">
            {t.whyDescription}
          </p>

        </div>



        <div className="mt-16 grid gap-8 md:grid-cols-2">


          {features.map((feature) => (

            <div
              key={feature.number}
              className="rounded-3xl border border-[#E7DDCC] bg-[#FFFDF9] p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >


              <div className="flex items-center gap-4">

                <span className="text-4xl font-bold text-[#B06B45]"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  {feature.number}
                </span>


                <div className="h-px flex-1 bg-[#E7DDCC]"></div>

              </div>



              <h3
                className="mt-8 text-2xl font-bold text-slate-900"
                style={{ fontFamily: "Playfair Display" }}
              >
                {feature.title}
              </h3>



              <p className="mt-4 leading-7 text-slate-600">
                {feature.description}
              </p>


            </div>

          ))}


        </div>


      </div>


    </section>
  );
}

export default WhyChoose;