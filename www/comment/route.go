package comment

import "github.com/gin-gonic/gin"

func Route(router *gin.Engine) {
	comment := router.Group("/comment")
	{
		comment.GET("/", commentView)
	}
}

func commentView(c *gin.Context) {
	c.JSON(200, gin.H{
		"status": "success",
		"title":  "Comment Page",
	})
}
