import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white">
      {/* Background Video */}
      <video
        src="/videos/hero-bg.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          Turning Blank Pages into Magic
        </h1>
        <p className="text-lg mt-3 font-light">
          Mandalas, Anime, Portraits & More
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
