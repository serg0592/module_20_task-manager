import { v4 as uuid } from "uuid";

//класс-генератор случайного id
export class BaseModel {
  constructor() {
    this.id = uuid();
  }
}
