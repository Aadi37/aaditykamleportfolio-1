import { platformLogos } from "../Data/platformLogos ";
const Marquee = () => {
return (
    <>
     <div className="MarqueeLine ">
        <ul>
        {platformLogos.map((marqueeItem , idx)=> (
            <li>
              
          <span
          key={marqueeItem.idx}
          title={marqueeItem.name}
          style={{ width: 95, height: 95, display: "inline-block" }}
          dangerouslySetInnerHTML={{ __html: marqueeItem.svg }}
        />
            </li>
        ))}
        </ul>
     </div>
    </>
)
}

export default Marquee ;