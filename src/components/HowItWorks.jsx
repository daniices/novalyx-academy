import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

function HowItWorks() {
  const { language } = useLanguage();
  const t = translations[language];

  const steps = [
    {
      number: "01",
      title: t.step1Title,
      description: t.step1Description,
    },
    {
      number: "02",
      title: t.step2Title,
      description: t.step2Description,
    },
    {
      number: "03",
      title: t.step3Title,
      description: t.step3Description,
    },
    {
      number: "04",
      title: t.step4Title,
      description: t.step4Description,
    },
  ];

  return (
    <section
      id="how"
      className="botanical-bg bg-[#FAF8F3] py-24"
      data-aos="fade-up"
    >
      <div className="mx-auto max-w-7xl px-6">


        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-[#B06B45]">
            {t.howBadge}
          </p>


          <h2
            className="mt-4 text-5xl font-bold text-slate-900"
            style={{ fontFamily: "Playfair Display" }}
          >
            {t.howTitle}
          </h2>


          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {t.howDescription}
          </p>

        </div>



        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">


          {steps.map((step) => (

            <div
              key={step.number}
              className="relative rounded-3xl border border-[#E7DDCC] bg-[#FFFDF9] p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >


              <div className="absolute -top-5 left-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#799A76] text-lg font-bold text-white shadow-lg">
                {step.number}
              </div>


              <div className="pt-8">


                <h3
                  className="text-2xl font-bold text-slate-900"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  {step.title}
                </h3>


                <p className="mt-5 leading-8 text-slate-600">
                  {step.description}
                </p>


              </div>


            </div>

          ))}


        </div>


      </div>
    </section>
  );
}

export default HowItWorks;