import Modal from "../Modal";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestRenderer from "react-test-renderer";

describe("Modal", () => {
  it("renders", () => {
    const component = TestRenderer.create(<Modal />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe("Click Event", () => {
    let showModal;
    let openbutton;
    let closebutton;
    let container;
    let modal;

    beforeEach(() => {
      render(<Modal />);
      showModal = jest.fn();
      openbutton = screen.getByTestId("test-openbutton");
      container = screen.getByTestId("test-container");
    });

    it("shows 'modal' when button is clicked", () => {
      userEvent.click(openbutton);

      let modal = screen.getByTestId("test-modal");
      expect(modal).toBeTruthy();
      expect(modal).toBeDefined();
    });

    it("closes 'modal' when 'x'button is clicked", () => {
      userEvent.click(openbutton);
      closebutton = screen.getByTestId("test-closebutton");
      userEvent.click(closebutton);

      const testModal = container.querySelector("div[data-testid=test-modal]");
      expect(testModal).toBeNull();
    });
  });
});
