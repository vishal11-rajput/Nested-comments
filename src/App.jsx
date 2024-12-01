import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Comment from "./components/Comment";

const comments = {
  id: 1,
  items: [
    {
      id: 121242,
      name: "hello",
      items: [
        {
          id: 24345345,
          name: "hello world",
          items: [
            {
              id: 5436474,
              name: "hello world 1",
              items: [],
            },
          ],
        },
      ],
      // id: 56462,
      // name: "Java",
      // items: [
      //   {
      //     id: 4653573,
      //     name: "React",
      //     items: [],
      //   },
      // ],
    },
  ],
};
function App() {
  const [commentsData, setCommentsData] = useState(comments);

  return (
    <>
      <Comment comment={commentsData} />
    </>
  );
}

export default App;
