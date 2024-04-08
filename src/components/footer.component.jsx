import insta from '../pages/img/icon-instagram.svg';
import fb from '../pages/img/icon-facebook.svg';
import x from '../pages/img/icon-twitter.svg';
import tube from '../pages/img/icon-youtube.svg';
import pinterest from '../pages/img/icon-pinterest.svg';
import logoWhite from '../pages/img/logo-white.svg';

const Footer = () => {
    return (
        <footer class="bg-veryDarkBlue">
 
      <div
        class="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0"
      >
     
        <div
          class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start"
        >
          <div class="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2024, All Rights Reserved
          </div>
     
          <div>
            <img src={logoWhite} class="h-8" alt="" />
          </div>
    
          <div class="flex justify-center space-x-4">
     
            <a href="#">
              <img src={fb} alt="" class="h-8" />
            </a>
      
            <a href="#">
              <img src={tube}alt="" class="h-8" />
            </a>
  
            <a href="#">
              <img src={x} alt="" class="h-8" />
            </a>
         
            <a href="#">
              <img src={pinterest} alt="" class="h-8" />
            </a>
       
            <a href="#">
              <img src={insta} alt="" class="h-8" />
            </a>
          </div>
        </div>
       
        <div class="flex justify-around space-x-32">
          <div class="flex flex-col space-y-3 text-white">
            <a href="#" class="hover:text-brightRed">Home</a>
            <a href="#" class="hover:text-brightRed">Pricing</a>
            <a href="#" class="hover:text-brightRed">Products</a>
            <a href="#" class="hover:text-brightRed">About</a>
          </div>
          <div class="flex flex-col space-y-3 text-white">
            <a href="#" class="hover:text-brightRed">Careers</a>
            <a href="#" class="hover:text-brightRed">Community</a>
            <a href="#" class="hover:text-brightRed">Privacy Policy</a>
          </div>
        </div>

      
        <div class="flex flex-col justify-between">
          <form>
            <div class="flex space-x-3">
              <input
                type="text"
                class="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button
                class="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none"
              >
                Go
              </button>
            </div>
          </form>
          <div class="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
    );
}

export default Footer;