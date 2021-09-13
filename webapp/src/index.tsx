import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { name, version } from "../package.json";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      retry: 1,
    },
  },
});

console.log(`${name}@${version}`);

ReactDOM.render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </RecoilRoot>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
