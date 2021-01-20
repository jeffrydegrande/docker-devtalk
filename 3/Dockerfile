FROM golang:1.15-alpine AS base
WORKDIR /build
ADD . .

FROM base as tester
RUN go test 

FROM base as builder
RUN go build -o demo

FROM alpine
COPY --from=builder /build/demo /build/demo 
CMD ["/build/demo"]
