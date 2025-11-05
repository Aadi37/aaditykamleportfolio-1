import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faHouse, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faSkype, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const contactInfo = [
  {
    id: 1,
    title: "Help & Support",
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    description: "Email us on Kamleaditya@yahoo.com for help with a current product or service.",
    link: "mailto:Kamleaditya@yahoo.com",
  },
  {
    id: 2,
    title: "Skype",
    icon: <FontAwesomeIcon icon={faSkype} />,
    description: "Get in touch with us anywhere in the world via Skype.",
    link: "skype:aadityakamle?chat", // ?call for direct call
  },
  {
    id: 3,
    title: "Social",
    icon: <FontAwesomeIcon icon={faCommentDots} />,
    description: "Connect with us on social media — follow for updates and insights.",
    links: {
      facebook: "https://facebook.com/yourprofile",
      instagram: "https://instagram.com/yourprofile",
      linkedin: "https://linkedin.com/in/yourprofile",
    },
    socialIcons: {
      facebook: <FontAwesomeIcon icon={faFacebook} />,
      instagram: <FontAwesomeIcon icon={faInstagram} />,
      linkedin: <FontAwesomeIcon icon={faLinkedin} />,
    },
  },
];
