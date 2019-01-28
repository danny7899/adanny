FROM golang:alpine

ADD . /go/src/github.com/danny7899/go-react/backend

# RUN apk add --no-cache git mercurial

# RUN go get github.com/gin-gonic/gin
RUN go install github.com/danny7899/go-react/backend

# ENTRYPOINT /go/bin/go-react
CMD /go/bin/backend

EXPOSE 80