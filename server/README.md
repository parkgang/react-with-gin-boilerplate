## Core Stack

1. go1.16.3 darwin/amd64
1. gin
1. gorm (mysql)
1. viper
1. swag

## swagger 확인 및 업데이트 방법

swagger가 탑재되어 있음으로 [http://localhost:8080/swagger/index.html](http://localhost:8080/swagger/index.html) 에서 swagger 문서를 확인하실 수 있습니다.  
이외, swagger 업데이트 명령어가 vscode `tasks.json` 에 정의되어 있음으로 편하게 task로 실행하세요! 😎

> 직접 명령어로 수행 하시려면 아래의 명령어를 사용하세요.
>
> ```shell
> export PATH=$(go env GOPATH)/bin:$PATH
> swag i
> ```

## live reloading로 실행 방법

javascript, python, ruby와 같은 인터프리터 언어로 작업하는 데 익숙한 사람들은 특히 golang에서 live reloading을 갈망합니다.  
이를 위해 `tasks.json` 에 live reloading를 위한 명령어를 정의해 놓았습니다. 해당 기능을 사용하기 위해서 아래의 패키지를 다운받아주세요.

```shell
go get github.com/codegangsta/gin
```

> live reloading로 속도감 있게 개발하는 것은 좋지만 아쉬운 점은 breakpoint을 사용하기 위해서는 필요할 때마다 process를 attach 해줘야합니다.  
> 이유는 reloading 마다 빌드되어 실행되는 파일이 달라서 process를 계속 추적할 수 없습니다. (아직 debug tool에서 지원되지 않는 것으로 확인됨)  
> 만약, live reloading에서 breakpoint가 필요하면 `launch.json` 에 정의된 `Attach to Gin` 를 실행하세요! (이럴 줄 알고 미리 정의해 놓았습니다)  
> reloading시 연결이 끈어지지만 빠른 개발을 위해 live reloading 진행하다가 필요할 떄 debug를 해나가는 전략이 더 유리할 것으로 기대합니다.

## 환경 변수

| Variable | dev | qa/prod | Default | Example                 | Usage                                                                  |
| -------- | :-: | :-----: | :-----: | ----------------------- | ---------------------------------------------------------------------- |
| GO_ENV   | ✅  |   ✅    |   🤷‍♂️    | development, production | `Go 실행 환경` 을 설정하는 값이며 프로그램 시작 전 값이 있어야 합니다. |

## 이외

### template

> mod

```shell
go mod init github.com/parkgang/react-with-gin-boilerplate
```
