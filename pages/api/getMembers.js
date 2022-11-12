import fs from 'fs'
export default async  function handler(req, res) {
    const data = await fs.promises.readFile("public/members.json", 'utf-8')
    res.send(data)
  }