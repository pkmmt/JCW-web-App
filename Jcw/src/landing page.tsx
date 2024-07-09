import LoginPage from "./login page";
import './landing.css'
function LandingPage(){
 return (
  
<div className="relative h-screen w-full flex flex-col items-center justify-center text-blue-500 bg-cover bg-center">
<div className="absolute top-0 right-0 bottom-0 left-0 bg-current opacity-20"></div>
  <div className="text-green font-bold text-xl sm:text-5xl  ">
    Walk This Journey With US
  </div>
  
      <div className="flex items-end justify-center z-10">
        <div className="m-2 sm:m-5">
          <span className="text-white font-bold text-xl sm:text-5xl"><p>Jcw has been around for 100 of years</p></span>
          
        </div>
      </div>
  
  <div className="rounded-md shadow z-10 mt-5">
              <a href="./login page.tsx" className="w-full px-8 py-3 border border-transparent text-base leading-6 font-light rounded-full text-white bg-blue-900 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-md md:px-16">
                <span>Get Started</span>
              </a>
            </div>
    </div>
  

    );
 
};
       

export default LandingPage