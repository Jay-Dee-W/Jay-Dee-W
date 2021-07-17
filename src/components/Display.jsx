import './Display.css'
import StateContext from '../state/store'
import { useContext } from 'react'
import Bio from './pages/Bio'
import CV from './pages/CV.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Connect from './pages/Connect'


export default function Display() {

    const { State, dispatch } = useContext(StateContext)
    const sidebar = `Display ${State.sidebar}`
    const sidebarToggle = () => {
        dispatch({ type: 'sidebarToggle' })
    }

    return (
        <div className="myDivToPrint">
            <div className={sidebar} >
            <div className="arrow" onClick={sidebarToggle}>
                    {/* {State.sidebar ? <img src="arrow-close.svg" alt="javascript" /> : <img src="arrow-open.svg" alt="javascript" />} */}
                    {State.sidebar ? '<' : '>'}
                </div>
                {State.page === 'bio' && <Bio />}
                {State.page === 'cv' && <CV />}
                {State.page === 'portfolio' && <Portfolio />} 
                {State.page === 'connect' && <Connect />} 
            </div>
        </div>
    )
}