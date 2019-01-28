package main

import (
	"adanny.net/www/comment"
	"adanny.net/www/index"
	"adanny.net/www/news"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	index.Route(router)
	news.Route(router)
	comment.Route(router)

	router.Run(":8080")
}
