const skills = ["Pencil Sketching", "Mandala Art", "Portraits", "Color Blending", "Anime Drawing"];

const Skills = () => {
  return (
    <section className="p-8 bg-white/80 backdrop-blur-xl rounded-xl shadow-xl m-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-6">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-6 py-3 bg-purple-100 text-purple-900 font-medium rounded-full shadow hover:bg-purple-200 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
