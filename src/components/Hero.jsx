import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import topRightLeaf from "../assets/leaves/leaves-top-right.svg";
import smallLeaves from "../assets/leaves/small-leaves.svg";

function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  const highlights = [
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




      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 py-20 text-center">


        <span className="inline-flex rounded-full bg-[#E8DCCB] px-5 py-2 text-sm font-semibold text-[#B06B45]">
          {t.heroBadge}
        </span>




        <h1
          className="mt-6 text-5xl font-bold leading-tight text-slate-900 lg:text-7xl"
          style={{ fontFamily: "Playfair Display" }}
        >
          {t.heroTitle}
        </h1>




        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
          {t.heroDescription}
        </p>





        {/* Buttons */}

        <div className="mt-10 flex flex-wrap justify-center gap-4">


          <a
            href="#booking"
            className="rounded-xl bg-[#799A76] px-8 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#5F805C] hover:shadow-xl"
          >
            {t.freeTrial}
          </a>




          <a
            href="https://wa.me/12397660716"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border-2 border-slate-900 px-8 py-4 text-lg font-semibold transition duration-300 hover:bg-slate-900 hover:text-white"
          >
            {t.whatsapp}
          </a>


        </div>






        {/* Academy Highlights */}

        <div className="mt-14 grid w-full gap-6 sm:grid-cols-2">


          {highlights.map((item) => (

            <div
              key={item.number}
              className="rounded-3xl border border-[#E7DDCC] bg-[#FFFDF9] p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              <p
                className="text-2xl font-bold text-[#B06B45]"
                style={{ fontFamily: "Playfair Display" }}
              >
                {item.number}
              </p>


              <p className="mt-2 font-semibold text-slate-900">
                {item.text}
              </p>


            </div>

          ))}


        </div>



      </div>


    </section>
  );
}

export default Hero;