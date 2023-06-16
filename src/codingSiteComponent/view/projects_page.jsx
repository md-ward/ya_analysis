import ProjectCard from "../widget/projects_card";
import themeStore from '../controller/useThemeChange';
import projectImage1 from '/assets/images/pro1.jpg';
import projectImage2 from '/assets/images/pro2.jpg';
import projectImage3 from '/assets/images/pro3.jpg';

const ProjectsPage = () => {
    const { theme } = themeStore();


    return (
        <section className={`relative h-fit lg:h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`} id="projects">
            <div className="relative h-full flex flex-col justify-center items-center">
                <div className={`max-w-7xl p-8 md:p-12 lg:p-16 ${theme === "dark" ? "bg-gray-800 shadow-lg" : "bg-white shadow-xl"} rounded-2xl`}>
                    <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center ${theme === "dark" ? "text-white" : "text-custom-blue "}`}>
                        Our Projects
                    </h2>
                    <div className="flex flex-col md:flex-row md:justify-between gap-10">
                        <div className="md:w-1/3">
                            <ProjectCard
                                name="Customer Segmentation"
                                description="We helped a retail company to segment their customer base using clustering techniques and identified the key factors affecting customer behavior."
                                image={projectImage3}
                                theme={theme}
                            />
                        </div>
                        <div className="md:w-1/3">
                            <ProjectCard
                                name="Churn Prediction"
                                description="We developed a machine learning model to predict customer churn for a telecom company and provided recommendations on how to retain their customers."
                                image={projectImage2}
                                theme={theme}
                            />
                        </div>
                        <div className="md:w-1/3">
                            <ProjectCard
                                name="Marketing Mix Optimization"
                                description="We optimized the marketing mix for a consumer goods company by analyzing the impact of different marketing channels on sales and identifying the optimal allocation of their marketing budget."
                                image={projectImage1}
                                theme={theme}
                            />
                        </div>
                    </div>
                </div>
            </div>
    
        </section>
    );
};

export default ProjectsPage;