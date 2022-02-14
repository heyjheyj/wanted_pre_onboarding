import React from "react";
import Tab from "../Tab";
import TestRenderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Tab", () => {
  const component = TestRenderer.create(<Tab />);

  it("renders", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe("Tab Component", () => {
    let text;
    beforeEach(() => {
      render(<Tab />);
      text = screen.getByTestId("test-text");
    });

    it("changes the background color in tab1 and text in body when tab1 is clicked", () => {
      let tab1 = screen.getByTestId("test-tab1");

      userEvent.click(tab1);
      expect(tab1.style.background).toBe("rgb(67, 28, 198)");
      expect(tab1.style.color).toBe("white");
      expect(text.textContent).toBe("Tab Menu ONE");
    });

    it("changes the background color in tab2 and text in body when tab2 is clicked", () => {
      let tab2 = screen.getByTestId("test-tab2");

      userEvent.click(tab2);
      expect(tab2.style.background).toBe("rgb(67, 28, 198)");
      expect(tab2.style.color).toBe("white");
      expect(text.textContent).toBe("Tab Menu TWO");
    });

    it("changes the background color in tab3 and text in body when tab3 is clicked", () => {
      let tab3 = screen.getByText("Tab3");

      userEvent.click(tab3);
      expect(tab3.style.background).toBe("rgb(67, 28, 198)");
      expect(tab3.style.color).toBe("white");
      expect(text.textContent).toBe("Tab Menu THREE");
    });
  });
});
