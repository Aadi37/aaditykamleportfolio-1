import { Link } from "react-router-dom";
import { servicesData } from "../Data/servicesData ";
const Services = () => {
    return (
        <>
        <div className="container mx-auto w-4/5 flex gap-1/5 flex-wrap justify-between mt-10">
        {servicesData.map(service => (
            <div key={service.id} className="basis-1/5 Services_card shadow-2xl">
                <div className='innerDiv'>
                <div className="card_icon mb-3.5">   
                    <img src={service.image}/>
                    </div>
                <h2 className='card-title'>{service.title}</h2>
            <p className="my-6">{service.shortDescription}</p>
            <Link to="/Services" className="text-black font-medium Bubble_btn">
                           <span class="hover_text"> Read More</span> 
             <span class="bottom bubble"></span>
            <span class="bottom bubble"></span>
            <span class="bottom bubble"></span>
            <span class="bottom bubble"></span>
                        </Link>
            <ul className="listContent hidden">
             {service.features.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            </div>
             </div>
        ))}
        </div>
        </>
    )
}

export default Services;