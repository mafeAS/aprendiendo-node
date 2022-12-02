import express from 'express'
import {dirname, join} from 'path'//dirname me va a permitir crear una ruta absoluta
import { fileURLToPath } from 'url'

import indexRouter from './routers/index.js'

const app = express()

const __dirname=dirname(fileURLToPath(import.meta.url))


app.set('views',join(__dirname,'views'))
app.set('view engine','ejs')
app.use(indexRouter)

app.use(express.static(join(__dirname, 'public')))

app.listen(3000)
console.log("serveris listennig on port",3000)
