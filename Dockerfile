FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --production

# Rebuild the source code only when needed
FROM node:16-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 frontendgroup
RUN adduser --system --uid 1001 frontenduser

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=frontenduser:frontendgroup /app/.next/standalone ./
COPY --from=builder --chown=frontenduser:frontendgroup /app/.next/static ./.next/static

USER frontenduser

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]