import React from "react";
import Head from "next/head";


interface propsType {
    title: string,
    description: string
}
function SEO(props: propsType) {
    return (
        <Head>
            <title>{props?.title}</title>
            <meta name="title" content={props?.title} />
            <meta name="description" content={props?.description} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={"www.mywebsite.com"} />
            <meta property="og:title" content={props?.title} />
            <meta property="og:description" content={props?.description} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={"www.mywebsite.com"} />
            <meta property="twitter:title" content={props?.title} />
            <meta property="twitter:description" content={props?.description} />

        </Head>
    )
}


export default SEO