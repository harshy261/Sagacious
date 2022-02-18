import express from 'express'
import connectDB from './db/connectdb.js'
import web from './routes/web.js'
import createContactDoc from './models/contactSchema.js'
import createAdmissionDoc from './models/admissionSchema.js'
const app = express()

const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"

// SET TEMPLATE ENGINE
app.set('view engine', 'ejs')


// DATABASE CONNECTION
connectDB(DATABASE_URL)


// CREATE AND SAVE DOC
createContactDoc()
createAdmissionDoc()

app.use(express.urlencoded({extended:false}))  
app.use(express.json());



// STATIC FILES
app.use(express.static('public'))

// LOAD ROUTES
app.use('/', web)

// SERVER LISTENING
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})



