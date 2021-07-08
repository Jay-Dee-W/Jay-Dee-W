// import logo from 'logo.gif';
import './App.css';
import Sidebar from './components/Sidebar'
import Display from './components/Display'
import { StateContextProvider } from './state/store'

function App() {
  return (
    <StateContextProvider>
      <div className="App">
        <header className="App-header">
          <img src="avatar.jpg" className="App-avatar" alt="avatar" />
          <div className='Intro'>
            <p>John-Desmond(JD) Wilson</p>
            <p>Full Stack Web Developer</p>
            <p>Specializing in <span>JS/HTML/CSS</span> and the <span>MERN</span> Stack</p>
            <div className="logos">
              <img src="javascript-original.svg" alt="javascript" />
              <img src="html5-original-wordmark.svg" alt="html5" />
              <img src="css3-original-wordmark.svg" alt="css3" />
              <img src="mongodb-original-wordmark.svg" alt="mongodb" />
              <img src="express-original-wordmark.svg" alt="express" />
              <img src="react-original-wordmark.svg" alt="react" />
              <img src="nodejs-original-wordmark.svg" alt="nodejs" />
            </div>
          </div>
          <div className='no-print'>
            <div className='connect'>
              <p> Connect with me:</p>
              <div className="logos">
                <a href="https://twitter.com/jaydeewilson" target="blank"><img align="center" src="twitter.svg" alt="jaydeewilson" /> </a>
                <a href="https://linkedin.com/in/john-desmond-jd-wilson-55a84613" target="blank"><img align="center" src="linked-in-alt.svg" alt="john-desmond-jd-wilson-55a84613" /> </a>
                <a href="https://github.com/Jay-Dee-W" target="blank"><img align="center" src="github.svg" alt="Jay-Dee-W" /> </a>
                <a href="mailto:jaydee.wilson@gmail.com" target="blank"><img align="center" src="Gmail.svg" alt="Jay-Dee-W" /> </a>
                <a href="https://www.upwork.com/freelancers/~01ac5db5f78a86cf12" target="blank"><img align="center" src="upwork.svg" alt='upwork' /> </a>
              </div>
            </div>
          </div>
        </header>
        <section>
          <Sidebar />
          <Display />
        </section>
        {/* <img src="logo.gif" className="App-logo" alt="logo" /> */}
      </div>
    </StateContextProvider>
  );
}

export default App;
