import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../../..";
import path from "path";
import fs from 'fs'

chai.use(chaiHttp);
const router = () => chai.request(app);

const imagePath = path.join(__dirname, "../../../data/testimg.jpg");
const imageBuffer = fs.readFileSync(imagePath);
let newProjectId = ""

describe("Project Controller", () => {
  describe("Post Project", () => {
    it("Should post a new project", async () => {
      const res = await router()
        .post("/api/project")
        .field("title", "Test Project")
        .field("description", "This is a test project")
        .field("startTime", "2024-05-10")
        .field("endTime", "2024-06-10")
        .field("externalLink", "http://example.com")
        .attach("image", imageBuffer);

      expect(res).to.have.status(201);
      expect(res.body).to.be.a("object");
      expect(res.body).to.have.property("success", true);
      expect(res.body).to.have.property("message", "Project is saved successfully.");
      expect(res.body).to.have.property("newProject");
      expect(res.body.newProject).to.be.a("object");
      expect(res.body.newProject).to.have.property("_id");
      newProjectId = res.body.newProject._id;
    });

    it("Should return 'Please upload an image' for missing image", async () => {
      const res = await router()
        .post("/api/project")
        .field("title", "Test Project")
        .field("description", "This is a test project")
        .field("startTime", "2024-05-10")
        .field("endTime", "2024-06-10")
        .field("externalLink", "http://example.com");

      expect(res).to.have.status(400);
      expect(res.body).to.be.a("object");
      expect(res.body).to.have.property("success", false);
      expect(res.body).to.have.property("message", "Please upload an image");
    });
  });

  describe("Get All Projects", () => {
    it("Should get all projects", async () => {
      const res = await router().get("/api/project");
      expect(res).to.have.status(200);
      expect(res.body).to.be.a("object");
      expect(res.body).to.have.property("success", true);
      expect(res.body).to.have.property("data");
      expect(res.body.data).to.be.an("array");
    });

    // Add more tests if needed for edge cases
  });

  describe("Delete Project", () => {
    it("Should delete a project by ID", async () => {
      // Assuming you have an existing project ID for testing purposes
      // const projectId = "662e106b276ab149dcd1f9f1";
      
      const res = await router().delete(`/api/project/${newProjectId}`);
      expect(res).to.have.status(200);
      expect(res.body).to.be.a("object");
      expect(res.body).to.have.property("success", true);
      expect(res.body).to.have.property("message", "Task deleted successfully.");
    });

    it("Should return 'Invalid Project ID' for invalid ID", async () => {
      const res = await router().delete(`/api/project/662e106b276ab149dcd1f9f1`);
      expect(res).to.have.status(400);
      expect(res.body).to.have.property("success", false);
      expect(res.body).to.have.property("message", "Invalid Projct ID");
    });
  });
});