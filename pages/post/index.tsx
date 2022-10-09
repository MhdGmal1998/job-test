import React from "react";
import type { NextPage } from "next";
import type { post } from "../../types";
import DataTable from './../../components/DataTable'
import Cards from "../../components/Cards";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import Error from "next/error";
import SEO from "../../components/SEO";
import Container from '@mui/material/Container';

interface propsType {
    posts: post[]
}

interface containerPropsType {
    children: React.ReactNode | React.ReactNode[]
}
const DivContainer = (props: containerPropsType) => {
    return (
        <Container fixed>
            <h1 style={{ textAlign: 'center' }}>Posts</h1>
            {props.children}
        </Container>
    )
}
const Post: NextPage<propsType> = (props) => {
    const { posts } = props

    const router = useRouter();


    const { option } = router.query;


    if (option == "cards") {
        return <DivContainer>
            <SEO title="Posts Home Cards | " description="This Pages Lists The posts as Cards" />
            <Grid container spacing={2}>
                {/* <Cards posts={posts} /> */}
                {Cards({ posts })}
            </Grid>
        </DivContainer>


    }
    else if (option == "datatable") {
        return <DivContainer>
            <SEO title="Posts Home DataTable | " description="This Pages Lists The posts as DataTabe" />
            <DataTable posts={posts} />
        </DivContainer>
    }

    else
        return <DivContainer>
            <SEO title="404 Error | " description="This Page is not Found" />
            <Error statusCode={404} />
        </DivContainer>

}
export default Post

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }
    return {
        props:
            { posts: data }
    }
}