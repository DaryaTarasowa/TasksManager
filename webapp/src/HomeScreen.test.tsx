import React, { PropsWithChildren } from "react";
import { screen } from "@testing-library/react";
import { render } from "@testing-library/react";
import HomeScreen from "../src/components/screens/home/HomeScreen";
import { Provider } from "react-redux";

import AppReduxStore from "../src/redux-store/AppReduxStore";
import { QueryClient, QueryClientProvider } from "react-query";

export function renderWithProviders(ui: React.ReactElement) {
  const queryClient = new QueryClient();
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <QueryClientProvider client={queryClient}>
        <Provider store={AppReduxStore}>{children}</Provider>
      </QueryClientProvider>
    );
  }
  return { ...render(ui, { wrapper: Wrapper }) };
}

test("renders loading state", () => {
  renderWithProviders(<HomeScreen />);
  expect(screen.getByText("Loading...")).toBeInTheDocument();
});
