import mysql2 from 'mysql2'
import { NextApiRequest, NextApiResponse } from 'next'
import { compare } from 'bcrypt'
import jwt from 'jsonwebtoken'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'POST') {
        const { email, password } = req.body
    }
    
    return res.status(200).json({  })
}
