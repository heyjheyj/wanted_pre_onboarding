import React from "react";
import TestRenderer from "react-test-renderer";
import Toggle from "../Toggle";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Toggle", () => {
  it("renders", () => {
    const component = TestRenderer.create(<Toggle />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe("Toggle Switch", () => {
    let togglebox;
    let text;

    beforeEach(() => {
      render(<Toggle />);

      togglebox = screen.getByTestId("test-togglecheckbox");
      text = screen.getByTestId("test-text");
    });

    it("turns on Switch and changes text when toggle is clicked", () => {
      userEvent.click(togglebox);

      expect(togglebox.checked).toBe(true);
      expect(text.textContent).toBe("Toggle Switch ON");
    });

    it("turn off Switch and changes text when toggle is clicked", () => {
      userEvent.click(togglebox);
      userEvent.click(togglebox);

      expect(togglebox.checked).toBe(false);
      expect(text.textContent).toBe("Toggle Switch OFF");
    });
  });
});
