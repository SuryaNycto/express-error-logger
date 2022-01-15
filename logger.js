const fs=require("fs")
const fsPromises=require("fs").promises;
const path=require("path")
const {v4:uuid}=require("uuid");
const { format } = require('date-fns');


async function logit(message)
{

    try {
        
        if(!fs.existsSync(path.join(__dirname,"logs"))){
            await fsPromises.mkdir(path.join(__dirname,"logs"))
        }

        const dateTime =await  `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
        const logItem = await `${dateTime}\t${uuid()}\t${message}\n`;
    

    await fsPromises.appendFile(path.join(__dirname,"logs","log.txt"),`${logItem} \n\n`)


    } catch (error) {
        console.error(error.message)
        
    }
   


}

const logger=(err,req,res,next)=>{
    logit(err)
}

module.exports=logger;