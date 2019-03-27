FROM cypress/base:10

RUN mkdir /srv/app
WORKDIR /srv/app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN yarn --frozen-lockfile
COPY . .
