import axios from "axios";

export function handlerOnError(error: Error, info: { componentStack: string }) {
  console.log(error);
  console.log(info.componentStack);
}

export function nestedError(message: string, throwError: any): Error {
  let throwErrorMessage: string = "throw된 error가 처리되지 않았습니다.";

  if (typeof throwError === "string") {
    throwErrorMessage = throwError;
  } else if (axios.isAxiosError(throwError)) {
    switch (throwError.response?.status) {
      case 403:
        // TODO: 인증관련 에러의 경우 서버 측 response 데이터를 사용하기 위해서 그대로 throw
        throw throwError;
      default:
        throwErrorMessage = throwError.response?.data
          ? JSON.stringify(throwError.response?.data)
          : throwError.message;
        break;
    }
  } else if (throwError instanceof Error) {
    throwErrorMessage = throwError.message;
  }

  return new Error(`${message} (${throwErrorMessage})`);
}
