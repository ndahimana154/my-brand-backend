// Import necessary modules and dependencies
import chai from "chai";
import chaiHttp from "chai-http";
import mongoose from "mongoose";
import app from "../../../index"; // Replace this with the path to your Express app file
import blogRepository from "../repository/blogRepository"; // Replace this with the path to your blog repository

// Initialize Chai
const expect = chai.expect;
chai.use(chaiHttp);

// Mocking the blog data for testing
const mockBlogData = {
  title: "Test Blog",
  summary: "This is a test summary",
  cover: "test_cover_url",
  article: "This is a test article",
};

// Describe your test suite
describe("Blog API Endpoints", () => {
  // Connect to the MongoDB database before running the tests
  before(async () => {
    await mongoose.connect(
      "mongodb+srv://ndahimana154:GitPAUL123@cluster0.qw2iydf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
  });

  // Disconnect from the MongoDB database after running the tests
  after(async () => {
    await mongoose.connection.close();
  });

  // Test case: should create a new blog
  it("should create a new blog", async () => {
    const res = await chai.request(app).post("/api/blogs").send(mockBlogData);

    expect(res).to.have.status(201);
    expect(res.body.success).to.be.true;
    expect(res.body.message).to.equal("Project is saved successfully.");
    expect(res.body.blogData).to.deep.include(mockBlogData);
  });

  // Test case: should fetch all blogs
  it("should fetch all blogs", async () => {
    const res = await chai.request(app).get("/api/blogs");

    expect(res).to.have.status(200);
    expect(res.body.success).to.be.true;
    expect(res.body.data).to.be.an("array").that.is.not.empty;
  });

  // Test case: should fetch a single blog by ID
  it("should fetch a single blog by ID", async () => {
    // Create a mock blog
    const createdBlog = await blogRepository.postBlog(mockBlogData);

    const res = await chai.request(app).get(`/api/blogs/${createdBlog._id}`);

    expect(res).to.have.status(200);
    expect(res.body.success).to.be.true;
    expect(res.body.data).to.deep.include(mockBlogData);
  });

  // Test case: should return 404 if blog ID is invalid when fetching a single blog
  it("should return 404 if blog ID is invalid when fetching a single blog", async () => {
    const invalidId = "invalid_id";

    const res = await chai.request(app).get(`/api/blogs/${invalidId}`);

    expect(res).to.have.status(404);
    expect(res.body.success).to.be.false;
    expect(res.body.message).to.equal("Invalid Blog ID");
  });

  // // Test case: should delete a blog by ID
  // it("should delete a blog by ID", async () => {
  //   // Create a mock blog
  //   const createdBlog = await blogRepository.postBlog(mockBlogData);

  //   const res = await chai.request(app).delete(`/api/blogs/${createdBlog._id}`);

  //   expect(res).to.have.status(200);
  //   expect(res.body.success).to.be.true;

  //   // Check if the blog was actually deleted
  //   const deletedBlog = await blogRepository.getBlogById(createdBlog._id);
  //   expect(deletedBlog).to.be.null;
  // });

  // // Test case: should return 404 if blog ID is invalid when deleting a blog
  // it("should return 404 if blog ID is invalid when deleting a blog", async () => {
  //   const invalidId = "invalid_id";

  //   const res = await chai.request(app).delete(`/api/blogs/${invalidId}`);

  //   expect(res).to.have.status(404);
  //   expect(res.body.success).to.be.false;
  //   expect(res.body.message).to.equal("Invalid Blog ID");
  // });
});
