const fs = require('fs');
const path = require('path')
const fsPromises = require('fs').promises

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'notes.txt'), 'utf8')
        console.log(data)
        
        await fsPromises.writeFile(path.join(__dirname, 'New.txt'), 'Add me2')
        console.log("write complete")

        await fsPromises.appendFile(path.join(__dirname, 'New.txt'), ' in the group')
        console.log("Append complete")

        await fsPromises.rename(path.join(__dirname, 'New.txt'), path.join(__dirname, 'Hello.txt'))
        console.log("Rename successful")

        await fsPromises.unlink(path.join(__dirname,"notes.txt"))
        console.log("Delete Successful")
    }
    catch (err) {
        console.error(err)
    }

}
fileOps()

process.on('uncaughtException', err => {
    console.error(`there is an uncaught error : ${err}`)
    process.exit(1)
})
