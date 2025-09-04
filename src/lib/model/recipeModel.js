import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: {
        type: Object,
        required: true
    },
    steps: {
        type: Object,
        required: true,
    },
}, {
    timestamps: true
});

export default mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);