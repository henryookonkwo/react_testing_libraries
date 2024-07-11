[{"content":"## Welcome to RTLBook\n\nThis is an interactive coding environment where you can explore the following libraries:\n\n| Name      | Docs |\n| ----------- | ----------- |\n| React      | [docs](https://reactjs.org/)       |\n| @testing-library/react   |  [docs](https://testing-library.com/docs/react-testing-library/intro/)        |\n| @testing-library/user-event |   [docs](https://testing-library.com/docs/user-event/intro)  |\n| @testing-library/react-hooks |  [docs](https://github.com/testing-library/react-hooks-testing-library)  |\n| @testing-library/jest-dom | [docs](https://github.com/testing-library/jest-dom#custom-matchers) |\n| expect |  [docs](https://jestjs.io/docs/expect)  |\n\nIn between each 'cell' there are buttons that can add in a new code editor or a text section.","type":"text","id":"12frm"},{"content":"import {render, screen} from '@testing-library/react';\n\nconst RoleExample = ()=>{\n  return (\n    <div>\n    <a href=\"/\">Link</a>     \n    <button>Button</button>\n    <footer>Contentinfo</footer>\n    <h1>Heading</h1>\n    <header>Banner</header>\n    <img alt=\"description\" /> Img\n    <input type=\"checkbox\" /> Checkbox\n    <input type=\"number\" /> Spinbutton\n    <input type=\"radio\" /> Radio\n    <input type=\"text\" /> Textbox\n    <li>Listitem</li>\n    <ul>List</ul>\n    </div>\n    )\n};\n\nrender(<RoleExample />)\n","type":"code","id":"gevb4"},{"content":"test('checks if Role exists', ()=>{\n  render(<RoleExample />)\n  const roles = [\n    'link','button','contentinfo','heading','banner','img','checkbox','radio','textbox','listitem','list'\n  ];\n\n  for(let role of roles){\n    const el = screen.getByRole(role);\n    expect(el).toBeInTheDocument()\n  }\n  \n})","type":"code","id":"tdaig"}]