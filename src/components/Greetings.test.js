import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Greeting from "./Greetings";

describe("Greeting component", () => {
  test("renders Hello World as a text ", () => {
    render(<Greeting />);

    const helloWorldElement = screen.getByText("Hello world!", {
      exact: false,
    });

    expect(helloWorldElement).toBeInTheDocument();
  });
  test("renders Pathan if the button was NOT clicked", () => {
    render(<Greeting />);

    const outputElement = screen.getByText("Hello world!", { exact: false });

    expect(outputElement).toBeInTheDocument();
  });

  test("renders Pathan if the button was clicked", () => {
    render(<Greeting />);

    const outputElement = screen.getByText("Hello world!", { exact: false });

    expect(outputElement).toBeInTheDocument();
  });
});
