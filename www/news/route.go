package news

import "github.com/gin-gonic/gin"

func Route(router *gin.Engine) {
	news := router.Group("/news")
	{
		news.GET("/", newsView)
	}
}

func newsView(c *gin.Context) {
	c.JSON(200, gin.H{
		"status": "success",
		"title":  "News Page",
	})
}
