import fs from 'node:fs'
export default async function getmembers(req, res) {
    const data = await fs.promises.readFile("public/members.json", 'utf-8')
    res.status(200).json({data: data});
    // res.status(200).json({ name: 'John Doe' })
}