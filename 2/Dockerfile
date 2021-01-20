FROM alpine

RUN apk add nodejs npm

ADD package.json package-lock.json ./ 

RUN npm i

ADD . . 

CMD ["npm", "start"]
