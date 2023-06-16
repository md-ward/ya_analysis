import themeStore from '../controller/useThemeChange';
import ourServicesImg from "/assets/images/building.jpg"
const ServiceCard = ({ title, description, theme }) => {
  return (
    <div className={`${theme === "dark" ? "bg-gradient-to-t from-gray-800 to-gray-900" : "bg-white"} hover:-translate-y-2 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform rotate-3 hover:rotate-0`}>
      <div className={`p-6 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
        <h3 className={`text-2xl md:text-3xl font-bold ${theme === "dark" ? "text-white" : "text-custom-blue"} mb-4`}>{title}</h3>
        <p className={`text-lg md:text-xl leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{description}</p>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  const { theme } = themeStore();


  return (
    <section className={`relative h-fit lg:h-screen ${theme === "dark" ? "bg-gray-900" : "bg-white"}`} id="services">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={ourServicesImg}
          alt="background image"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="relative h-full flex flex-col justify-center items-center">
        <div className="max-w-7xl p-8 md:p-12 lg:p-16">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 text-center`}>
            Our Services
          </h2>
          <div className="flex flex-col md:flex-row md:justify-between gap-10">
            <div className="md:w-1/3">
              <ServiceCard
                theme={theme}
                title="Data Analysis"
                description="We help you make sense of your data by analyzing it using advanced statistical techniques and machine learning algorithms."
              />
            </div>
            <div className="md:w-1/3">
              <ServiceCard
                theme={theme}
                title="Data Visualization"
                description="We use data visualization tools to help you understand your data and communicate insights to your team."
              />
            </div>
            <div className="md:w-1/3">
              <ServiceCard
                theme={theme}
                title="Data Strategy"
                description="We work with you to develop a data strategy that aligns with your business goals and helps you make informed decisions."
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ServicesPage;