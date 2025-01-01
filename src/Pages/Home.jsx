import '../components/Hero/Hero'
import Hero from '../../src/components/Hero/Hero.jsx'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'

const Home = () => {
  return (
    <div className='flex-col'>
    <Header/>
    <Hero/>
    <Footer/>
    </div>
  )
}

export default Home