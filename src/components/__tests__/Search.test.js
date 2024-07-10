import "@testing-library/jest-dom";
import { waitFor, render, fireEvent } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("Restaurants should load on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => {
    const resList = body.getByTestId("res-list");
    expect(resList.children.length).toBe(20);
  });
});

test("Search for(pizza) on homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => {
    const input = body.getByTestId("search-input");
    fireEvent.change(input, { target: { value: "pizza" } });
    const searchBtn = body.getByTestId("search-btn");
    fireEvent.click(searchBtn);
    const resList = body.getByTestId("res-list");
    expect(resList.children.length).toBe(3);
  });
});
