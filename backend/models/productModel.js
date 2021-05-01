import mongoose from 'mongoose';

const hobbieSchema = mongoose.Schema({
    hobbie: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }, 
    comment: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
},  
}, {
    timestapmps: true
});

const Hobbie  = mongoose.model('Hobbie', HobbieSchema);

export default Product;
