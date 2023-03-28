import React from "react";
import { Provider } from "react-redux";
import { screen, render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";
import NewPoll from "../components/NewPoll";

const mockStore = configureStore([]);

describe("NewPoll", () => {
  let mockedStore;

  beforeEach(() => {
    mockedStore = mockStore({
      users: {
        franciscofrias: {
          id: "ruu",
          password: "123456",
          name: "Ruba almu",
          avatarURL:
            "/userAvatar/sarah.jpg",
          answers: {},
          questions: [],
        },
      },
      authedUser: "rubalmu",
    });
  });

  it("should render NewPoll component", () => {
    render(
      <Provider store={mockedStore}>
        <MemoryRouter>
          <NewPoll />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText("Create New Question")).toBeInTheDocument();
  });

  it("should have a disabled submit button until the form is filled out", () => {
    render(
      <Provider store={mockedStore}>
        <MemoryRouter>
          <NewPoll />
        </MemoryRouter>
      </Provider>
    );

    const optionOne = screen.getByTestId("optionOneText");
    const optionTwo = screen.getByTestId("optionTwoText");
    expect(screen.getByTestId("submit-button")).toBeDisabled();

    fireEvent.change(optionOne, { target: { value: "Option One" } });
    fireEvent.change(optionTwo, { target: { value: "Option Two" } });
    expect(screen.getByTestId("submit-button")).not.toBeDisabled();
  });
});
