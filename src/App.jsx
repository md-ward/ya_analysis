import Navbar from "./codingSiteComponent/widget/navBar";
import HomePage from "./codingSiteComponent/view/home_page";
import ServicesPage from "./codingSiteComponent/view/our_services_page";
import AboutPage from "./codingSiteComponent/view/about_page";
import TestimonialsPage from "./codingSiteComponent/view/testomonials_page";
import ProjectsPage from "./codingSiteComponent/view/projects_page";
import ContactUsPage from "./codingSiteComponent/view/contact_us";
import Footer from "./codingSiteComponent/widget/footer";

const App = () => {


  return (
    <div className="w-full h-full flex flex-col  overflow-hidden">
      <Navbar></Navbar>
      <HomePage></HomePage>
      <ServicesPage></ServicesPage>
      <AboutPage></AboutPage>
      <ProjectsPage></ProjectsPage>
      <TestimonialsPage></TestimonialsPage>
      <ContactUsPage></ContactUsPage>
      <Footer></Footer>
    </div>
  );
}

export default App;