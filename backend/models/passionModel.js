import mongoose from 'mongoose';

const passionSchema = mongoose.Schema({
    category: { 
        type: String, 
        required: true 
    },
    key: { 
        type: String, 
        required: true
    },
    label: { 
        type: String, 
        required: true 
    },
});

const Passion = mongoose.model('Passion', passionSchema);

export default Passion;
