import fs from 'fs'
export default async function getmembers(req, res) {
    try {
        const data = await fs.promises.readFile("data/members.json", 'utf-8')
        res.json({data: data})
    } catch (error) {
        res.send(error)
    }
    // res.status(200).json({ name: 'John Doe' })
}