import * as mongoose from "mongoose";

export class Crud {
  private model: any;

  constructor(Model: unknown) {
    this.model = Model;
  }

  // alert!!! in this case, the object this is undefined
  // getAll (params, done) {
  //   this.model.find({}).exec(done);
  // }

  public getAll = (params: any, done: Function): void => {
    this.model.find({}, done);
  };

  public save = (params: any, done: Function): void => {
    let db_model = new this.model(params);
  };

  public deleteById = (params: any, done: Function): void => {
    let { id, _id } = params;
    this.model.remove({ _id: id || _id }).exec(done);
  };

  public deleteByQuery = (params: any, done: Function): void => {
    let { query } = params;
    this.model.remove({ query }).exec(done);
  };

  public saveMany = (params: any, done: Function): void => {
    let { obj_list } = params;
    this.model.create(obj_list, done);
  };

  public getById = (params: any, done: Function): void => {
    let { id, _id } = params;
    this.model.findOne({ _id: id || _id }).exec(done);
  };

  //
  public getAllCached = this.getAll;
  public getByIdCached = this.getById;
}
