import contactModel from "../models/contactSchema.js"

// CREATING FUNCTION
class contactController {
    //Creating Doc
    static createContactDoc = async(req,res) => {
        try {
            const {name, email, phone, message} = req.body
            const doc = new contactModel({
                name:name,
                email:email,
                phone:phone,
                message:message
            })
            //Saving Doc
            // console.log(req.body);
            const result = await doc.save()
            // console.log(result);
            res.redirect('/')
        } catch (error) {
            console.log(error);
        }
    }

}


export {contactController} 



