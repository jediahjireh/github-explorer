// tests/__tests__/DataFetcher.test.jsx

// import react from react library
import React from "react";

// import functions to render components in tests
import { render } from "@testing-library/react";

// import DataFetcher component from local file
import DataFetcher from "../test_data/DataFetcher.jsx";

// import jest-dom for extended testing functionality
import "@testing-library/jest-dom";

// import from jest-fetch-mock to simulate HTTP requests
import fetchMock from "jest-fetch-mock";

// mock fetch globally for all tests
fetchMock.enableMocks();

// asynchronous test case to verify DataFetcher component fetches data successfully
test("DataFetcher component fetches data successfully.", async () => {
  // mock the API response
  fetchMock.mockResponseOnce(
    JSON.stringify({
      login: "jediahjireh",
      url: "https://api.github.com/users/jediahjireh",
      name: "Jediah Jireh Naicker",
    })
  );

  // render component with matcher that caters for asynchronous data fetching
  const { findByText } = render(<DataFetcher username="jediahjireh" />);

  // wait for the component to display "Data Fetched Successfully"
  const successElement = await findByText(/Data Fetched Successfully/i);

  // verify that the specific text is in the document
  expect(successElement).toBeInTheDocument();
});
