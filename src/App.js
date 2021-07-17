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
