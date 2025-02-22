import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

// console.log(blogData);

function App(){
  return (
    <div className="App">
      <Header />
      <About />
      <ArticleList />
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

export default App;