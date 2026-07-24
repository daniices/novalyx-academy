import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

function WhoITeach() {
  const { language } = useLanguage();
  const t = translations[language];

  const students = [
    {
      emoji: "👧",
      title: t.student1Title,
      description: t.student1Description,
    },
    {
      emoji: "🎓",
      title: t.student2Title,
      description: t.student2Description,
    },
    {
      emoji: "💼",
      title: t.student3Title,
      description: t.student3Description,
    },
  ];

  return (
    <section
      id="who"
      className="botanical-bg bg-[#FAF8F3] py-24"
      data-aos="fade-up"
    >
      <div className="mx-auto max-w-7xl px-6">


        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-[#B06B45]">
            {t.whoBadge}
          </p>


          <h2
            className="mt-4 text-5xl font-bold text-slate-900"
            style={{ fontFamily: "Playfair Display" }}
          >
            {t.whoTitle}
          </h2>


          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {t.whoDescription}
          </p>

        </div>



        <div className="mt-20 grid gap-10 lg:grid-cols-3">

          {students.map((student) => (

            <div
              key={student.title}
              className="rounded-3xl border border-[#E7DDCC] bg-[#FFFDF9] p-10 shadow-md transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >


              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#DDE8D8] text-5xl">
                {student.emoji}
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