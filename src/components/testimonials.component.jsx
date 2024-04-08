import avatarAnisha from '../pages/img/avatar-anisha.png';
import avatarAli from '../pages/img/avatar-ali.png';
// import avatarShanai from '../pages/img/avatar-shanai.png';
import avatarRichard from '../pages/img/avatar-richard.png';



const Testimonials = () => {
    return (
        <section id="testimonials">
   
        <div class="max-w-6xl px-5 mx-auto mt-32 text-center">
    
          <h2 class="text-4xl font-bold text-center">
            What's Different About Solar Vision?
          </h2>
    
          <div class="flex flex-col mt-24 md:flex-row md:space-x-6">
         
            <div
              class="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
            >
              <img src={avatarAnisha} class="w-16 -mt-14" alt="" />
              <h5 class="text-lg font-bold">Sheep 1</h5>
              <p class="text-sm text-darkGrayishBlue">
                “Since implementing the AI-powered fault finding system, our solar maintenance has become more cost-effective and proactive. The system's ability to analyze vast amounts of data and identify faults with precision has been impressive.”
              </p>
            </div>
  
            
            <div
              class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
            >
              <img src={avatarAli} class="w-16 -mt-14" alt="" />
              <h5 class="text-lg font-bold">Sheep 2</h5>
              <p class="text-sm text-darkGrayishBlue">
                “Using the AI-driven fault finding system has been a game-changer for our solar infrastructure. The system's fault identification capabilities are remarkable. It accurately detects and pinpoints even the most subtle issues, allowing us to address them promptly”
              </p>
            </div>
  
          
            <div
              class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
            >
              <img src={avatarRichard} class="w-16 -mt-14" alt="" />
              <h5 class="text-lg font-bold">Sheep 3</h5>
              <p class="text-sm text-darkGrayishBlue">
                “The AI-powered fault finding system has revolutionized our solar maintenance practices. It has significantly improved our efficiency in detecting and resolving faults, saving us valuable time and resources”
              </p>
            </div>
          </div>
       
          <div class="my-16">
            <a
              href="#"
              class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
              >Get Started</a
            >
          </div>
        </div>
      </section>
    );
}

export default Testimonials;