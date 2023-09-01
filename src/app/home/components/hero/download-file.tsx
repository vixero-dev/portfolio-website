'use server';

export default async function downloadFile() {
  const fileName = 'Victor Tihomirov - Resume.pdf';
  const fileId = process.env.GOOGLE_DRIVE_RESUME_FILE_ID;
  const fileUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  try {
    const response = await fetch(fileUrl);

    const arrayBuffer = await response.arrayBuffer();

    const base64String = Buffer.from(arrayBuffer).toString('base64');

    return { fileName, data: base64String };
  } catch (error) {
    throw new Error(`Error downloading file`);
  }
}
