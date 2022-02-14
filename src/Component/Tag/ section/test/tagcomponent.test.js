import React from "react";
import TestRenderer from "react-test-renderer";
import TagComponent from "../tagComponent";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Tag Component", () => {
  let deleteTag = jest.fn();
  let tag = { id: 1, text: "Hello" };
  let button;

  it("renders", () => {
    const component = TestRenderer.create(
      <TagComponent deleteTag={deleteTag} tag={tag} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe("Delete Tag", () => {
    beforeEach(() => {
      render(<TagComponent deleteTag={deleteTag} tag={tag} />);
    });

    it("calls deleteTag when button is clicked", () => {
      button = screen.getByTestId("test-deletebutton1");
      userEvent.click(button);

      expect(deleteTag).toHaveBeenCalledTimes(1);
      expect(deleteTag).toHaveBeenCalledWith(tag);
    });
  });
});
