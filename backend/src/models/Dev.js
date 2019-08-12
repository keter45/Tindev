const { Schema, model } = require("mongoose"); // Schema = Tabela, model = ligação arquivo e tabela

const DevSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }]
}, {
        timestamps: true,
    });

module.exports = model('Dev', DevSchema);