import { existsSync, readFileSync } from 'fs'
import { ContestResponse } from './code.js'

let N = 1
const INPUT = 'input'
const OUTPUT = 'output'

function genEntryArray(file) {
  try {
    const data = readFileSync(file, 'utf-8').toString()
    return data.split(/\r?\n/)
  } catch(err) {
    console.error(err)
    return err;
  }
}

function expectedOutput() {
  try {
    return readFileSync(currOutputFile(), 'utf-8')
  } catch(err) {
    console.error(err)
    return err;
  }
}

function currEntryFile () {
  return `./tests/${INPUT}${N}.txt`
}

function currOutputFile() {
  return `./tests/${OUTPUT}${N}.txt`
}

while (existsSync(currEntryFile())) {
  const entryArray = genEntryArray(currEntryFile())
  const result = ContestResponse(entryArray)
  
  if (result.toString() === expectedOutput()) {
    console.log(`GG test ${N}`)
  } else {
    console.log(`Loose on test ${N}`)
  }
  N += 1
}

process.exit()

