import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

export default function Address() {
  return (
    <>
      <address>
        <p className="open-sans-font custom-span-contact position-relative">
          <FontAwesomeIcon icon={faMap} className="position-absolute" />
          <span className="d-block">Location</span>Antwerp, Belgium
        </p>
        {/* End .custom-span-contact */}

        <p className="open-sans-font custom-span-contact position-relative">
          <FontAwesomeIcon icon={faEnvelopeOpen} className="position-absolute" />
          <span className="d-block">mail me</span>{' '}
          <a href={'mailto:' + process.env.NEXT_PUBLIC_TO_EMAIL_ADDRESS}>{process.env.NEXT_PUBLIC_TO_EMAIL_ADDRESS}</a>
        </p>
      </address>
      {/* End .custom-span-contact */}
    </>
  );
}
