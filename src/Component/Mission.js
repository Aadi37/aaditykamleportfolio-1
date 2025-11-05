import { portfolioContent } from "../Data/portfolioContent";
import AboutTran from "../images/AboutTran.png"
const Mission =({title}) => {
    return (
        <>
         <div className="container mx-auto w-4/5 bg-mission flex items-center">
           <div className="MissionContent text-white basis-1/2">
           <h4 className="SiteTitle">{title}</h4>
           <p className='AboutPara'>{portfolioContent.description}</p>
           </div>
           <div className="MissionImage basis-1/2">
           <img src={AboutTran}/>
         </div>
        </div>
         
        </>
    )
}
export default Mission;