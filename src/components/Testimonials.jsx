const testimonials = [
  {
    name: "Sarah",
    country: "🇺🇸 United States",
    review:
      "Daniela made learning Spanish enjoyable and easy to understand. I feel much more confident speaking!",
  },
  {
    name: "Michael",
    country: "🇨🇦 Canada",
    review:
      "The lessons are personalized and engaging. I've improved faster than I expected.",
  },
  {
    name: "Emma",
    country: "🇬🇧 United Kingdom",
    review:
      "Highly recommend Lingora! Daniela is patient, encouraging, and very professional.",
  },
];

function Testimonials() {
  return (
    <section className="bg-[#FAF8F3] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-widest text-amber-600">
            Testimonials
          </p>

          <h2
            className="mt-4 text-5xl font-bold text-slate-900"
            style={{ fontFamily: "Playfair Display" }}
          >
            What Students Say
          </h2>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {testimonials.map((student) => (
            <div
              key={student.name}
              className="rounded-3xl bg-white p-8 shadow-lg"
            >

              <div className="text-2xl">⭐⭐⭐⭐⭐</div>

              <p className="mt-6 leading-8 text-slate-600 italic">
                "{student.review}"
              </p>

              <h3 className="mt-8 text-xl font-bold">
                {student.name}
              </h3>

              <p className="text-slate-500">
                {student.country}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;