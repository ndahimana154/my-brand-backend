// import chai, { expect } from "chai";
// import chaiHttp from "chai-http";
// import app from "../../..";

// chai.use(chaiHttp);
// const router = () => chai.request(app);

// describe("Project Controller", () => {
//   describe("Post Project", () => {
//     it("Should post a new project", async () => {
//       const res = await router()
//         .post("/api/project")
//         .field("title", "Test Project")
//         .field("description", "This is a test project")
//         .field("startTime", "2024-05-10")
//         .field("endTime", "2024-06-10")
//         .field("externalLink", "http://example.com")
//         .attach("image", "/path/to/your/image.jpg"); // Replace with actual path

//       expect(res).to.have.status(201);
//       expect(res.body).to.be.a("object");
//       expect(res.body).to.have.property("success", true);
//       expect(res.body).to.have.property("message", "Project is saved successfully.");
//       expect(res.body).to.have.property("newProject");
//       expect(res.body.newProject).to.be.a("object");
//       expect(res.body.newProject).to.have.property("_id");
//     });

//     it("Should return 'Please upload an image' for missing image", async () => {
//       const res = await router()
//         .post("/api/project")
//         .field("title", "Test Project")
//         .field("description", "This is a test project")
//         .field("startTime", "2024-05-10")
//         .field("endTime", "2024-06-10")
//         .field("externalLink", "http://example.com");

//       expect(res).to.have.status(400);
//       expect(res.body).to.be.a("object");
//       expect(res.body).to.have.property("success", false);
//       expect(res.body).to.have.property("message", "Please upload an image");
//     });
//   });

//   describe("Get All Projects", () => {
//     it("Should get all projects", async () => {
//       const res = await router().get("/api/projects");
//       expect(res).to.have.status(200);
//       expect(res.body).to.be.a("object");
//       expect(res.body).to.have.property("success", true);
//       expect(res.body).to.have.property("data");
//       expect(res.body.data).to.be.an("array");
//     });

//     // Add more tests if needed for edge cases
//   });

//   describe("Delete Project", () => {
//     it("Should delete a project by ID", async () => {
//       // Assuming you have an existing project ID for testing purposes
//       const projectId = "your_project_id";
      
//       const res = await router().delete(`/api/project/${projectId}`);
//       expect(res).to.have.status(200);
//       expect(res.body).to.be.a("object");
//       expect(res.body).to.have.property("success", true);
//       expect(res.body).to.have.property("message", "Task deleted successfully.");
//     });

//     it("Should return 'Invalid Project ID' for invalid ID", async () => {
//       const res = await router().delete(`/api/project/invalidID`);
//       expect(res).to.have.status(400);
//       expect(res.body).to.have.property("success", false);
//       expect(res.body).to.have.property("message", "Invalid Project ID");
//     });

//     // Add more tests for edge cases if needed
//   });
// });
