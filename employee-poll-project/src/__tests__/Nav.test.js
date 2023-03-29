import React from "react";
import renderer from "react-test-renderer";
import store from "../utils/test-util";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Nav from "../components/Nav";

it("should render an empty message when no Nav", () => {
  const elem = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>
    )
    .toJSON();
  expect(elem).toMatchSnapshot();
});
