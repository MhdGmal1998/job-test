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
import Swal from "sweetalert2"

import {
    Edit as EditIcon,
    Delete as DeleteIcon,
    ExpandMore as ExpandMoreIcon
} from '@mui/icons-material'
import { Fade } from 'react-reveal'

// --------
import { post } from '../../../types';
import ExpandMore from './ExpandMore';
import { DeletePostModal } from '../../Modals';
import EditPostModal from '../../Modals/EditPostModal';

interface propsType {
    post: post
}
const CardComponent = (props: propsType) => {
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

                <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <IconButton aria-label="delete-post"
                            onClick={() => DeletePostModal(post.id)}>
                            <DeleteIcon color='error' />
                        </IconButton>
                        <IconButton aria-label="edit-post"
                            onClick={() => EditPostModal(post.id, post.title, post.body, post.userId)}
                        >
                            <EditIcon color='primary' />
                        </IconButton>
                    </div>
                    <div>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </div>
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
export default CardComponent