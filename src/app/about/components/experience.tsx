import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import parse from 'html-react-parser';

const experienceContent = [
  {
    year: 'Feb 2021 - Present',
    position: 'Full Stack Developer',
    companyName: '<a target="_blank" href="https://www.wavebytes.be/">WaveBytes</a>',
    details: `Responsible for developing and maintaining web applications using .NET, Angular, and Azure. Design software architecture, write clean, efficient code, collaborate with teams, and deploy applications on Azure`,
  },
  {
    year: 'Sep 2019 - Jan 2021',
    position: 'Microsoft .NET Consultant',
    companyName: '<a target="_blank" href="https://www.realdolmen.com/">Inetum-Realdolmen</a>',
    details:
      'Develop and maintain software using .NET technologies. Collaborate with teams, troubleshoot issues, and communicate with stakeholders.',
  },
  {
    year: 'Jan 2019 - Jun 2019',
    position: 'Junior Software Developer',
    companyName: '<a target="_blank" href="https://www.xams.be/">Xams Services</a>',
    details:
      'A web application for digitizing various administrative tasks, primarily requesting (un)paid leave, short leave, illness, and working from home. The app connects to Microsoft Dynamics NAV and syncs with a Microsoft SQL database.',
  },
  {
    year: 'Apr 2018 - Jun 2018',
    position: 'Front end developer (internship)',
    companyName: '<a target="_blank" href="https://www.knoware.be/">Knoware</a>',
    details:
      'A mobile application for patients that allows them to authenticate, use a personal agenda, read in various treatments from doctors from an external file (email), save them in the agenda, and view daily medicines and doses.',
  },
];

export default function Experience() {
  return (
    <>
      <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">Experience</h3>
      <ul>
        {experienceContent.map((val, i) => (
          <li key={i}>
            <div className="icon">
              <FontAwesomeIcon icon={faBriefcase} className="fa" />
            </div>
            <span className="time open-sans-font text-uppercase">{val.year}</span>
            <h5 className="poppins-font text-uppercase">
              {val.position}
              <span className="place open-sans-font">{parse(val.companyName)}</span>
            </h5>
            <p className="open-sans-font">{val.details}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
