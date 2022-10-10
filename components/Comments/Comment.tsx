import React, { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from './Components'
import { comment } from '../../types';
import { Typography } from "@mui/material";
import { Fade } from 'react-reveal'
interface propsType {
    comment: comment
}

const Comments = (props: propsType) => {
    const { comment } = props

    const [expand, setExpaned] = useState(true)
    const handleExpand = () => setExpaned(prev => !prev)

    return (
        <Fade bottom duration={1000}>
            <Accordion expanded={expand} onChange={handleExpand} key={comment.id}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>{`# ${comment.id}   ${comment.name}`}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {comment.body}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Fade>
    )
}
export default Comments