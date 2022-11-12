import fs from 'node:fs'
export default async function getmembers(req, res) {
    try {
        const data = await fs.promises.readFile("./members.json", 'utf-8')
        res.send(data)
    } catch (error) {
        res.send(error)
    }
    // res.status(200).json({ name: 'John Doe' })
}