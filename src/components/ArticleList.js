import React from "react";
import blogData from "../data/blog";
import Article from "./Article";

function ArticleList(){
    console.log(blogData.posts);
    const list = blogData.posts.map((posts) => {
        return <Article
        key={posts.id}
        title={posts.title}
        date={posts.date}
        preview={posts.preview} 
        />
    });
    return <main>
        {list};
    </main>
}

export default ArticleList;