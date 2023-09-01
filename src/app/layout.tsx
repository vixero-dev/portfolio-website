import '../styles.scss';

import { ReactNode } from 'react';
import { Poppins, Open_Sans } from 'next/font/google';
import { Metadata } from 'next';

import Navigation from '@core/navigation/navigation';
import { PreloadResources } from '@core/preload-resources';
import ScrollTopBehaviour from '@shared/scroll-to-top';
import AnimatedOnScroll from '@shared/animated-on-scroll';
import Toast from '@shared/toast';

export const metadata: Metadata = {
  title: 'Vixero - Portfolio Website',
  description: 'Portfolio website',
  icons: {
    icon: 'facicon.ico',
  },
};

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['devanagari', 'latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-poppins',
});

const openSans = Open_Sans({
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['cyrillic-ext', 'cyrillic', 'greek-ext', 'greek', 'hebrew', 'vietnamese', 'latin-ext'],
  display: 'swap',
  variable: '--font-open-sans',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
        <body>
          <PreloadResources />
          <ScrollTopBehaviour />
          <Navigation />
          <div className="tab-panel_list">{children}</div>
          <AnimatedOnScroll />
          <Toast />
        </body>
      </html>
    </>
  );
}
