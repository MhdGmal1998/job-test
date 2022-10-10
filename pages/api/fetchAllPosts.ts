import type { NextApiRequest, NextApiResponse } from 'next'
import { post } from '../../types'
import { GLOBAL_LINK } from '../../constants/Porfolio';

interface dataType {
    posts: post[]
}

const fetchAllData = async () => {
    const response = await fetch(GLOBAL_LINK)
    const posts = await response.json()
    return posts
}
export default async function handler(req: NextApiRequest, res: NextApiResponse<dataType>) {
    // const posts = await fetchAllData()
    const response = await fetch(GLOBAL_LINK)
    const posts = await response.json()

    res.status(200).send({ posts: posts })
}