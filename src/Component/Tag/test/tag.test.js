import { render, screen } from "@testing-library/react";
import React from "react";
import TestRenderer from "react-test-renderer";
import Tag from "../Tag";
import userEvent from "@testing-library/user-event";

describe("Tag", () => {
  it("renders", () => {
    let initTags = [
      { id: 1, text: "CodeStates" },
      { id: 2, text: "jjang" }
    ];
    const component = TestRenderer.create(<Tag initTags={initTags} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe("Create a Tag", () => {
    let initTags = [
      { id: 1, text: "CodeStates" },
      { id: 2, text: "jjang" }
    ];
    let taglist;
    let input;
    let deletebutton1;
    let deletebutton2;

    beforeEach(() => {
      render(<Tag initTags={initTags} />);
      taglist = screen.getByTestId("test-taglist");
      input = screen.getByTestId("test-input");
      deletebutton1 = screen.getByTestId("test-deletebutton1");
      deletebutton2 = screen.getByTestId("test-deletebutton2");
    });

    it("creates a tag when user types something on input", () => {
      const newTag = "Good to see you";
      userEvent.type(input, newTag);
      userEvent.type(input, "{enter}");
      const createdTag = taglist.children[2];

      expect(taglist.children.length).toBe(3);
      expect(createdTag.childNodes[0].textContent).toBe("Good to see you");
    });

    it("deletes a tag when user clicks 'x' button in tag", () => {
      userEvent.click(deletebutton1);
      userEvent.click(deletebutton2);

      expect(taglist.children.length).toBe(0);
    });
  });
});
