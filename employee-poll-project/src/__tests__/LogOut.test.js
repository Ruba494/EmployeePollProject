import React from "react";
import { Provider } from "react-redux";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";
import LogOut from "../components/LogOut";

const mockStore = configureStore([]);

describe("LogOut", () => {
  let mockedStore;

  beforeEach(() => {
    mockedStore = mockStore({
      users: {
        rubalmu: {
          id: "rubalmu",
          password: "123456",
          name: "Ruba Almu",
          avatarURL: "/userAvatar/sarah.jpg",
          answers: {},
          questions: [],
        },
      },
      authedUser: "rubalmu",
    });
  });

  it("Should render Log out", () => {
    render(
      <Provider store={mockedStore}>
        <MemoryRouter>
          <LogOut />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("Ruba Almu")).toBeInTheDocument();
  });
});
