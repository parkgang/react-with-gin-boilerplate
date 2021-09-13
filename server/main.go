package main

import (
	"fmt"
	"log"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	_ "github.com/parkgang/modern-board/configs"
	"github.com/parkgang/modern-board/docs"
	"github.com/parkgang/modern-board/middlewares"
	_ "github.com/parkgang/modern-board/mysql"
	apiRouter "github.com/parkgang/modern-board/routers"
	"github.com/spf13/viper"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

const (
	version string = "0.1.0"
)

func main() {
	port := viper.GetString("server.port")

	router := gin.Default()

	// CORS
	router.Use(cors.Default())

	// API
	api := router.Group("/api")
	{
		apiRouter.Use(api)
	}

	// SPA
	{
		const spaPath string = "../webapp/build"
		// 정적파일 응답에 헤더 추가 ("/" 경로에 헤더를 추가하기 위해서는 정적파일 서빙 미들웨어보다 위에 선언되어야 합니다)
		router.Use(middlewares.SpaResponseHeaders())
		// 정적파일 서빙
		router.Use(static.Serve("/", static.LocalFile(spaPath, true)))
		// [CSR Router를 위함](https://github.com/gin-gonic/contrib/issues/90#issuecomment-286924994)
		router.NoRoute(func(c *gin.Context) {
			// CRA에서 "homepage": "./" 와 같이 경로를 지정하면 index.html 파일 경로까지 지정해야합니다.
			c.File(spaPath)
		})
	}

	// Swagger
	{
		docs.SwaggerInfo.Title = "Modern Board API"
		docs.SwaggerInfo.Description = "게시판 데이터를 관리할 수 있는 API를 제공합니다."
		docs.SwaggerInfo.Version = version
		docs.SwaggerInfo.Host = fmt.Sprintf("localhost%s", port)
		docs.SwaggerInfo.BasePath = "/api"
		docs.SwaggerInfo.Schemes = []string{"http", "https"}

		url := ginSwagger.URL(fmt.Sprintf("http://localhost%s/swagger/doc.json", port))
		router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler, url))
	}

	log.Printf("gin server listening at http://localhost%s\n", port)
	router.Run(port)
	log.Println("gin server close", port)
}
