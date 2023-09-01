/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

import ReactDOM from 'react-dom';

export function PreloadResources() {
  // @ts-ignore
  ReactDOM.preconnect('https://fonts.gstatic.com');
  // @ts-ignore
  ReactDOM.preconnect('https://fonts.googleapis.com');
  // @ts-ignore
  ReactDOM.preconnect('https://fonts.gstatic.com', { crossOrigin: 'anonymous' });

  return null;
}

// Waiting for a fix -> https://github.com/vercel/next.js/issues/47399
