import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import leavesLeft from "../assets/leaves/leaves-left.svg";
import smallLeaves from "../assets/leaves/small-leaves.svg";

function WhyChoose() {
  const { language } = useLanguage();
  const t = translations[language];

  const features = [
    {
      icon: "🌎",
      title: t.feature1Title,
      description: t.feature1Description,
    },
    {
      icon: "💻",
      title: t.feature2Title,
      description: t.feature2Description,
    },
    {
      icon: "📚",
      title: t.feature3Title,
      description: t.feature3Description,
    },
    {
      icon: "🗣️",
      title: t.feature4Title,
      description: t.feature4Description,
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-[#FAF8F3] py-24"
      data-aos="fade-up"
    >

      {/* Botanical Decorations */}
      <img
        src={leavesLeft}
        alt=""
        className="pointer-events-none absolute -left-20 top-10 w-[26rem] opacity-30 brightness-90 sepia saturate-[1.5] hue-rotate-[320deg]"
      />

      <img
        src={smallLeaves}
        alt=""
        className="pointer-events-none absolute -left-4 bottom-0 w-[18rem] opacity-25 brightness-90 sepia saturate-[1.5] hue-rotate-[320deg]"
      />


      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-widest text-[#B06B45]">
            {t.whyBadge}
          </p>


          <h2
            className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl"
            style={{ fontFamily: "Playfair Display" }}
          >
            {t.whyTitle}
          </h2>


          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            {t.whyDescription}
          </p>

        </div>


        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="rounded-3xl border border-[#E7DDCC] bg-[#FFFDF9] p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#DDE8D8] text-4xl">
                {feature.icon}
              </div>


              <h3
                className="mt-6 text-2xl font-bold text-slate-900"
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