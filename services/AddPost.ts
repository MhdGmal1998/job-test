import { GLOBAL_LINK } from '../constants/Porfolio';
const AddPost = async (title, body, userId) => {
    const Response = await fetch(`${GLOBAL_LINK}`, {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body,
            userId: userId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    return Response
}

export default AddPost
