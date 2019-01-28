package index

import "github.com/gin-gonic/gin"

func Route(router *gin.Engine) {
	index := router.Group("/")
	{
		index.GET("/", indexView)
	}
}

func indexView(c *gin.Context) {
	c.JSON(200, gin.H{
		"status": "success",
		"title":  "Index Page",
	})
}
