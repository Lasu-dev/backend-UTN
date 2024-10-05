import { crearJson, leerJson } from "./utils/filesystemManager.js"

const test = async() =>{
    await crearJson('data', [])
    await leerJson('data')
}
test()

