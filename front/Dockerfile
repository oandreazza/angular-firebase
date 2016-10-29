FROM node:6

ENV HOME /usr/src/app

COPY . $HOME

WORKDIR $HOME

RUN npm install

RUN npm install -g angular-cli

CMD ng serve --host 0.0.0.0
