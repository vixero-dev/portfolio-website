'use client';

import '@fortawesome/fontawesome-svg-core/styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faUser, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import ActiveListItem from './active-list-item';

config.autoAddCss = false;

const navLinks = [
  { icon: <FontAwesomeIcon icon={faHouseChimney} className="fa" />, label: 'Home', path: '/' },
  { icon: <FontAwesomeIcon icon={faUser} className="fa" />, label: 'About', path: '/about' },
  { icon: <FontAwesomeIcon icon={faEnvelopeOpen} className="fa" />, label: 'Contact', path: '/contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const pathExists = navLinks.map((link) => link.path.toLocaleLowerCase()).some((path) => path.startsWith(pathname));
    setIsVisible(pathExists);
  }, [pathname]);

  return (
    <>
      <div className={`${isVisible ? 'header' : 'd-none'}`}>
        <ul className="icon-menu revealator-slideup revealator-once revealator-delay1" role="tablist">
          {navLinks.map((navLink, index) => (
            <ActiveListItem href={navLink.path} activeClassName={'react-tabs__tab--selected'} key={index}>
              <Link href={navLink.path}>
                {navLink.icon}
                <h2>{navLink.label}</h2>
              </Link>
            </ActiveListItem>
          ))}
        </ul>
      </div>
    </>
  );
}
