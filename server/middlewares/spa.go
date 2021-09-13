package middlewares

import (
	"strings"

	"github.com/gin-gonic/gin"
)

func SpaResponseHeaders() gin.HandlerFunc {
	return func(c *gin.Context) {
		// Server Side에서 사용되는 Context를 제외하고는 모두 SPA 경로라고 가정합니다. (CSR Router 방어 코딩)
		if !strings.HasPrefix(c.Request.RequestURI, "/api") {
			// [index.html 파일이 SPA의 진입점이기 때문에 해당 파일이 캐시되지 않도록 설정 (index.html이외 파일은 빌드마다 webpack을 이용하여 파일명이 해쉬 값으로 변경되므로 캐시를 신경쓰지 않아도 됩니다)](https://create-react-app.dev/docs/production-build/#static-file-caching)
			c.Header("Cache-Control", "no-cache, no-store, must-revalidate")
		}
		c.Next()
	}
}
