import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows two inputs and a button", () => {
  //Almost every test does these three things:
  // - render the component
  // - Manpulate the component or find an element in it
  // - Assertion - make sure the component is doing what we expect it to do

  // - render the component
  render(<UserForm />);

  // - Manpulate the component or find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // - Assertion - make sure the component is doing what we expect it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it calls onUserAdd when the form is submitted", () => {
  //   //NOT THE BEST IMPLEMENTATION
  //   const argList = [];
  //   const callback = (...args) => {
  //     argList.push(args);
  //   };

  const mock = jest.fn();
  //render the component
  render(<UserForm onUserAdd={mock} />);

  //   const [nameInput, emailInput] = screen.getAllByRole("textbox"); //bad_implementaion
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  //simulate tying a name
  user.click(nameInput);
  user.keyboard("jane");

  //simulate typing an email
  user.click(emailInput);
  user.keyboard("jane@jane.com");

  //find the button
  const button = screen.getByRole("button");

  //simulate clicking the button
  user.click(button);

  //Assertion to make sure onUserAdd gets called with email/name
  //   expect(argList).toHaveLength(1); //bad_implementaion
  //   expect(argList[0][0]).toEqual({ name: "jane", email: "jane@jane.com" }); //bad_implementaion

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: "jane", email: "jane@jane.com" });
});
