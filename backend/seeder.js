import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Passion from './models/passionModel.js'
import TestAnswer from './models/testAnswerModel.js'
import connectDB from './config/db.js'
import { getFileData  } from './utils/handleTextFiles.js'
import { freshAnswers } from './passionAnswersData/testAnswers.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        //const fileData = await getFileData()

      await TestAnswer.insertMany(freshAnswers)
        console.log('testdata', freshAnswers)
       //console.log('Data imported!', fileData)
       process.exit()

    } catch (error) {
        console.log(`${error}`);
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
       await Passion.deleteMany()

       console.log('Data removed!')
       process.exit()

    } catch (error) {
        console.log(`${error}`);
        process.exit(1)
    }
}

if(process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}
