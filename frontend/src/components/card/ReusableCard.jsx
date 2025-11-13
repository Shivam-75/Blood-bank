const ReusableCard = ({ data = [] }) => {
  return (
    <section
      className="w-[95%] mx-auto py-10 sm:py-16 bg-white  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  transition-all duration-300 px-2"
      role="region"
      aria-label="Informational cards section">
      {data.map(({ title, description }, index) => (
        <article
          key={index}
          className="bg-gradient-to-l from-red-700 to-black rounded-xl text-center sm:p-4 sm:mx-7 hover:scale-105 transform transition-transform duration-300 shadow-md hover:shadow-lg will-change-transform p-2">
          <h2
            className="font-extrabold  text-md md:text-2xl text-white mb-3"
            role="heading"
            aria-level="2">
            {title}
          </h2>
          <p className="text-yellow-100 font-serif text-sm leading-relaxed">
            {description}
          </p>
        </article>
      ))}
    </section>
  );
};

export default ReusableCard;
