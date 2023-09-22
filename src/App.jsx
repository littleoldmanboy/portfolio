import './App.css'
import AboutImg from './components/AboutImg'
import AboutText from './components/AboutText'
import Contact from './components/Contact'
import MainLanding from './components/MainLanding'
import Navigation from './components/Navigation'
import Skills from './components/Skills'
import SkillsImg from './components/SkillsImg'
import SkillsScroll from './components/SkillsScroll'
import SkillsText from './components/SkillsText'
import Works from './components/Works'
import WorksContent from './components/WorksContent'

function App() {

  return (
    <>
      <div className='LandingWrapper' id='Home'>
        <Navigation />
        <MainLanding />
        <div className='Arrow'>
          <a href="#About">
            <svg className='FadeIn' xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 1024 1024"><g transform="translate(0 1024) scale(1 -1)"><path fill="white" d="m488.832 344.32l-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872l319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"/></g></svg>
          </a>
        </div>
      </div>
      <div className='AboutWrapper' id='About'>
        <AboutText />
        <AboutImg />
      </div>
      <div className='WorksWrapper' id='Works'>
        <Works />
      </div>
        <WorksContent />
      <div className='SkillsWrapper' id='Skills'>
        <Skills />
        <div className='SkillsContentWrapper'>
          <SkillsText />
          <SkillsImg />
        </div>
        <div className='SkillsScrollOuterWrapper'>
          <SkillsScroll />
        </div>
      </div>
      <div className='ContactWrapper' id='Contact'>
        <Contact />
      </div>
    </>
  )
}

export default App