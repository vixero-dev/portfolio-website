FROM node:20-alpine AS base

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# Install dependencies and build the source code
FROM base AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json pnpm-lock.yaml* ./
RUN \
  if [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Environment variables must be present at build time
# https://github.com/vercel/next.js/discussions/14030

# public
ARG NEXT_PUBLIC_TO_EMAIL_ADDRESS
ENV NEXT_PUBLIC_TO_EMAIL_ADDRESS=${NEXT_PUBLIC_TO_EMAIL_ADDRESS}
ARG NEXT_PUBLIC_RECAPTCHA_SITE_KEY
ENV NEXT_PUBLIC_RECAPTCHA_SITE_KEY=${NEXT_PUBLIC_RECAPTCHA_SITE_KEY}

# private
ARG TO_EMAIL_ADDRESS
ENV TO_EMAIL_ADDRESS=${TO_EMAIL_ADDRESS}
ARG SENDGRID_API_KEY
ENV SENDGRID_API_KEY=${SENDGRID_API_KEY}
ARG RECAPTCHA_SECRET_KEY
ENV RECAPTCHA_SECRET_KEY=${RECAPTCHA_SECRET_KEY}
ARG GOOGLE_DRIVE_RESUME_FILE_ID
ENV GOOGLE_DRIVE_RESUME_FILE_ID=${GOOGLE_DRIVE_RESUME_FILE_ID}

# Copy the source code and build the application
COPY . .
RUN pnpm build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

# Install PM2
RUN npm i -g pm2

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

# Environment variables must be redefined at run time
# public
ARG NEXT_PUBLIC_TO_EMAIL_ADDRESS
ENV NEXT_PUBLIC_TO_EMAIL_ADDRESS=${NEXT_PUBLIC_TO_EMAIL_ADDRESS}
ARG NEXT_PUBLIC_RECAPTCHA_SITE_KEY
ENV NEXT_PUBLIC_RECAPTCHA_SITE_KEY=${NEXT_PUBLIC_RECAPTCHA_SITE_KEY}

# private
ARG TO_EMAIL_ADDRESS
ENV TO_EMAIL_ADDRESS=${TO_EMAIL_ADDRESS}
ARG SENDGRID_API_KEY
ENV SENDGRID_API_KEY=${SENDGRID_API_KEY}
ARG RECAPTCHA_SECRET_KEY
ENV RECAPTCHA_SECRET_KEY=${RECAPTCHA_SECRET_KEY}
ARG GOOGLE_DRIVE_RESUME_FILE_ID
ENV GOOGLE_DRIVE_RESUME_FILE_ID=${GOOGLE_DRIVE_RESUME_FILE_ID}

# Start the application using PM2
CMD ["pm2-runtime", "server.js"]
