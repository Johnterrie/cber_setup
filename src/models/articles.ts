import { Dates, Planning, Display } from "./base";
import mongoose from "mongoose";

const articlesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: String,
    content: String,
    url: String,
    dates: Dates,
    planning: Planning,
    display: Display,
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model("Article", articlesSchema);
export default Article;
