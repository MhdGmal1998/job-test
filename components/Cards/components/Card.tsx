import * as React from 'react';
import Link from 'next/link';

// ----------
import {
    Card,
    CardContent,
    CardActions,
    Collapse,
    IconButton,
    Typography
} from '@mui/material'

import {
    Edit as EditIcon,
    Delete as DeleteIcon,
    ExpandMore as ExpandMoreIcon
} from '@mui/icons-material'
import { Fade } from 'react-reveal'

// --------
import { post } from '../../../types';
import ExpandMore from './ExpandMore';

interface propsType {
    post: post
}
export default (props: propsType) => {
    const [expanded, setExpanded] = React.useState(true);
    const { post } = props

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Fade bottom duration={1000}>
            <Card sx={{ width: '100%' }}>
                <Link href={`/post/${post.id}`}>
                    <CardContent sx={{
                        cursor: 'pointer'
                    }}>
                        <Typography variant="body2" color="text.secondary">
                            {post.title}
                        </Typography>
                    </CardContent>
                </Link>

                <CardActions disableSpacing>
                    <IconButton aria-label="delete-post">
                        <DeleteIcon color='error' />
                    </IconButton>
                    <IconButton aria-label="edit-post">
                        <EditIcon color='primary' />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Body:</Typography>
                        <Typography paragraph>
                            {post.body}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Fade>
    );
}
