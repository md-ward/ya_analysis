import themeStore from '../controller/useThemeChange';
import aboutimg from '/assets/images/building_2.jpg'
const AboutPage = () => {
  const { theme } = themeStore();



  return (
    <section className={`max-sm:pb-7 max-sm:pt-7 relative sm:h-screen w-full ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`} id="about">
      <div className="absolute inset-0">
        <img
          className={`w-full h-full object-cover max-sm:hidden ${theme === "dark" ? "opacity-50" : ""}`}
          src={aboutimg}
alt='about us image'
          loading="lazy"
        />
        <div className={`absolute inset-0 ${theme === "dark" ? "bg-black opacity-40" : "bg-white opacity-20"}`}></div>
      </div>
      <div className={`relative h-full flex flex-col justify-center items-center max-sm:bg-white ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
        <div className={`max-w-7xl flex flex-col md:flex-row justify-center items-center p-6 md:p-8 lg:p-12 sm:rounded-3xl ${theme === "dark" ? "bg-gray-800 shadow-lg" : "bg-white shadow-xl"}`}>
          <div className="w-full md:w-1/2 px-4 md:px-8 lg:px-12">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold  mb-8 text-center md:text-left ${theme === "dark" ? "text-white" : "text-custom-blue"}`}>
              About Us
            </h2>
            <div className={`text-lg md:text-xl leading-relaxed mb-8   ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
              <p>
                We're a team of data scientists and analysts who are passionate
                about helping businesses unlock the power of their data. With
                years of experience in the field, we have the expertise and
                knowledge to help you make informed decisions and drive business
                growth.
              </p>
              <p className="mt-4">
                Our mission is to provide high-quality data analysis services
                that help our clients achieve their business goals. We're
                committed to delivering results that exceed your expectations
                and help you succeed.
              </p>
            </div>
          </div>
          <div className={`w-full md:w-1/2 px-4 md:px-8 lg:px-12 h-full rounded-lg text-center md:text-left   flex-col-reverse md:flex-col ${theme === "dark" ? "bg-gray-900" : "bg-slate-100"}`}>
            <h3 className={`text-3xl md:text-4xl lg:text-5xl font-bold  mb-8  text-center ${theme === "dark" ? "text-white" : "text-custom-blue"}`}>
              Data Analytics
            </h3>
            <p className={`text-lg md:text-xl leading-relaxed mb-8 ${theme === "dark" ? "text-gray-300" : "text-gray-600"} `}>
              We use advanced statistical techniques and machine learning
              algorithms to help businesses make sense of their data and drive
              growth.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutPage;