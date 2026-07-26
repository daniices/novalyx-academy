import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

import leavesLeft from "../assets/leaves/leaves-left.svg";
import smallLeaves from "../assets/leaves/small-leaves.svg";

function WhoITeach() {
  const { language } = useLanguage();
  const t = translations[language];

  const students = [
    {
      number: "01",
      title: t.student1Title,
      description: t.student1Description,
    },
    {
      number: "02",
      title: t.student2Title,
      description: t.student2Description,
    },
    {
      number: "03",
      title: t.student3Title,
      description: t.student3Description,
    },
  ];


  return (
    <section
      id="who"
      className="relative overflow-hidden bg-[#1F2937] py-24"
      data-aos="fade-up"
    >

      {/* Botanical Decorations */}

      <img
        src={leavesLeft}
        alt=""
        className="pointer-events-none absolute -right-20 top-10 w-[28rem] opacity-20 brightness-150 sepia saturate-[0.8]"
      />


      <img
        src={smallLeaves}
        alt=""
        className="pointer-events-none absolute -left-10 bottom-0 w-[20rem] opacity-20 brightness-150 sepia saturate-[0.8]"
      />



      <div className="relative z-10 mx-auto max-w-7xl px-6">


        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-[#D6A07A]">
            {t.whoBadge}
          </p>


          <h2
            className="mt-4 text-5xl font-bold text-white"
            style={{ fontFamily: "Playfair Display" }}
          >
            {t.whoTitle}
          </h2>


          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            {t.whoDescription}
          </p>

        </div>




        <div className="mt-20 grid gap-10 lg:grid-cols-3">


          {students.map((student) => (

            <div
              key={student.number}
              className="rounded-3xl border border-[#E7DDCC] bg-[#FFFDF9] p-10 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >


              <div className="flex items-center gap-4">

                <span
                  className="text-4xl font-bold text-[#B06B45]"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  {student.number}
                </span>


                <div className="h-px flex-1 bg-[#E7DDCC]"></div>

              </div>




              <h3
                className="mt-8 text-3xl font-bold text-slate-900"
                style={{ fontFamily: "Playfair Display" }}
              >
                {student.title}
              </h3>




              <p className="mt-6 text-lg leading-8 text-slate-600">
                {student.description}
              </p>



            </div>

          ))}


        </div>


      </div>

    </section>
  );
}

export default WhoITeach;