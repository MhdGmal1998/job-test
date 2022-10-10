import React from "react";
import { post } from "../../types";
import { Grid } from "@mui/material";
import { Card } from "./components";

interface propsType {
    posts: post[]
}
const Cards = (props: propsType) => {
    const { posts } = props

    const postCards = posts.map((post) => (
        <Grid item xs={12} md={6} lg={3} key={post.id}>
            <Card post={post} />
        </Grid>
    ))

    return postCards
}

export default Cards