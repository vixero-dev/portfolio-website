import Address from './components/address';
import Contact from './components/contact';
import SocialLinks from '@shared/social-links';

export default function Page() {
  return (
    <>
      <div className="contact react-tabs__tab-panel--selected">
        <div className="title-section text-left text-sm-center" data-aos="fade-up" data-aos-duration="1200">
          <h1>
            get in <span>touch</span>
          </h1>
          <span className="title-bg">contact</span>
        </div>
        <div className="container" data-aos="fade-up" data-aos-duration="1200">
          <div className="row">
            {/*  Left Side Starts */}
            <div className="col-12 col-lg-4">
              <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">Don&apos;t be shy !</h3>
              <p className="open-sans-font mb-4">
                Looking for a partner who can bring fresh ideas to your projects? I&apos;m the developer you need!
                I&apos;m always excited to hear about new projects and explore how I can contribute to your success.
                Don&apos;t hesitate to reach out to me and let&apos;s collaborate to make your visions a reality.
                Contact me today and let&apos;s get started!
              </p>
              <div className="d-none d-sm-block">
                <Address />
              </div>
              {/* End Address */}

              <div className="mb-5 bt-4">
                <SocialLinks />
              </div>
              {/* End Social */}
            </div>
            {/* Left Side Ends */}

            {/*  Contact Form Starts  */}
            <div className="col-12 col-lg-8">
              <Contact />
            </div>
            {/*  Contact Form Ends */}
          </div>
        </div>
      </div>
    </>
  );
}
