'use strict';

/**
 * User.js controller
 *
 * @description: A set of functions called "actions" for managing `User`.
 */

const { sanitizeEntity } = require('strapi-utils');

const sanitizeUser = user =>
  sanitizeEntity(user, {
    model: strapi.query('user', 'users-permissions').model,
  });


module.exports = {
  	async getProjects(ctx) {
    	const user = ctx.state.user;
		const data = sanitizeUser(user);
		const email = data.email;
		const entities = await strapi
			.query('project')
        	.find({
	          	'user.email': email
        	})
    	ctx.send(entities);
	},
	  
	async getProject(ctx) {
		const user = ctx.state.user;
		const data = sanitizeUser(user);
		const entities = await strapi
			.query('project')
			.findOne({
			  'user.email': data.email,
			  'id': ctx.params.id
			})
		ctx.send(entities);
	}
};
