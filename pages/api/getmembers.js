import fs from 'fs'
export default async function getmembers(req, res) {
    try {
        const data = await fs.promises.readFile("data/members.json", 'utf-8')
        res.send(data)
    } catch (error) {
        res.send({error, pathRoute: __dirname})
    }
    // res.status(200).json({ name: 'John Doe' })
}