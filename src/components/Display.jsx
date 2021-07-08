import './Display.css'
import StateContext from '../state/store'
import { useContext } from 'react'
import Bio from './pages/Bio'
import CV from './pages/CV.jsx'
import Portfolio from './pages/Portfolio.jsx'


export default function Display() {

    const { State } = useContext(StateContext)
    const sidebar = `Display ${State.sidebar}`


    return (
        <div className="myDivToPrint">
            <div className={sidebar} >
                
                {State.page === 'bio' && <Bio />}
                {State.page === 'cv' && <CV />}
                {State.page === 'portfolio' && <Portfolio />} 
            </div>
        </div>
    )
}