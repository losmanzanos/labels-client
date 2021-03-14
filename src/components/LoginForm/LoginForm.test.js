import renderer from "react-test-renderer";

//Smoke Test

// make React available
import React from "react";

// make the ReactDOM available, necessary for rendering the component
import ReactDOM from "react-dom";

// make the App component available
import LoginForm from "./LoginForm";

// this is the test case
it("renders without crashing", () => {
  // first create a DOM element to render the component into
  const div = document.createElement("div");

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<LoginForm />, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});

//Snapshot

it("renders the UI as expected", () => {
  const tree = renderer.create(<LoginForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
