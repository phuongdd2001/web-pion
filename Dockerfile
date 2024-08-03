# 1
FROM node:latest AS builder

WORKDIR /app

COPY . /app

COPY package.json /app/package.json

RUN yarn install

RUN yarn run build:prod

# 2
FROM node:lts-alpine3.18

WORKDIR /app

ENV NODE_ENV production
ENV SCRIPTS_DIR=/app/scripts
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

RUN apk update && apk add nodejs curl jq bash

RUN mkdir -p ${SCRIPTS_DIR}

COPY --from=builder /app/public                 ./public
COPY --from=builder /app/scripts/startup.sh     ./scripts
COPY --from=builder /app/dist/                  ./

EXPOSE ${PORT}

RUN chmod -R +x ${SCRIPTS_DIR}

ENTRYPOINT ["./scripts/startup.sh"]


