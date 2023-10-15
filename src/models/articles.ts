import { Dates, Planning, Display } from './base';
import {Schema, model} from "mongoose";

const articlesSchema = new Schema ({
        title: { 
            type: String,
            required: true
        },
        subtitle: String,
        content: String,
        url: String,
        dates: Dates,
        planning: Planning,
        display: Display
}, {
    timestamps: true
}
);


const Article = model("Article", articlesSchema)
export default Article