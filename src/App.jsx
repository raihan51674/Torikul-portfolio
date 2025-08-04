

import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
import HireNotification from './Components/HireNotification'
import Navber from './Components/Navber'
import AboutPage from './Pages/AboutPage'
import ContactUsPage from './Pages/ContactUsPage'
import MyEducation from './Pages/MyEducation'
import MyProjects from './Pages/MyProjects'
import MySkiles from './Pages/MySkiles'

function App() {


  return (
    <div className='overflow-x-hidden'>
     <Navber></Navber>
     <HeroSection></HeroSection>
     <div className='container xl:w-8/12 mx-auto px-6 py-6'>
          <AboutPage></AboutPage>
          <MySkiles></MySkiles>
          <MyEducation></MyEducation>
          <MyProjects></MyProjects>
          <ContactUsPage></ContactUsPage>
          <Footer></Footer>
          <HireNotification></HireNotification>
     </div>
   
    </div>
  )
}

export default App
