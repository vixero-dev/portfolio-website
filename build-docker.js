const { spawnSync } = require('child_process');
const dotenv = require('dotenv');

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

// Define your docker build command as a single string
const buildCommand = `docker build \
                        --build-arg NEXT_PUBLIC_RECAPTCHA_SITE_KEY=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} \
                        --build-arg NEXT_PUBLIC_TO_EMAIL_ADDRESS=${process.env.NEXT_PUBLIC_TO_EMAIL_ADDRESS} \
                        -t nextjs-image .`;

// Run the docker build command
const result = spawnSync(buildCommand, { shell: true, stdio: 'inherit' });

if (result.error) {
  console.error(result.error);
  process.exit(1);
}

process.exit(result.status);
