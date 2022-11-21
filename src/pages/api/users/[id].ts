import { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;


    if (method == 'GET') {
        const { id } = req.query;

        return res.status(200).json({ id });
    }

    if (method == 'POST') {
        const { id } = req.query;

        return res.status(200).json({ id });        
    } 

    if (method == 'PUT') {
        const { id } = req.query;

        return res.status(200).json({ id });
    }

    if (method == 'DELETE') {
        const { id } = req.query;

        return res.status(200).json({ id });
    }
}
