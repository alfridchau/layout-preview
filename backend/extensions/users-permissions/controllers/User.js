'use strict';

/**
 * User.js controller
 *
 * @description: A set of functions called "actions" for managing `User`.
 */


module.exports = {
  async getProjects(ctx) {
    let entities;
    if (ctx.query._email) {
      
      entities = await strapi
        .query('project')
        .find({
          'user.email': ctx.query._email
        })
    }
    ctx.send(entities);
  }
};
