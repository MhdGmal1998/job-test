import { GLOBAL_LINK } from '../constants/Porfolio';
const EditPost = async (id, title, body, userId) => {
    const Response = await fetch(`${GLOBAL_LINK}/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: id,
            title: title,
            body: body,
            userId: userId
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    return Response
}

export default EditPost
