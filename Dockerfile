FROM alpine:latest
RUN apk add --no-cache bash
COPY server /server
CMD ["/server"]
