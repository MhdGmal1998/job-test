import { GLOBAL_LINK } from "../constants/Porfolio"
const DeletePost = async (id) => {
    const Response = await fetch(`${GLOBAL_LINK}/${id}`, {
        method: 'DELETE',
    })
    return Response.status
}

export default DeletePost