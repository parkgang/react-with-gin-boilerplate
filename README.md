<p align="center">
  <table align="center">
    <tbody>
      <tr>
        <td>
          <img src="https://user-images.githubusercontent.com/63892989/132948190-0e2e9cb6-bafc-4e9f-9bce-c0248397f095.png" alt="screenshot" width="500" />
        </td>
        <td>
          <img src="https://user-images.githubusercontent.com/63892989/132948191-154b0c14-0648-4817-9ca6-32702d03c75f.png" alt="screenshot" width="500" />
        </td>
      </tr>
    </tbody>
  </table>
  <h1 align="center">
    📦 react-with-gin-boilerplate 📦
  </h1>
</p>
<div align="center">

`react boilerplate with gin`

gin server와 함께 react를 편리하게 개발할 수 있는 시작점을 제공합니다.
바닐라 상태의 gin에서 제품 개발에 더 편리하도록 기능을 확장하였습니다.
이외 [Microsoft Teams](https://www.microsoft.com/ko-kr/microsoft-teams/group-chat-software) UI으로 구성된 기본적인 에제 코드가 작성되어 있습니다. 더 자세한 내용은 각 제품의 [webapp (react)](./webapp), [server (gin)](./server) 를 참고해주세요. 핵심으로 제공하는 기능은 아래와 같습니다.

&nbsp;환경에 맞는 config를 읽을 수 있도록 설정

&nbsp;SPA를 위한 설정 (CSR Router도 문제없이 동작)

&nbsp;ORM 사용

&nbsp;swagger 탑재

&nbsp;`docker-compose` 으로 편리한 개발환경 구축

&nbsp;`Dockerfile` 으로 prod 배포 간편화

&nbsp;recoil, react-query, react-error-boundary 등 react 개발을 위해 기본적으로 들어가는 기본 설정 및 예제 코드 제공

&nbsp;반응형 웹 지원

&nbsp;server, client 모두 디버깅 환경 마련

&nbsp;이외, 자세한 내용은 [gin과 함께하는 react boilerplate를 공유합니다](https://parkgang.github.io/golang/share-react-boilerplate-with-gin) 을 확인해주세요.

</div>

## Common tool

1. vscode
1. datagrip
1. docker

## Quick start

`vscode` 에서 실행 및 디버그에서 `Server/Client` 으로 바로 실행하세요!  
server, client side 모두 vscode 디버깅 사용 시 **자동**으로 실행하고 중지하도록 구성되어 있습니다! 😎

물론, 필요한 의존성과 docker, vscode extension은 미리 설치되어 있어야 합니다! 각 제품의 `README.md` 를 참고하세요.

> 첫 컨테이너를 프로비저닝하는데 시간이 소요되므로 아래의 명령어로 1회 컨테이너 apply 이후 여유를 시간을 두고 디버깅을 실행시켜주세요.
>
> ```shell
> docker-compose up -d
> ```

## Prod deployment

prod으로 쉽게 배포할 수 있도록 `Dockerfile` 파일이 모두 작성되어 있으니 개발 프로세스에 맞춰서 `CI/CD` pipeline으로 태우거나 혹은 아래의 cli로 배포의 재미를 느껴보세요!

```shell
docker build -t parkgang/react-with-gin-boilerplate:0.1.0 .
docker run --name react-with-gin-boilerplate-prod -p 22000:8080 -d parkgang/react-with-gin-boilerplate:0.1.0
```
