package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// @Summary Server Health Check
// @Description gin server의 헬스를 체크합니다.
// @Produce json
// @Success 200 {object} models.Pong
// @Router /ping [get]
func Ping(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "pong",
	})
}
