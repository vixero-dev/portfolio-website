import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import parse from 'html-react-parser';

const educationContent = [
  {
    year: '2020',
    degree: 'MCSA: Web Applications',
    institute: 'Microsoft',
    details: '<a target="_blank" href="https://www.credly.com/badges/84f10999-6989-404c-9482-65221a712225/">Source</a>',
  },
  {
    year: '2020',
    degree: 'Angular The complete guide',
    institute: 'Udemy',
    details: '<a target="_blank" href="https://www.udemy.com/course/the-complete-guide-to-angular-2/">Source</a>',
  },
  {
    year: '2018',
    degree: 'BACHELOR DEGREE',
    institute: 'VIVES University College',
    details: 'Applied Computer Science - Software Developement',
  },
];

export default function Education() {
  return (
    <>
      <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">Education</h3>
      <ul>
        {educationContent.map((val, i) => (
          <li key={i}>
            <div className="icon">
              <FontAwesomeIcon icon={faBriefcase} className="fa" />
            </div>
            <span className="time open-sans-font text-uppercase">{val.year}</span>
            <h5 className="poppins-font text-uppercase">
              {val.degree}
              <span className="place open-sans-font">{val.institute}</span>
            </h5>
            <p className="open-sans-font">{parse(val.details)}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
