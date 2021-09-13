package configs

import (
	"os"

	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"
)

const (
	development = "development"
	production  = "production"
)

func init() {
	viper.AutomaticEnv()
	// 절대 경로를 기준으로 작성해야 합니다.
	viper.AddConfigPath("./configs")

	switch os.Getenv("GO_ENV") {
	case "":
		panic("GO_ENV 값이 지정되지 않았습니다.")
	case development:
		viper.SetConfigName("config.dev")
		gin.SetMode(gin.DebugMode)
	case production:
		viper.SetConfigName("config.prod")
		gin.SetMode(gin.ReleaseMode)
	default:
		panic("알려지지 않은 GO_ENV 값 입니다.")
	}

	err := viper.ReadInConfig()
	if err != nil {
		panic("config 값 읽기에 실패하였습니다.\n\t" + err.Error())
	}
}
