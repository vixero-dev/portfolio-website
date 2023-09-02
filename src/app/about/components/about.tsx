import Image from 'next/image';

import Achievements from './achievements';
import Education from './education';
import Experience from './experience';
import PersonalInfo from './personal-info';
import heroImgMobile from '@images/hero/hero-1-mobile.jpg';

export default function About() {
  return (
    <>
      <div className="about react-tabs__tab-panel--selected">
        <div data-aos="fade-up" data-aos-duration="1200">
          <div className="title-section text-left text-sm-center">
            <h1>
              ABOUT <span>ME</span>
            </h1>
            <span className="title-bg">Resume</span>
          </div>
          <section className="main-content ">
            <div className="container">
              <div className="row">
                {/* Personal Info Starts */}

                <div className="col-xl-6 col-lg-5 col-12">
                  <div className="row">
                    <div className="col-12">
                      <h3 className="text-uppercase text-center custom-title mb-0 ft-wt-600">personal infos</h3>
                    </div>
                    {/* End .col */}

                    <div className="col-12 d-block d-sm-none">
                      <Image
                        src={heroImgMobile}
                        placeholder="blur"
                        quality={100}
                        width={300}
                        height={300}
                        className="img-fluid main-img-mobile"
                        alt="about avatar"
                      />
                    </div>
                    {/* image for mobile menu */}

                    <div className="col-12">
                      <PersonalInfo />
                    </div>
                    {/* End personal info */}
                  </div>
                </div>
                {/*  Personal Info Ends */}

                {/*  Boxes Starts */}
                <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
                  <Achievements />
                </div>
                {/* Achievements Ends */}
              </div>
              {/* End .row */}

              <hr className="separator" />

              {/* Experience & Education Starts */}
              <div className="row">
                <div className="col-lg-6 m-15px-tb">
                  <div className="resume-box">
                    <Experience />
                  </div>
                </div>
                <div className="col-lg-6 m-15px-tb">
                  <div className="resume-box">
                    <Education />
                  </div>
                </div>
              </div>
              {/*  Experience & Education Ends */}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
