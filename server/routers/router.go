package routers

import (
	"github.com/gin-gonic/gin"
	"github.com/parkgang/modern-board/handlers"
)

func Use(api *gin.RouterGroup) {
	api.GET("/ping", handlers.Ping)
	users := api.Group("/users")
	{
		users.POST("", handlers.PostUser)
		users.GET("", handlers.GetAllUser)
		users.GET("/:id", handlers.GetUser)
		users.PUT("/:id", handlers.PutUser)
		users.DELETE("", handlers.DeleteAllUser)
		users.DELETE("/:id", handlers.DeleteUser)
	}
}
