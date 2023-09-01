'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faDownload } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { heroContent } from '../../constants';
import downloadFile from './download-file';

export default function DownloadButton() {
  const [isDownloading, setIsDownloading] = useState(false);

  async function downloadResume(event: { preventDefault: () => void }) {
    event.preventDefault();

    try {
      setIsDownloading(true);

      const { fileName, data } = await downloadFile();

      const buffer = Buffer.from(data, 'base64');

      const blob = new Blob([buffer], { type: 'application/pdf' });

      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;

      link.onload = () => {
        link.remove();
        URL.revokeObjectURL(url);
      };

      document.body.append(link);
      link.click();
    } catch (error) {
      const errorMessage = `An error occurred while downloading the file.`;

      toast.error(errorMessage);
    } finally {
      setIsDownloading(false);
    }
  }

  return (
    <button className="button" onClick={downloadResume} disabled={isDownloading}>
      <span className="button-text">{heroContent.heroBtn}</span>
      {isDownloading ? (
        <>
          <span className="button-icon">
            <FontAwesomeIcon icon={faSpinner} spin />
            <span className="sr-only">Downloading...</span>
          </span>
        </>
      ) : (
        <>
          <span className="button-icon">
            <FontAwesomeIcon icon={faDownload} />
          </span>
        </>
      )}
    </button>
  );
}
