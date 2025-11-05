import {contactInfo} from "../Data/ContactData"
const ContactBlock = () => {
 return <>
    {contactInfo.map((item) => (
  <div key={item.id} className="contact-card basis-2/6">
    <a href={item.link}>
    {item.icon} 
    <h3>{item.title}</h3>
    <p>{item.description}</p>

    {/* for email or skype */}
    {item.link && <a href={item.link} target="_blank" rel="noopener noreferrer"></a>}

    {/* for social links */}
    {/* {item.links && (
      <div className="social-links">
        {Object.entries(item.links).map(([platform, url]) => (
          <a key={platform} href={url} target="_blank" rel="noopener noreferrer">
            {platform}
          </a>
        ))}
      </div>
    )}</a> */}</a>
  </div>
))}

 </>
}

export default ContactBlock;