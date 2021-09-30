import React from "react";
import renderer from "react-test-renderer";
import Calculator from "./calculator";

it("Calculator component is working", () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
