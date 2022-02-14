import { render, screen } from "@testing-library/react";
import React from "react";
import TestRenderer from "react-test-renderer";
import AutoComplete from "../AutoComplete";
import userEvent from "@testing-library/user-event";

describe("Auto Complete", () => {
  let initData = [
    { label: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
    { label: "Forrest Gump", year: 1994 },
    { label: "Inception", year: 2010 },
    { label: "Interstellar", year: 2014 }
  ];
  let component;
  let container;
  let input;
  let suggestionlist;
  let suggestion;
  let clearbutton;

  it("renders", () => {
    const component = TestRenderer.create(<AutoComplete initData={initData} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe("Auto Completing", () => {
    beforeEach(() => {
      render(<AutoComplete initData={initData} />);
      input = screen.getByTestId("test-input");
      container = screen.getByTestId("test-container");
      component = screen.getByTestId("test-component");
    });

    it("shows suggestions when a user types part of search terms on input ", () => {
      userEvent.type(input, "s");

      suggestion = screen.getByTestId("test-suggestion0");
      expect(suggestion.textContent).toBe(
        "Star Wars: Episode V - The Empire Strikes Back"
      );
    });

    it("clears input value and suggestion when 'x'button is clicked", () => {
      userEvent.type(input, "f");

      suggestion = screen.getByTestId("test-suggestion0");
      expect(suggestion.textContent).toBe("Forrest Gump");

      // click button to clear
      clearbutton = screen.getByTestId("test-clearbutton");
      userEvent.click(clearbutton);

      expect(input.value).toBe("");
      expect(
        container.querySelector("button[data-testid=test-clearbutton]")
      ).toBeNull();
      expect(
        container.querySelector("ul[data-testid=test-suggestionlist]")
      ).toBeNull();
    });

    it("hides suggestions when outside of input is clicked", () => {
      userEvent.type(input, "i");
      expect(
        container.querySelector("ul[data-testid=test-suggestionlist]")
      ).toBeDefined();

      // click outside of input and suggestionlist
      container.blur();
      userEvent.click(component);

      expect(input.value).toBe("i");
      expect(
        container.querySelector("ul[data-testid=test-suggestionlist]")
      ).toBeNull();
    });

    it("sets a value in input when a user clicks one of suggestion list", () => {
      userEvent.type(input, "i");
      suggestion = screen.getByTestId("test-suggestion0");
      expect(suggestion.textContent).toBe("Inception");

      // choose a suggestion
      userEvent.click(suggestion);
      expect(input.value).toBe("Inception");
      expect(
        container.querySelector("ul[data-testid=test-suggestionlist]")
      ).toBeNull();
    });

    it("sorts suggestions when suggestions length is more than two", () => {
      userEvent.type(input, "i");
      suggestionlist = screen.getByTestId("test-suggestionlist");

      expect(suggestionlist.childNodes[0].textContent).toBe("Inception");
      expect(suggestionlist.childNodes[1].textContent).toBe("Interstellar");
    });
  });

  describe("dose not sort suggestions when they have same textcontent", () => {
    let props = [
      { label: "Interstellar", year: 2014 },
      { label: "interstellar", year: 2014 }
    ];

    beforeEach(() => {
      render(<AutoComplete initData={props} />);
      input = screen.getByTestId("test-input");
    });

    it("test not to sort", () => {
      userEvent.type(input, "inter");
      suggestionlist = screen.getByTestId("test-suggestionlist");

      expect(suggestionlist.childNodes[0].textContent).toBe("Interstellar");
      expect(suggestionlist.childNodes[1].textContent).toBe("interstellar");
    });
  });
});
