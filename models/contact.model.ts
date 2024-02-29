import { Schema, model, models } from "mongoose";
const contactSchema = new Schema({
    name: String,
    subtitle: String,
    description: String,
},
    {
        timestamps: true
    }
)
const ContactModel = models.contact || model("contact", contactSchema)
export default ContactModel