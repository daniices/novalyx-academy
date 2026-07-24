import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

function Courses() {
  const { language } = useLanguage();
  const t = translations[language];

  const courses = [
    {
      title: t.course1Title,
      level: t.course1Level,
      description: t.course1Description,
      emoji: "🌱",
    },
    {
      title: t.course2Title,
      level: t.course2Level,
      description: t.course2Description,
      emoji: "💬",
    },
    {
      title: t.course3Title,
      level: t.course3Level,
      description: t.course3Description,
      emoji: "✈️",
    },
    {
      title: t.course4Title,
      level: t.course4Level,
      description: t.course4Description,
      emoji: "💼",
    },
  ];

  return (
    <section
      id="courses"
      className="botanical-bg bg-[#FAF8F3] py-24"
      data-aos="fade-up"
    >
      <div className="mx-auto max-w-7xl px-6">


        {/* Heading */}
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



        {/* Course Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {courses.map((course) => (

            <div
              key={course.title}
              className="rounded-3xl border border-[#E7DDCC] bg-[#FFFDF9] p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#DDE8D8] text-5xl">
                {course.emoji}
              </div>


              <h3
                className="mt-6 text-2xl font-bold text-slate-900"
                style={{ fontFamily: "Playfair Display" }}
              >
                {course.title}
              </h3>


              <p className="mt-2 font-semibold text-[#B06B45]">
                {course.level}
              </p>


              <p className="mt-6 leading-7 text-slate-600">
                {course.description}
              </p>


              <button
                className="mt-8 rounded-full bg-[#799A76] px-6 py-3 text-white transition duration-300 hover:bg-[#5F805C]"
              >
                {t.learnMore}
              </button>


            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Courses;