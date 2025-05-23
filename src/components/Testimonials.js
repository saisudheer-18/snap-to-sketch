const testimonials = [
  {
    quote: "Her mandala art is calming and precise – you feel the peace in every detail.",
    author: "Art Enthusiast",
  },
  {
    quote: "The portraits are so expressive and full of life!",
    author: "Gallery Visitor",
  },
  {
    quote: "Amazing creativity and dedication visible in every sketch.",
    author: "Friend & Supporter",
  },
];

const Testimonials = () => {
  return (
    <section className="max-w-4xl mx-auto p-8 my-8 bg-white/90 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Testimonials</h2>
      <div className="flex flex-col gap-6">
        {testimonials.map(({ quote, author }, i) => (
          <blockquote
            key={i}
            className="italic text-gray-700 border-l-4 border-purple-700 pl-4"
          >
            <p>"{quote}"</p>
            <footer className="mt-2 font-semibold text-right">— {author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
