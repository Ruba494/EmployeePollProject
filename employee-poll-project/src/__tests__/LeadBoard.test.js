import React from "react";
import renderer from "react-test-renderer";
import store from "../utils/test-util";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import LeadBoard from "../components/LeadBoard";

it("should render an empty message when no LeadBoard", () => {
    const elem = renderer
        .create(
            <Provider store={store}>
                <BrowserRouter>
                    <LeadBoard />
                </BrowserRouter>
            </Provider>
        )
        .toJSON();
    expect(elem).toMatchSnapshot();
});
