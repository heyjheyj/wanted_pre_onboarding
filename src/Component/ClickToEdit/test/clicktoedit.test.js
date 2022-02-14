import React from "react";
import ClickToEdit from "../ClickToEdit";
import TestRenderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

describe("ClickToEdit", () => {
  let initEdit = { name: "김코딩", age: "20" };

  it("renders", () => {
    const component = TestRenderer.create(<ClickToEdit initEdit={initEdit} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe("Edit text by Typing on input", () => {
    let nameinput;
    let ageinput;

    beforeEach(() => {
      render(<ClickToEdit initEdit={initEdit} />);
      nameinput = screen.getByTestId("test-nameinput");
      ageinput = screen.getByTestId("test-ageinput");
    });

    it("focus on nameinput when is clicked and changes color of border from 'default' to 'focused color'", () => {
      nameinput.focus();

      expect(document.activeElement).toBe(nameinput);
      expect(nameinput.className).toBe("nameinput");
    });

    it("blur of nameinput when outside of inputbox is clicked and changes color of border from 'focused color' to 'default'", () => {
      nameinput.blur();

      expect(nameinput.value).toBe("김코딩");
      expect(nameinput.className).toBe("input");
    });

    it("focus on ageinput when is clicked and changes color of border from 'default' to 'focused color' ", () => {
      ageinput.focus();

      expect(document.activeElement).toBe(ageinput);
      expect(ageinput.className).toBe("ageinput");
    });

    it("blur of ageinput when outside of inputbox is clicked and change color of border from 'focused color' to 'default'", () => {
      ageinput.blur();

      expect(ageinput.value).toBe("20");
      expect(ageinput.className).toBe("input");
    });

    it("changes a nameinput value when blur event fires", () => {
      userEvent.clear(nameinput);
      userEvent.type(nameinput, "최해커");
      nameinput.blur();

      expect(nameinput.value).toBe("최해커");
    });

    it("changes a ageinput value when blur event fires", () => {
      userEvent.clear(ageinput);
      userEvent.type(ageinput, "30");
      ageinput.blur();

      expect(ageinput.value).toBe("30");
    });
  });
});
