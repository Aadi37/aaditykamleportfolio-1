import Breadcrumb from "../Component/Breadcrumb";
import ContactBlock from "../Component/ContactBlock";

const Contact = () => {
    return <>
<section className="pageTitle">
    <Breadcrumb PageTitle='Contact' PageDescrption="I’d love to hear from you! Whether you need a modern website, a custom web app, or a UI revamp, I’m here to help.
Let’s collaborate to bring your ideas to life with clean design and seamless performance."/>
</section>
<section id='contactBlock'>
<div className='container mx-auto w-4/5 py-5'> 
    <div className='flex space-between gap-24'>
    <ContactBlock/>
    </div>
</div>

</section>
    </>
}

export default Contact;