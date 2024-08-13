import { Header } from './components/header';
import { WorkingExperiance } from './components/working-experiance';
import { AboutMe } from './components/aboutme';
import { TechStack } from './components/tech-stack';
import { Footer } from './components/footer';

import './App.css';

function App() {
  return (
    <>
      <div className="flex justify-center p-20 min-[320px]:p-5">
        <div className="max-w-3xl bg-white border-4 border-gray-300 rounded-3xl shadow-lg">
          <Header />

          <main>
            <AboutMe
              title="About me"
              description="I am a Frontend Engineer with expertise in building intuitive, responsive, and user-friendly interfaces. I am proficient in modern technologies and tools such as HTML, CSS, JavaScript, TypeScript, as well as frameworks like React JS and Next JS. Additionally, I work with Redux Toolkit, React Query, Axios, Material-UI, and Tailwind CSS to create robust and efficient web applications."
            />

            <div className="my-10 mx-4 sm:mx-10">
              <h4 className="text-base text-start font-bold tracking-tight text-gray-700 pb-1 px-5">
                Working Experience
              </h4>
              <div className="space-y-6 text-start my-5">
                <WorkingExperiance
                  company="PT. BFI Finance Indonesia"
                  workExperience="October 2022 - August 2024"
                  description=" Slicing UI/UX design to be web design with HTML, CSS, Material UI, Bootstrap, Bootstrap CSS, SASS, Develop al Frontend web using ReactJS, Develop all responsive website, Develop state management using Redux Toolkit, Integration API using Axios, Develop unit test components (RTL & Jest), Migration code JavaScript to TypeScript, Migration web app from .NET to ReactJS, Maintenance and update feature."
                />
                <WorkingExperiance
                  company="PT. Kairos Cahaya Cemerlang"
                  workExperience="August 2022 - October 2022"
                  description="Developing a new company profile website with a modern theme using ReactJs, Creating a Backend API Service for employee attendance, Building an integrated employee attendance system with the Backend API."
                />
              </div>
            </div>
            <TechStack />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
