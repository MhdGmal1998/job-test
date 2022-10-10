import React from "react";
import type { NextPage } from "next";

import SEO from '../../components/SEO'

import { comment, post } from '../../types';
import Comments from "../../components/Comments";
import { Box } from "@mui/system";
import { Divider, Typography } from "@mui/material";
import { GLOBAL_LINK } from "../../constants/Porfolio";
import { Title } from "@mui/icons-material";
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
            paddingLeft: 'auto',
            paddingRight: 'auto'
        }}>
            <SEO title={post.title} description={post.body!} />
            <Typography>The Post</Typography>
            <Box component="div" sx={{ ...style }}>
                <Typography fontSize={24}>
                    {post?.title}
                </Typography>
                <p>{post?.body}</p>
                <Divider style={{ width: '100%', marginBottom: '10px' }} />

            </Box>
            <Typography sx={{ marginBottom: 3 }}>The Comments</Typography>
            <Comments comments={comments} />
        </div>
    )
}

export default Post




export async function getStaticPaths() {
    const data = await fetch(GLOBAL_LINK)
    const posts = await data.json()

    const paths = posts.map(post => {
        return {
            params: { id: `${post.id}` }
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

// --------*********--------//
export async function getStaticProps(context: any) {

    // fetch the data of the post 
    const postResponse = await fetch(`${GLOBAL_LINK}/${context.params.id}`)
    const post = await postResponse.json()

    // fetch the comments of the post 
    const commentResponse = await fetch(`${GLOBAL_LINK}/${context.params.id}/comments`)
    const comments = await commentResponse.json()
    return {
        props: {
            post,
            comments
        }
    }
}