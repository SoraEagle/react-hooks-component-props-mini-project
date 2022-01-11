import React from "react";
import Article from "./Article";

function ArticleList({ posts }){
    const list = posts.map((posts) => {
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