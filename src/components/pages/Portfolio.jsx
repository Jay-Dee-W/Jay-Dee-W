import './Pages.css'
import portfolio from '../../data/portfolio.json'

export default function Portfolio() {
    // console.log(portfolio)
    return (
        <div className='Page'>
           
            {portfolio.map(item => {
                return (
                    <div className='portfolio-item'>
                        <a href={item.link} target='_blank' rel="noreferrer" >
                            <img src={item.img} alt={item.heading}/>
                            <div>
                                <h1>{item.heading}</h1>
                                <h3>{item.description}</h3>
                                <h5>Created Using : {item.tech}</h5>
                            </div>
                        </a>

                    </div>
                )
            })} 
           
        </div>
    )
}