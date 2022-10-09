import React, { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from './Components'
import { comment } from '../../types';
import { Typography } from "@mui/material";

interface propsType {
    comment: comment
}

export default (props: propsType) => {
    const { comment } = props
    
    const [expand, setExpaned] = useState(true)
    const handleExpand = () => setExpaned(prev => !prev)

    return (
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
    )
}