import { MongoClient } from 'mongodb'
require('dotenv').config()
async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, name, message } = req.body

        if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
            res.status(422).json({ message: 'Invalid input.' })
            return
        }

        // Store it in a database
        const newMessage = {
            email,
            name,
            message,
        }

        let client

        const uri = process.env.MONGODB_URI
        try {
            client = await MongoClient.connect(uri, (err, client) => {})
        } catch (error) {
            res.status(500).json({ message: 'Could not connect to database.' })
        }

        const db = client.db()

        const result = await db.collection('messages').insertOne(newMessage, (err, result) => {
            if (err) {
                client.close()
                res.status(500).json({ message: 'Storing message failed!' })
                return
            }
            client.close()
        })
        newMessage.id = result.insertedId
        await client.close()

        res.status(201).json({ reqMessage: 'Successfully stored message!', message: newMessage })
    }
}

export default handler
