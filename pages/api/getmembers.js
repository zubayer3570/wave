import fs from 'fs'
import path from 'path'
export default async function getMembers(req, res) {
    try {
        // const dataDirectory = path.join(process.cwd(), 'data')
        const dataDirectory = fs.promises.readdir(process.cwd())
        res.send(dataDirectory)
        // const data = await fs.promises.readFile( dataDirectory + "/members.json" , 'utf-8')
        // res.send(data)
    } catch (error) {
        res.send(error)
    }
    // res.status(200).json({ name: 'John Doe' })
}