import Image from 'next/image';

import { heroContent } from '../../constants';
import DownloadButton from './download-button';
import SocialLinks from '@shared/social-links';

export default function Hero() {
  return (
    <>
      <div className="home react-tabs__tab-panel--selected h-100">
        <div className="d-sm-none position-relative">
          <div className="position-absolute w-100 mt-4 top-0 start-50 translate-middle-x">
            <div data-aos="fade-up" data-aos-duration="1200">
              <SocialLinks />
            </div>
          </div>
        </div>
        <div className="container-fluid main-container container-home p-0" data-aos="fade-up" data-aos-duration="1200">
          <div className="row home-details-container align-items-center">
            <Image
              src={heroContent.heroImage}
              className="col-lg-4 bg position-fixed d-none d-lg-block px-0"
              style={{
                objectFit: 'cover',
              }}
              width={746}
              height={1020}
              alt="hero man"
            />
            <div className="col-12 col-lg-8 offset-lg-4 home-details text-center text-lg-start">
              <div>
                <Image
                  src={heroContent.heroMobileImage}
                  className="img-fluid main-img-mobile d-sm-block d-lg-none"
                  width={300}
                  height={300}
                  alt="hero man"
                />
                <h1 className="text-uppercase poppins-font">
                  I&apos;m {heroContent.heroTitleName}
                  <span>{heroContent.heroDesignation}</span>
                </h1>
                <p className="open-sans-font">{heroContent.heroDescriptions}</p>
                <DownloadButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
