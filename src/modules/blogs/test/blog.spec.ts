import App from "../../../index";
import chaiHttp from "chai-http"
import chai, { expect } from "chai";

chai.use(chaiHttp);
const router = () => chai.request(app);

describe("Blogs test cases",()=>{
  it("Should post")
})