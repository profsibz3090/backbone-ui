import logo from '../pages/img/logo.svg';

const NavBar = () => {
   return (
    <nav class="relative container mx-auto p-6">

    <div class="flex items-center justify-between">
     
      <div class="pt-2">
        <img src={logo} alt="" />
      </div>

      <div class="hidden space-x-6 md:flex">
        <a href="#" class="hover:text-darkGrayishBlue">Pricing</a>
        <a href="#" class="hover:text-darkGrayishBlue">Product</a>
        <a href="#" class="hover:text-darkGrayishBlue">About Us</a>
        <a href="#" class="hover:text-darkGrayishBlue">Careers</a>
        <a href="#" class="hover:text-darkGrayishBlue">Community</a>
      </div>

      <a
        href="#"
        class="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
        >Book a Meeting</a
      >

    
      <button
        id="menu-btn"
        class="block hamburger md:hidden focus:outline-none"
      >
        <span class="hamburger-top"></span>
        <span class="hamburger-middle"></span>
        <span class="hamburger-bottom"></span>
      </button>
    </div>


    <div class="md:hidden">
      <div
        id="menu"
        class="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
      >
        <a href="#">Pricing</a>
        <a href="#">Product</a>
        <a href="#">About Us</a>
        <a href="#">Careers</a>
        <a href="#">Community</a>
      </div>
    </div>
  </nav>
   );
}

export default NavBar;