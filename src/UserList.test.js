import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

test("render one row per user", () => {
  //render the component
  const users = [
    {
      name: "jane",
      email: "jane@jane.com",
    },
    { name: "sam", email: "sam@sam.com" },
  ];
  render(<UserList users={users} />);
  //   const { container } = render(<UserList users={users} />);//Alternative1
  //Find all the rows in the table

  // eslint-disable-next-line
  //   const rows = container.querySelectorAll("tbody tr"); //Alternative2

  //   screen.logTestingPlaygroundURL(); //to generate TestingPlayground URL

  //Need to add "data-testid='users'" attribute in UserList tbody
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  //Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});
test("render the email and name of each user", () => {});
