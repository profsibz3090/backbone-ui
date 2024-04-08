import React from 'react';
import NavBar from '../components/nav-bar.component';
import Hero from '../components/hero.component';
import Features from '../components/features.component';
import Testimonials from '../components/testimonials.component';
import Cta from '../components/cta.component';
import Footer from '../components/footer.component';

class LandingPage extends React.Component {
  
    render() {
        return (
          <div>
   

    <NavBar/>
   <Hero/>
   <Features/>
   <Testimonials/>
    <Cta/>
    <Footer/>
 


    
          </div>
        );
    }
}

export default LandingPage;