import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import Results from "../src/components/results/index";
import Form from "../src/components/form/index";

it("test form and result component", async () => {
  let handler = jest.fn();
  render(<Form handler={handler} />);
  const go = screen.getAllByTestId("go");
  fireEvent.click(go);
  render(<Results handler={handler} />);
  const data = screen.getAllByTestId("data");
  expect(data).toBeInTheDocument();
  await waitFor(() => expect(handler).toHaveBeenCalled());
});
