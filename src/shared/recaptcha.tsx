'use client';

import { ReactNode } from 'react';
import { ReCaptchaProvider } from 'next-recaptcha-v3';

export function Recaptcha({ children }: { children: ReactNode }) {
  return <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>{children}</ReCaptchaProvider>;
}
