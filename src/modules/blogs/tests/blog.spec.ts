import { describe, it } from 'mocha';
import { expect } from 'chai';
import sinon from 'sinon';
import { Request, Response,Express } from 'express';
import blogRepository from '../repository/blogRepository';
import blogController from '../controller/blogController';

describe('Blog Controller', () => {
  describe('postBlog', () => {
    it('should return status 200 and success message on successful creation', async () => {
      const req = {
        body: {
          title: 'Test Blog',
          summary: 'Summary of the test blog',
          article: 'Content of the test blog',
        },
        file: { path: 'testImagePath' }, // Mock file object for testing
      } as Request;
      const res = {
        status: sinon.spy(),
        json: sinon.spy(),
      } as unknown as Response;

      await blogController.postBlog(req, res);

      expect(sinon.assert.calledWith(res.status, 200)).to.be.true;
      expect(sinon.assert.calledWithMatch(res.json, { message: 'Blog Created successfully!' })).to.be.true;
    });

    // Add more test cases for error scenarios, missing fields, etc.
  });

  describe('getBlogs', () => {
    it('should return status 200 and success message with blogs data', async () => {
      const req = {} as Request;
      const res = {
        status: sinon.spy(),
        json: sinon.spy(),
      } as unknown as Response;

      // Mock blog repository method to return dummy blogs data
      sinon.stub(blogRepository, 'getBlogs').resolves([{ title: 'blog1' }, { title: 'blog2' }]);

      await blogController.getBlogs(req, res);

      expect(sinon.assert.calledWith(res.status, 200)).to.be.true;
      expect(sinon.assert.calledWithMatch(res.json, { success: true, data: ['blog1', 'blog2'] })).to.be.true;

      // Restore the stub after the test
      sinon.restore();
    });

    // Add more test cases for error scenarios, empty data, etc.
  });

  describe('getBlogById', () => {
    it('should return status 200 and success message with blog data', async () => {
      const req = {
        params: { id: '123456789012345678901234' }, // Valid ObjectID for testing
      } as Request;
      const res = {
        status: sinon.spy(),
        json: sinon.spy(),
      } as unknown as Response;

      // Mock blog repository method to return dummy blog data
      sinon.stub(blogRepository, 'getBlogById').resolves({ title: 'blogData' });

      await blogController.getBlogById(req, res);

      expect(sinon.assert.calledWith(res.status, 200)).to.be.true;
      expect(sinon.assert.calledWithMatch(res.json, { success: true, data: 'blogData' })).to.be.true;

      // Restore the stub after the test
      sinon.restore();
    });

    // Add more test cases for error scenarios, invalid ID, etc.
  });

  describe('deleteBlog', () => {
    it('should return status 200 on successful deletion', async () => {
      const req = {
        params: { id: '123456789012345678901234' }, // Valid ObjectID for testing
      } as Request;
      const res = {
        status: sinon.spy(),
        json: sinon.spy(),
      } as unknown as Response;

      // Mock blog repository method to return true for successful deletion
      sinon.stub(blogRepository, 'deleteBlogById').resolves(true);

      await blogController.deleteBlog(req, res);

      expect(sinon.assert.calledWith(res.status, 200)).to.be.true;
      expect(sinon.assert.calledWith(res.json, { success: true })).to.be.true;

      // Restore the stub after the test
      sinon.restore();
    });

    // Add more test cases for error scenarios, invalid ID, etc.
  });
});
