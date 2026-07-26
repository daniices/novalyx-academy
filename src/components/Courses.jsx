import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

import leavesLeft from "../assets/leaves/leaves-left.svg";
import smallLeaves from "../assets/leaves/small-leaves.svg";

function Courses() {
  const { language } = useLanguage();
  const t = translations[language];

  const programs = [
    {
      title: t.spanishProgramsTitle,
      description: t.spanishProgramsDescription,
      courses: [
        t.spanishCourse1,
        t.spanishCourse2,
        t.spanishCourse3,
        t.spanishCourse4,
      ],
      accent: "border-[#B06B45]",
      line: "bg-[#B06B45]",
      button: "bg-[#B06B45] hover:bg-[#8F5235]",
    },

    {
      title: t.englishProgramsTitle,
      description: t.englishProgramsDescription,
      courses: [
        t.englishCourse1,
        t.englishCourse2,
        t.englishCourse3,
        t.englishCourse4,
      ],
      accent: "border-[#1F2937]",
      line: "bg-[#1F2937]",
      button: "bg-[#1F2937] hover:bg-[#111827]",
    },
  ];


  return (
    <section
      id="courses"
      className="relative overflow-hidden bg-[#FAF8F3] py-24"
      data-aos="fade-up"
    >

      {/* Botanical Decorations */}

      <img
        src={leavesLeft}
        alt=""
        className="pointer-events-none absolute -left-20 top-10 w-[26rem] opacity-25 brightness-90 sepia saturate-[1.5] hue-rotate-[320deg]"
      />

      <img
        src={smallLeaves}
        alt=""
        className="pointer-events-none absolute -right-10 bottom-0 w-[18rem] opacity-25 brightness-90 sepia saturate-[1.5] hue-rotate-[320deg]"
      />



      <div className="relative z-10 mx-auto max-w-7xl px-6">


        <div className="text-center">

          <p className="font-semibold uppercase tracking-widest text-[#B06B45]">
            {t.coursesBadge}
          </p>


          <h2
            className="mt-4 text-5xl font-bold text-slate-900"
            style={{ fontFamily: "Playfair Display" }}
          >
            {t.coursesTitle}
          </h2>


          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {t.coursesDescription}
          </p>

        </div>




        <div className="mt-16 grid gap-10 lg:grid-cols-2">


          {programs.map((program) => (

            <div
              key={program.title}
              className={`rounded-[2rem] border-2 ${program.accent} bg-[#FFFDF9] p-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
            >


              <div className={`h-1 w-20 rounded-full ${program.line}`}>
              </div>


              <h3
                className="mt-8 text-3xl font-bold text-slate-900"
                style={{ fontFamily: "Playfair Display" }}
              >
                {program.title}
              </h3>


              <p className="mt-5 text-lg leading-8 text-slate-600">
                {program.description}
              </p>




              <div className="mt-8 space-y-5">

                {program.courses.map((course) => (

                  <div
                    key={course}
                    className="flex items-center gap-4 text-lg text-slate-700"
                  >

                    <span className={`h-3 w-3 rounded-full ${program.line}`}>
                    </span>

                    {course}

                  </div>

                ))}

              </div>




              {/* Learn More Button */}

              <a
                href="#booking"
                className={`mt-10 inline-block rounded-full px-8 py-3 text-white transition duration-300 ${program.button}`}
              >
                {t.learnMore}
              </a>



            </div>

          ))}


        </div>


      </div>

    </section>
  );
}

export default Courses;