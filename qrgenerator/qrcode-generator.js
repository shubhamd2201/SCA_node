import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import fsPromises from "fs/promises";
import chalk from "chalk";
import validator from "validator";
import path from "path";


async function getURL(){
try{
    let answer = await inquirer.prompt([{message:'type your url', name:"url"}]);
    return answer.url;
}catch(err){
    throw Error('Error input url'+err);
}
}

async function getImageType(){
try{
    let answer = await inquirer.prompt([{message:'select image Type:', name:'imageType', type:'list', choices:["png", 'svg', 'pdf']}]);

    console.log(answer.imageType);
    return answer.imageType;
}catch(err){
throw Error(err);
}
}

async function generateQRCode(url, imagepath){
    let imagetype = {type:imagepath};
try{
    // switch(imagepath){
    //     case 'svg': imagetype = {type: "svg"};
    //     case 'png': imagetype = {type: "png"};
    //     case "pdf":imagetype = {type: "pdf"};
    // }
    const regex = /\.(.*?)\./;
    const match = url.match(regex);

    let imgName = '';
    if (match) {
        imgName = match[1];
      }
       else {
        imgName = url;
      }
   
        const dirpath = "./qrcodes";

        if(!fs.existsSync(dirpath)){
            await fsPromises.mkdir(dirpath);
        }
        let filename = imgName +"_img."+ imagetype.type;
        let filepath = path.join(dirpath, filename);


        let wrStream = fs.createWriteStream(filepath);

        let qrocde = qr.image(url, imagetype.type);
        qrocde.pipe(wrStream);

        return filename;

    
    }catch(err){
        throw Error (`Error in generating QR code ${err}`);
    }
}

async function writeFile(filepath, url){
    try{
        await fsPromises.appendFile(filepath, url);
    }catch(err){
        throw Error (`Error in appending url to file ${err}`);
    }
}

async function doTask (){
    try{
        let url = await getURL();
        console.log(chalk.blue("you typed"+ url));

        let isValidurl = validator.isURL(url);
        if(!isValidurl){
            throw Error (`invalid url ${url}`);
            return;
        }
        console.log(chalk.green(`URL is valid`));
        let imageType = await getImageType();
        console.log(chalk.blue(`You selected ${imageType}`));

        let filename = await generateQRCode(url, imageType);

        if(filename === ""){
            throw Error (`could not generate QR code`);
            return;
        }
        console.log(chalk.green("qr code generated and saved in "+filename));
    }
    catch(err){
        console.log(chalk.red(err.message));
    }
}

doTask();