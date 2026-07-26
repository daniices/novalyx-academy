import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

function Booking() {
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    language: "",
    level: "",
    reason: "",
    goals: "",
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();


    const message =
      language === "en"
        ? `Hello NovaLyx Academy! I would like to book a free language trial lesson.

Language: ${formData.language}
Name: ${formData.name}
Email: ${formData.email}
Level: ${formData.level}
Reason for learning: ${formData.reason}
Goals: ${formData.goals}`
        : `¡Hola NovaLyx Academy! Me gustaría reservar una clase de prueba gratuita de idiomas.

Idioma: ${formData.language}
Nombre: ${formData.name}
Correo: ${formData.email}
Nivel: ${formData.level}
Razón para aprender: ${formData.reason}
Objetivos: ${formData.goals}`;


    const whatsappNumber = "12397660716";


    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


    window.open(whatsappUrl, "_blank");


    setFormData({
      name: "",
      email: "",
      language: "",
      level: "",
      reason: "",
      goals: "",
    });
  };


  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-[#1F2937] py-24 text-white"
      data-aos="fade-up"
    >

      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#799A76] opacity-10"></div>

      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#B06B45] opacity-10"></div>



      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid gap-16 lg:grid-cols-2">



          {/* Left Side */}

          <div>

            <p className="font-semibold uppercase tracking-[0.3em] text-[#D6A07A]">
              {t.bookingBadge}
            </p>


            <h2
              className="mt-4 text-5xl font-bold"
              style={{ fontFamily: "Playfair Display" }}
            >
              {t.bookingTitle}
            </h2>


            <p className="mt-8 text-lg leading-8 text-slate-300">
              {t.bookingDescription}
            </p>




            <div className="mt-10 space-y-5 text-lg text-slate-200">

              <div>{t.bookingBenefit1}</div>

              <div>{t.bookingBenefit2}</div>

              <div>{t.bookingBenefit3}</div>

              <div>{t.bookingBenefit4}</div>

            </div>


          </div>





          {/* Form */}

          <div className="rounded-3xl bg-[#FFFDF9] p-10 shadow-2xl">


            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >


              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.namePlaceholder}
                required
                className="w-full rounded-xl border border-[#E7DDCC] p-4 text-slate-900 outline-none focus:border-[#799A76]"
              />



              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.emailPlaceholder}
                required
                className="w-full rounded-xl border border-[#E7DDCC] p-4 text-slate-900 outline-none focus:border-[#799A76]"
              />





              {/* Language Selection */}

              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-[#E7DDCC] p-4 text-slate-900 outline-none focus:border-[#799A76]"
              >

                <option value="">
                  {t.languagePlaceholder}
                </option>

                <option>
                  {t.spanish}
                </option>

                <option>
                  {t.english}
                </option>

              </select>






              {/* Level */}

              <select
                name="level"
                value={formData.level}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-[#E7DDCC] p-4 text-slate-900 outline-none focus:border-[#799A76]"
              >

                <option value="">
                  {t.levelPlaceholder}
                </option>

                <option>
                  {t.beginner}
                </option>

                <option>
                  {t.intermediate}
                </option>

                <option>
                  {t.advanced}
                </option>

              </select>






              {/* Goal */}

              <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-[#E7DDCC] p-4 text-slate-900 outline-none focus:border-[#799A76]"
              >

                <option value="">
                  {t.reasonPlaceholder}
                </option>

                <option>
                  {t.travel}
                </option>

                <option>
                  {t.work}
                </option>

                <option>
                  {t.school}
                </option>

                <option>
                  {t.conversation}
                </option>

                <option>
                  {t.personalInterest}
                </option>

              </select>






              <textarea
                name="goals"
                value={formData.goals}
                onChange={handleChange}
                rows="5"
                placeholder={t.goalsPlaceholder}
                required
                className="w-full rounded-xl border border-[#E7DDCC] p-4 text-slate-900 outline-none focus:border-[#799A76]"
              ></textarea>






              <button
                type="submit"
                className="w-full rounded-full bg-[#799A76] py-4 text-lg font-semibold text-white transition duration-300 hover:bg-[#5F805C]"
              >
                {t.bookButton}
              </button>



            </form>


          </div>


        </div>


      </div>


    </section>
  );
}


export default Booking;