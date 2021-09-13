## Core Stack

1. node:v14.16.1
1. npm:6.14.14
1. create-react-app
1. react-router-dom
1. react-query
1. react-error-boundary
1. recoil
1. axios
1. @fluentui/react-northstar
1. @fluentui/react-teams

## 디버깅 환경

1. 편리한 디버깅 환경을 위해 `pm2` 로 webpack dev server process를 관리합니다.
1. 작성된 vscode 디버깅 환경을 그대로 사용하시려면 아래의 명령어로 `pm2` 를 추가 설치해 주세요.

```shell
npm i -g pm2
```

## 이외

### template

> CRA

```shell
npx create-react-app webapp --template typescript
```

### Custom

1. [절대경로 설정](https://okky.tistory.com/340)
