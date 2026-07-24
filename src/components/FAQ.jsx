import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

function FAQ() {
  const { language } = useLanguage();
  const t = translations[language];

  const faqs = [
    {
      question: t.faq1Question,
      answer: t.faq1Answer,
    },
    {
      question: t.faq2Question,
      answer: t.faq2Answer,
    },
    {
      question: t.faq3Question,
      answer: t.faq3Answer,
    },
    {
      question: t.faq4Question,
      answer: t.faq4Answer,
    },
  ];

  return (
    <section
      id="faq"
      className="botanical-bg bg-[#FAF8F3] py-24"
      data-aos="fade-up"
    >
      <div className="mx-auto max-w-5xl px-6">


        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-[#B06B45]">
            {t.faqBadge}
          </p>


          <h2
            className="mt-4 text-5xl font-bold text-slate-900"
            style={{ fontFamily: "Playfair Display" }}
          >
            {t.faqTitle}
          </h2>

        </div>



        <div className="mt-16 space-y-6">

          {faqs.map((faq) => (

            <div
              key={faq.question}
              className="rounded-3xl border border-[#E7DDCC] bg-[#FFFDF9] p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              <h3
                className="text-xl font-bold text-slate-900"
                style={{ fontFamily: "Playfair Display" }}
              >
                {faq.question}
              </h3>


              <p className="mt-4 leading-8 text-slate-600">
                {faq.answer}
              </p>


            </div>

          ))}

        </div>


      </div>
    </section>
  );
}

export default FAQ;