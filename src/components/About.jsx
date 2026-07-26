import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import leavesLeft from "../assets/leaves/leaves-left.svg";
import smallLeaves from "../assets/leaves/small-leaves.svg";

function About() {
  const { language } = useLanguage();
  const t = translations[language];

  const highlights = [
    t.internationalAcademy,
    t.experiencedTeachers,
    t.zoomClasses,
    t.personalizedLearning,
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FAF8F3] py-24"
      data-aos="fade-up"
    >

      {/* Botanical Decorations */}

      <img
        src={leavesLeft}
        alt=""
        className="pointer-events-none absolute -left-24 top-20 w-[22rem] opacity-20"
      />

      <img
        src={smallLeaves}
        alt=""
        className="pointer-events-none absolute -right-10 bottom-0 w-[18rem] opacity-20"
      />



      <div className="relative z-10 mx-auto max-w-5xl px-6">


        {/* Heading */}

        <div className="text-center">

          <p className="font-semibold uppercase tracking-widest text-[#B06B45]">
            {t.aboutBadge}
          </p>


          <h2
            className="mt-4 text-5xl font-bold text-slate-900"
            style={{ fontFamily: "Playfair Display" }}
          >
            {t.aboutTitle}
          </h2>


          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">
            {t.aboutParagraph1}
          </p>


          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-600">
            {t.aboutParagraph2}
          </p>


        </div>




        {/* Elegant Divider */}

        <div className="my-12 flex items-center justify-center gap-4">

          <div className="h-px w-20 bg-[#D6A07A]"></div>

          <div className="text-[#B06B45]">
            ✦ ✦ ✦
          </div>

          <div className="h-px w-20 bg-[#D6A07A]"></div>

        </div>





        {/* Highlight Cards */}

        <div className="grid gap-6 sm:grid-cols-2">


          {highlights.map((item) => (

            <div
              key={item}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-[#E7DDCC]
                bg-[#FFFDF9]
                p-7
                text-center
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >

              {/* Accent Line */}

              <div className="absolute left-0 top-0 h-1 w-full bg-[#B06B45] transition-all duration-300 group-hover:bg-[#799A76]"></div>


              <p
                className="text-lg font-semibold text-slate-800"
                style={{ fontFamily: "Playfair Display" }}
              >
                {item}
              </p>


            </div>

          ))}


        </div>


      </div>


    </section>
  );
}

export default About;