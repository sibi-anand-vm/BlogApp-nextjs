import mongoose from "mongoose";

const postsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true  
    },
    desc: {
        type: String,
        required: true
    },
    ImageURL: { 
        type: String,
        default: "False"
    },
},  
{
    timestamps: true
});

// Check if the model already exists
const Posts = mongoose.models.PostsCollections || mongoose.model("PostsCollections", postsSchema);

export default Posts;
