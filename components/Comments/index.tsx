import React from 'react'
import { comment } from '../../types'
import Comment from './Comment'
interface propsType {
    comments: comment[]
}

export default (props: propsType): JSX.Element => {

    const { comments } = props


    const commentsAccordion = comments.map((comment) => <Comment comment={comment} />)
    return <>
        {commentsAccordion}
    </>
}