import { ReactNode } from 'react';

import { Recaptcha } from '@shared/recaptcha';

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <Recaptcha>{children}</Recaptcha>;
}
