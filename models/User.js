const { Schema, model, version } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "El campo name es obligatorio"]
    },
    email: {
        type: String,
        required: [true, "El campo email es obligatorio"],
        unique: true,
        trim: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Email no valido"
        ] 
    },
    password: {
        type: String,
        required: [true, "El campo password es obligatorio"],
        minLength: [6, "Password minima de 6 caracteres"],
        maxLength: [23, "Password maximo de 23 caracteres"],
    },
    photo: {
        type: String,
        required: [true, "El campo photo es obligatorio"],
        default: "asdasdadasdadasd"
    },
    phone: {
        type: String,
        default: "+569 "
    },
    bio: {
        type: String,
        maxLength: [250, "Bio maximo de 250 caracteres"],
        default: "bio",
    }
},{
    timestamps: true
});

//Encriptar password antes de guardar
userSchema.pre("save", async function(next) {

    //Verificar si el password ya esta encriptado
    if(!this.isModified("password")) return next();

    //Encriptar el password
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

});

const User = model("User", userSchema);

module.exports = User;