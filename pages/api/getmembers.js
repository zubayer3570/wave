import fs from 'fs'
export default async function getmembers(req, res) {
    try {
        fs.readFile("data/members.json", 'utf-8', (err, data)=>{
            res.send(data)
        })
    } catch (error) {
        res.send(error)
    }
    // res.status(200).json({ name: 'John Doe' })
}