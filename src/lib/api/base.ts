// base.ts
import PocketBase from "pocketbase";

export class BaseService {
  url: string;
  pb: any;

  constructor(url: string) {
    this.url = url;
    this.pb = new PocketBase(this.url);
  }

  getPocketbase() {
    return this.pb;
  }
}

export const base = new BaseService("http://localhost:8090");

export default base;
