import ArticleModel from "../models/articles";
import { Crud } from "./base";

class Article extends Crud {
  constructor(Model: any) {
    super(Model);
  }
}

let article_object = new Article(ArticleModel);
export default article_object;
