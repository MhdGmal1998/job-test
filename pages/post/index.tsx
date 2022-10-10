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
import { GLOBAL_LINK } from '../../constants/Porfolio';
import AddPost from "../../components/AppBar/Components/AddPost";
import { useState } from 'react';
import { InfinitySpin } from "react-loader-spinner";

interface propsType {
    posts: post[]
}

interface containerPropsType {
    children: React.ReactNode | React.ReactNode[]
}
const DivContainer = (props: containerPropsType) => {
    return (
        <div>
            {props.children}
        </div>
    )
}
const Posts: NextPage<propsType> = (props) => {
    const { posts } = props
    const router = useRouter();

    // get query 
    const { option } = router.query;


    if (option == "cards") {
        return <DivContainer>
            <SEO title="Posts Home Cards | " description="This Pages Lists The posts as Cards" />
            <Grid container spacing={2}>
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
    else {
        return (
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <InfinitySpin
                    width='200'
                    color="#4fa94d"
                />
            </div>

        )
    }
}
export default Posts



export async function getStaticProps() {
    const data = await fetch(GLOBAL_LINK)
    const posts = await data.json()
    if (!posts) {
        return {
            notFound: true,
        }
    }
    return {
        props:
            { posts: posts }
    }
}