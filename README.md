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
    ๐ฆ react-with-gin-boilerplate ๐ฆ
  </h1>
</p>
<div align="center">

`react boilerplate with gin`

gin server์ ํจ๊ป react๋ฅผ ํธ๋ฆฌํ๊ฒ ๊ฐ๋ฐํ  ์ ์๋ ์์์ ์ ์ ๊ณตํฉ๋๋ค.
๋ฐ๋๋ผ ์ํ์ gin์์ ์ ํ ๊ฐ๋ฐ์ ๋ ํธ๋ฆฌํ๋๋ก ๊ธฐ๋ฅ์ ํ์ฅํ์์ต๋๋ค.
์ด์ธ [Microsoft Teams](https://www.microsoft.com/ko-kr/microsoft-teams/group-chat-software) UI์ผ๋ก ๊ตฌ์ฑ๋ ๊ธฐ๋ณธ์ ์ธ ์์  ์ฝ๋๊ฐ ์์ฑ๋์ด ์์ต๋๋ค. ๋ ์์ธํ ๋ด์ฉ์ ๊ฐ ์ ํ์ [webapp (react)](./webapp), [server (gin)](./server) ๋ฅผ ์ฐธ๊ณ ํด์ฃผ์ธ์. ํต์ฌ์ผ๋ก ์ ๊ณตํ๋ ๊ธฐ๋ฅ์ ์๋์ ๊ฐ์ต๋๋ค.

&nbsp;ํ๊ฒฝ์ ๋ง๋ config๋ฅผ ์ฝ์ ์ ์๋๋ก ์ค์ 

&nbsp;SPA๋ฅผ ์ํ ์ค์  (CSR Router๋ ๋ฌธ์ ์์ด ๋์)

&nbsp;ORM ์ฌ์ฉ

&nbsp;swagger ํ์ฌ

&nbsp;`docker-compose` ์ผ๋ก ํธ๋ฆฌํ ๊ฐ๋ฐํ๊ฒฝ ๊ตฌ์ถ

&nbsp;`Dockerfile` ์ผ๋ก prod ๋ฐฐํฌ ๊ฐํธํ

&nbsp;recoil, react-query, react-error-boundary ๋ฑ react ๊ฐ๋ฐ์ ์ํด ๊ธฐ๋ณธ์ ์ผ๋ก ๋ค์ด๊ฐ๋ ๊ธฐ๋ณธ ์ค์  ๋ฐ ์์  ์ฝ๋ ์ ๊ณต

&nbsp;๋ฐ์ํ ์น ์ง์

&nbsp;server, client ๋ชจ๋ ๋๋ฒ๊น ํ๊ฒฝ ๋ง๋ จ

&nbsp;์ด์ธ, ์์ธํ ๋ด์ฉ์ [gin๊ณผ ํจ๊ปํ๋ react boilerplate๋ฅผ ๊ณต์ ํฉ๋๋ค](https://parkgang.github.io/essay/share-react-boilerplate-with-gin/) ์ ํ์ธํด์ฃผ์ธ์.

</div>

## Common tool

1. vscode
1. datagrip
1. docker

## Quick start

`vscode` ์์ ์คํ ๋ฐ ๋๋ฒ๊ทธ์์ `Server/Client` ์ผ๋ก ๋ฐ๋ก ์คํํ์ธ์!  
server, client side ๋ชจ๋ vscode ๋๋ฒ๊น ์ฌ์ฉ ์ **์๋**์ผ๋ก ์คํํ๊ณ  ์ค์งํ๋๋ก ๊ตฌ์ฑ๋์ด ์์ต๋๋ค! ๐

๋ฌผ๋ก , ํ์ํ ์์กด์ฑ๊ณผ docker, vscode extension์ ๋ฏธ๋ฆฌ ์ค์น๋์ด ์์ด์ผ ํฉ๋๋ค! ๊ฐ ์ ํ์ `README.md` ๋ฅผ ์ฐธ๊ณ ํ์ธ์.

> ์ฒซ ์ปจํ์ด๋๋ฅผ ํ๋ก๋น์ ๋ํ๋๋ฐ ์๊ฐ์ด ์์๋๋ฏ๋ก ์๋์ ๋ช๋ น์ด๋ก 1ํ ์ปจํ์ด๋ apply ์ดํ ์ฌ์ ๋ฅผ ์๊ฐ์ ๋๊ณ  ๋๋ฒ๊น์ ์คํ์์ผ์ฃผ์ธ์.
>
> ```shell
> docker-compose up -d
> ```

## Prod deployment

prod์ผ๋ก ์ฝ๊ฒ ๋ฐฐํฌํ  ์ ์๋๋ก `Dockerfile` ํ์ผ์ด ๋ชจ๋ ์์ฑ๋์ด ์์ผ๋ ๊ฐ๋ฐ ํ๋ก์ธ์ค์ ๋ง์ถฐ์ `CI/CD` pipeline์ผ๋ก ํ์ฐ๊ฑฐ๋ ํน์ ์๋์ cli๋ก ๋ฐฐํฌ์ ์ฌ๋ฏธ๋ฅผ ๋๊ปด๋ณด์ธ์!

```shell
docker build -t parkgang/react-with-gin-boilerplate:0.1.0 .
docker run --name react-with-gin-boilerplate-prod -p 22000:8080 -d parkgang/react-with-gin-boilerplate:0.1.0
```
