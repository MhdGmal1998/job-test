import React from "react";
import type { NextPage } from "next";

import SEO from '../../components/SEO'

import { comment, post } from '../../types';
import Comments from "../../components/Comments";
import { Box } from "@mui/system";
import { Divider, Typography } from "@mui/material";
interface propsType {
    comments: comment[],
    post: post
}

const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
}
const Post: NextPage<propsType> = (props) => {

    const { comments, post } = props
    return (
        <div style={{
            margin: 8
        }}>
            <SEO title={post.title} description={post.body!} />
            <h1 style={{ textAlign: 'center' }}>Post Comments</h1>
            <Box component="div" sx={{ ...style }}>
                <Typography fontSize={24}>
                    {post?.title}
                </Typography>
                <p>{post?.body}</p>
                <Divider style={{ width: '100%', marginBottom: '10px' }} />

            </Box>
            <Comments comments={comments} />
        </div>
    )
}

export default Post






// --------*********--------//
export async function getServerSideProps(context: any) {

    // fetch the data of the post 
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const post = await postResponse.json()

    // fetch the comments of the post 
    const commentResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}/comments`)
    const comments = await commentResponse.json()
    return {
        props: {
            post,
            comments
        }
    }
}