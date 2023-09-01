import { faLinkedinIn, faStackOverflow, faGithub, faDev } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialShare = [
  {
    icon: <FontAwesomeIcon icon={faLinkedinIn} />,
    link: 'https://www.linkedin.com/in/victor-tiho/',
  },
  {
    icon: <FontAwesomeIcon icon={faDev} />,
    link: 'https://dev.to/vixero',
  },
  {
    icon: <FontAwesomeIcon icon={faStackOverflow} />,
    link: 'https://stackoverflow.com/users/2949081/vixero',
  },
  {
    icon: <FontAwesomeIcon icon={faGithub} />,
    link: 'https://github.com/vixero-dev',
  },
];

export default function SocialLinks() {
  return (
    <div className="socials-container">
      <ul className="social list-unstyled">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={val.link} target="_blank" rel="noreferrer">
              {val.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
