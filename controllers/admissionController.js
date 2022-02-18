import admissionModel from "../models/admissionSchema.js"

// CREATING FUNCTION
class admissionController {
    //Creating Doc
    static createAdmissionDoc = async(req,res) => {
        try {
            const {name, email, phone, message} = req.body
            const doc = new admissionModel({
                name: name,
                email: email,
                age: age,
                father_name: father_name,
                phone: phone,
                mother_name: mother_name,
                standard: standard,
                gender: gender,
                address: address
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


export {admissionController} 

