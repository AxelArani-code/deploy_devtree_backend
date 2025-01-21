import mongoose, { Schema , Document} from "mongoose";


export interface IUser  extends Document{
    handle: string,
    name: string,
    email: string,
    password: string
    description: string
    image: string
    links: string
}

//Schema se define los modelos 
const userSchema = new Schema({
    handle: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    name: {
        type: String,
        require: true, //Un registro no tiene un nombre basido 
        trim: true //Si un usuario usa un nombre con espacio lo elimina 
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,// que el user no tenga el mismo email 
        lowercase: true,
    },
    password: {
        type: String,
        require: true,
        trim: true
    },
    description: {
        type: String,
        default: ''
    }, 
    image:{
        type: String,
        default: ''
    },
    links: {
        type: String,
        default:'[]'
    }
})

const User = mongoose.model<IUser>('User', userSchema)
export default User 
