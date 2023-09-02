import Image from 'next/image';

import image404 from '@images/404.jpg';

export default function NotFound() {
  return (
    <>
      <div className="not-found">
        <div className="bg-image">
          <Image
            alt="background-image"
            src={image404}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="content hero">
          <div>
            <h1 data-aos="fade-up" data-aos-duration="1200">
              404!
            </h1>
            <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">
              The page you are looking for could not be found.
            </p>

            <a href="/" className="button" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
              BACK TO HOME
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
