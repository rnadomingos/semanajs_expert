import fs from 'fs'
import fsPromisses from 'fs/promises'
import { join, extname } from 'path'
import config from './config.js'

const {
    dir: {
        publicDirectory
    }
} = config
export class Service {
    createFileStream(filename) {
        return fs.createReadStream(filename)
    }

    async getFileInfo(file) {
        // retorno o caminho do arquivo: file = home/index.html
        const fullFilePath = join(publicDirectory, file)
        //valida se existe, se náo existe estoura erro!!
        await fsPromisses.access(fullFilePath)
        const fileType = extname(fullFilePath)
        return {
            type: fileType,
            name: fullFilePath
        }

    }
    async getFileStream(file) {
        const {
            name,
            type
        } = await this.getFileInfo(file)
        return {
            stream: this.createFileStream(name),
            type
        }
    }
}