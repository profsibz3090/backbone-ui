import illustrationIntro from '../pages/img/illustration-intro.svg';

const Hero = () => {
    return (
        <section id="hero">
 
        <div
          class="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row"
        >
      
          <div class="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1
              class="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left"
            >
              Elevating solar maintenance with AI-driven fault identification
            </h1>
            <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Invest in the future of solar maintenance. Let AI be your guiding light in achieving flawless solar performance. Experience the seamless fusion of cutting-edge technology and renewable energy expertise. Elevate your solar maintenance with our AI-driven fault finding system and unlock unparalleled efficiency and reliability.
            </p>
            <div class="flex justify-center md:justify-start">
              <a
                href="#"
                class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
                >Get Started</a
              >
            </div>
          </div>
         
          <div class="md:w-1/2">
            <img src={illustrationIntro} alt="" />
          </div>
        </div>
      </section>
    )
}

export default Hero;