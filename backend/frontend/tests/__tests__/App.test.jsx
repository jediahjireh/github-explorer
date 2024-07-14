// tests/__tests__/App.test.jsx

// import react from react library to use JSX syntax and components
import React from "react";

// import function to render components in tests
import { render } from "@testing-library/react";

// import from react-router-dom for routing components
import { Link, MemoryRouter } from "react-router-dom";

// test case to verify Link component renders correctly
test("Link renders correctly.", () => {
  // render the component and store the result in tree
  const tree = render(
    <MemoryRouter>
      <Link to="https://github.com/jediahjireh">Jediah's GitHub Profile</Link>
    </MemoryRouter>
  );

  // assert the rendered output matches the stored snapshot
  expect(tree).toMatchSnapshot();
});
