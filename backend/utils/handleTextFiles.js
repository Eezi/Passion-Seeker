import fs from 'fs'
import { normalizeFileData } from './normalizeFileData.js'

export const getFileData = async () => {
    try {
  const textFileData = fs.readFileSync('/Users/tomias/Documents/games.txt', 'utf8')
  const filteredData = textFileData.split('\n').map(line => {
      const normalizedKeyValue = normalizeFileData(line)
      if(normalizedKeyValue.length > 0) {
        return {
            label: line.trim(),
            key: normalizedKeyValue,
            category: 'games'
        } 
      }
   })
    //console.log('data', filteredData)
   return filteredData
    } catch(error) {
        console.log('readFile error', error)
    } 
}
