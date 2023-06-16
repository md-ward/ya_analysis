import themeStore from '../controller/useThemeChange';
import manImage from '/assets/images/man.jpg';
import portraitImage from '/assets/images/portrait-05.jpg';

const TestimonialsPage = () => {
  const { theme } = themeStore();

  const lightTestimonials = (
    <>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <p className="text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed mb-4">
          "Working with this company was a game-changer for our business.
          Their data analysis services helped us uncover insights we never
          would have found on our own, and their team was a pleasure to work
          with."
        </p>
        <span className="flex  items-center gap-2 h-24">
          <img src={manImage} alt="" className="object-cover h-20 w-20 rounded-full " />
          <cite className="block text-md md:text-lg font-bold text-custom-blue">
            John Smith, CEO
          </cite>
        </span>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <p className="text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed mb-4">
          "I highly recommend this company to anyone who needs help with
          data analysis. Their team is professional, knowledgeable, and
          always goes above and beyond to deliver great results."
        </p>
        <span className="flex  items-center gap-2 h-24">
          <img src={portraitImage} alt="" className="object-cover h-20 w-20 rounded-full " />
          <cite className="block text-md md:text-lg font-bold text-custom-blue">
            Jane Doe, Marketing Director
          </cite>
        </span>
      </div>
    </>
  );

  const darkTestimonials = (
    <>
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-white">
        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-4">
          "Working with this company was a game-changer for our business.
          Their data analysis services helped us uncover insights we never
          would have found on our own, and their team was a pleasure to work
          with."
        </p>
        <span className="flex  items-center gap-2 h-24">
          <img src={manImage} alt="" className="object-cover h-20 w-20 rounded-full " />
          <cite className="block text-md md:text-lg font-bold text-custom-blue">
            John Smith, CEO
          </cite>
        </span>
      </div>
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-white">
        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-4">
          "I highly recommend this company to anyone who needs help with
          data analysis. Their team is professional, knowledgeable, and
          always goes above and beyond to deliver great results."
        </p>
        <span className="flex  items-center gap-2 h-24">
          <img src={portraitImage} alt="" className="object-cover h-20 w-20 rounded-full " />
          <cite className="block text-md md:text-lg font-bold text-custom-blue">
            Jane Doe, Marketing Director
          </cite>
        </span>
      </div>
    </>
  );

  return (
    <section className={`lg:h-screen py-32 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"}`} id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-12 ${theme === "dark" ? "text-white" : " text-custom-blue"}`}>
            Testimonials
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {theme === "light" ? lightTestimonials : darkTestimonials}
        </div>
      </div>

    </section>
  );
};

export default TestimonialsPage;