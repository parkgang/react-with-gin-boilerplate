import { lazy, Suspense } from "react";
import { useRecoilValue } from "recoil";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider as FluentuiNorthstarProvider } from "@fluentui/react-northstar";

import {
  FluentuiNorthstarThemeState,
  FluentuiNorthstarThemeEffect,
} from "states/fluentui-northstar";
import AppLayout from "components/AppLayout";
import Header from "components/Header";
import ErrorFallback from "components/ErrorFallback";
import Spinner from "components/Loading";
import { handlerOnError } from "libs/error";

const About = lazy(() => import("pages/About"));
const Users = lazy(() => import("pages/Users"));
const Home = lazy(() => import("pages/Home"));
const NotFound = lazy(() => import("pages/NotFound"));

export const AboutPath = "/about";
export const UsersPath = "/users";
export const HomePath = "/";

export default function App() {
  const theme = useRecoilValue(FluentuiNorthstarThemeState);

  return (
    <>
      <FluentuiNorthstarThemeEffect />
      <main>
        <FluentuiNorthstarProvider theme={theme}>
          <AppLayout>
            <ErrorBoundary
              fallbackRender={({ error }) => <ErrorFallback error={error} />}
              onError={handlerOnError}
            >
              <Suspense fallback={<Spinner message="페이지 불러오는 중..." />}>
                <Router>
                  <Header />
                  <Switch>
                    <Route exact path={AboutPath} component={About} />
                    <Route exact path={UsersPath} component={Users} />
                    <Route exact path={HomePath} component={Home} />
                    <Route component={NotFound} />
                  </Switch>
                </Router>
              </Suspense>
            </ErrorBoundary>
          </AppLayout>
        </FluentuiNorthstarProvider>
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}
