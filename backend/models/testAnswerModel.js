import mongoose from 'mongoose';

const testAnswerSchema = mongoose.Schema({
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
    question1: {
        type: Array,
        required: true
    },
    question2: {
        type: Array,
        required: true
    },
    question3: {
        type: Array,
        required: true
    },
    question4: {
        type: Array,
        required: true
    },
    question5: {
        type: Array,
        required: true
    },
    question6: {
        type: Array,
        required: true
    },
    question7: {
        type: Array,
        required: true
    },
    subPassions: {
        type: Array,
    }
});

const TestAnswer = mongoose.model('TestAnswer', testAnswerSchema);

export default TestAnswer;
