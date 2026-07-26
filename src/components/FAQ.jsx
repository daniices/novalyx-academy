import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

function FAQ() {
  const { language } = useLanguage();
  const t = translations[language];

  const faqs = [
    {
      number: "01",
      question: t.faq1Question,
      answer: t.faq1Answer,
    },
    {
      number: "02",
      question: t.faq2Question,
      answer: t.faq2Answer,
    },
    {
      number: "03",
      question: t.faq3Question,
      answer: t.faq3Answer,
    },
    {
      number: "04",
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




        <div className="mt-16 space-y-10">


          {faqs.map((faq) => (

            <div
              key={faq.number}
              className="border-b border-[#E7DDCC] pb-10"
            >


              <p
                className="text-3xl font-bold text-[#B06B45]"
                style={{ fontFamily: "Playfair Display" }}
              >
                {faq.number}
              </p>



              <h3
                className="mt-4 text-2xl font-bold text-slate-900"
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