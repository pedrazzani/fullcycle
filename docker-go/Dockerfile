FROM golang:1.16-alpine AS builder

WORKDIR /app

COPY ./main.go .

RUN go build main.go

FROM scratch
WORKDIR /root/
COPY --from=builder /app .

ENTRYPOINT [ "./main" ]
