export default function Achievements() {
  const achievementsContent = [
    { title: `${getYearsOfExperience()}+`, subTitle1: 'years of', subTitle2: 'experience' },
    { title: 'Angular', subTitle1: '9+', subTitle2: 'RxJS, NgRx' },
    { title: '.NET', subTitle1: '3.1+', subTitle2: 'DDD, EF Core' },
    { title: 'Azure', subTitle1: 'DevOps, Pipelines', subTitle2: 'WebApps, AD' },
  ];

  function getYearsOfExperience(): number {
    const currentDate = new Date(Date.now());
    const dateStarted = new Date(2019, 0, 1);
    const yearsOfExperience = currentDate.getFullYear() - dateStarted.getFullYear();

    return yearsOfExperience;
  }

  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
