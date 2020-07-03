const faker = require("faker");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('teams')
    .del()
    .then(() => {
      const teams = Array.from({ length: 30 }).map(() => {
        return {
          logoUrl: faker.image.imageUrl(),
          name: faker.commerce.productName(),
          members: faker.name.findName(),
        };
      });
      // Inserts seed entries
      return knex("teams").insert(teams);
    });
};
