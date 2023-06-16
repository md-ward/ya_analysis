import themeStore from '../controller/useThemeChange';
import heroImage from '/assets/images/hero.jpg';
import heroDarkImage from '/assets/images/heroDark.svg';
const HomePage = () => {

  const { theme } = themeStore();

  function handleButtonClick() {
    const target = document.getElementById('contact');
    target.scrollIntoView({ behavior: 'smooth' });
  }


  return (
    <div className={`h-fit pt-16 lg:h-screen flex flex-col md:flex-row items-center ${theme === 'dark' ? 'bg-gray-800 text-white' : ''}`} id="home">
 <img
  src={theme === 'light' ? heroImage : heroDarkImage}
  alt="Programming image"
  className="w-full md:w-1/2 rounded-lg m-4"
/>

      <section className={`text-center md:text-left ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className={`container py-16 px-6 md:py-32 md:px-12 lg:px-16 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-8 ${theme === 'dark' ? 'text-gray-100' : 'text-custom-blue'}`}>
            Unlock the Power of Your Data
          </h1>
          <p className={`text-lg md:text-xl lg:text-2xl leading-relaxed mb-12 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Our data analysis services help you make sense of your data, uncover hidden insights, and drive business growth. Let us help you turn your data into a competitive advantage.
          </p>
          <button
            className={`py-3 px-6 rounded-full shadow-lg transition duration-500 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 ring-gray-300' : 'bg-custom-blue text-white hover:bg-secondary hover:ring-2 ring-dark-blue'}`}
            onClick={handleButtonClick}
          >
            Get Started
          </button>
        </div>
      </section>

    </div>
  );
};

export default HomePage;