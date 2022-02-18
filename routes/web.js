import express from 'express'
const router = express.Router()
import { homeController } from "../controllers/homeController.js";
import { contactController } from "../controllers/contactController.js";
import { admissionController } from "../controllers/admissionController.js";


router.get('/', homeController)
router.post('/contact', contactController.createContactDoc)
router.post('/admission', admissionController.createAdmissionDoc)


export default router


