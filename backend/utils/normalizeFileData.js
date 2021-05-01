import { removesScandinavianLetters } from './removeScandinavianLetters.js'
import { lowercaseFirstLetter } from './lowecaseFirstLetter.js'
import { replaceEmptySpaceWithLine } from './replaceEmptySpaceWithLine.js'

export const normalizeFileData = (line) => {
    let keyValue = removesScandinavianLetters(line)
    keyValue = keyValue.trim()
    keyValue = keyValue.toLowerCase()
    keyValue = replaceEmptySpaceWithLine(keyValue)
    return keyValue
}