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



        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4">


          {steps.map((step) => (

            <div
              key={step.number}
              className="rounded-3xl border border-[#E7DDCC] bg-[#FFFDF9] p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >


              <div className="flex items-center gap-4">

                <span
                  className="text-4xl font-bold text-[#B06B45]"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  {step.number}
                </span>


                <div className="h-px flex-1 bg-[#E7DDCC]"></div>

              </div>



              <h3
                className="mt-8 text-2xl font-bold text-slate-900"
                style={{ fontFamily: "Playfair Display" }}
              >
                {step.title}
              </h3>



              <p className="mt-5 leading-8 text-slate-600">
                {step.description}
              </p>


            </div>

          ))}


        </div>


      </div>

    </section>
  );
}

export default HowItWorks;