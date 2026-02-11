
# Stage 1: Build
FROM golang:1.25.7-alpine AS builder
WORKDIR /app
COPY go.* ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o main ./cmd/server

# Stage 2: Run
FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /app
COPY --from=builder /app/main .
COPY --from=builder /app/web ./web
EXPOSE 8080
CMD ["./main"]