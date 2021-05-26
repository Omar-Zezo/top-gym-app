import './style/main.css';
import Header from './components/Header/Header'
import About from './components/About/About'
import Swiper from './components/Testimonial/Testimonial'
import MemberesPlans from './components/MemberesPlans/MemberesPlans'
import Offers from './components/Offers/Offers'
import Contact from './components/Contact/Contact'
import News from './components/News/News'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Swiper />
      <MemberesPlans />
      <Offers />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
