import { useContext } from 'react'
import './Sidebar.css'
import StateContext from '../state/store'

export default function Sidebar() {
    let { State, dispatch } = useContext(StateContext)

    const sidebarToggle = () => {
        dispatch({ type: 'sidebarToggle' })
    }
    const itemClick = (item) => {
        dispatch({ type: 'changeDisplay', payload: item })
    }

    return (
        <div className="no-print" >
            <div className="Sidebar " style={{ width: State.sidebar ? "20%" : "10%" }}>
                <div className='items'  >
                    <div className={State.sidebar ? "" : "narrow"} onClick={() => itemClick('bio')}>
                        <p className='Sidebar-item' >Biography</p>
                        <img className='item-img' src="biography.svg" alt='bio' />
                    </div>
                    <div className={State.sidebar ? "" : "narrow"} onClick={() => itemClick('cv')} >
                        <p className='Sidebar-item' >Cirriculum Vita</p>
                        <img className='item-img' src="cv.svg" alt='cv' />

                    </div>
                    <div className={State.sidebar ? "" : "narrow"} onClick={() => itemClick('portfolio')}>
                        <p className='Sidebar-item' >Portfolio</p>
                        <img className='item-img' src="portfolio.svg" alt='portfolio' />

                    </div>
                </div>
                <div className="arrow" onClick={sidebarToggle}>
                    {/* {State.sidebar ? <img src="arrow-close.svg" alt="javascript" /> : <img src="arrow-open.svg" alt="javascript" />} */}
                    {State.sidebar ? '<' : '>'}
                </div>
            </div>
        </div>
    )
}