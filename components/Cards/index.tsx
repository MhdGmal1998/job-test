import React from "react";
import { post } from "../../types";
import Cards from "./Cards";


interface propsType {
    posts: post[]
}

export default (props: propsType) => {
    const { posts } = props
    const postCards = Cards({posts})
    
    // <Cards posts={posts} />

    return postCards
}