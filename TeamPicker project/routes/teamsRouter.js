const express = require("express");

const knex = require("../db/connection");
const { response } = require("express");
const router = express.Router();

const http = require("http");
const url = require("url");



router.get("/", (req, res) => {
    knex("teams")
      .orderBy("id", "DESC")
      .then((teams) => {
      res.render("teams/index", { teams });
      });
  });

router.get("/new", (req, res) => {
  res.render("teams/new");
})

router.post("/", (request, response) => {
  const formData = request.body;

console.log(formData);
  const { logoUrl, name, members } = formData;
  knex("teams")
    .insert({
      logoUrl,
      name,
      members,
    })
    .returning("*")
    .then((team) => {
      response.redirect(`/cohorts/${team[0].id}`);
    });
});

router.get("/:id", (request, response) => {

  // const server = http.createServer((req, res) => {
  //   const queryParams = url.parse(request.url.query)
  //   console.log(queryParams);
  //   const temp = parseFloat(queryParams.temp)
  //   console.log(temp);
  // })

  const select = request.query.select;
  const quantity = request.query.quantity;
  // console.log("select is" + select);
  // console.log("quantity is" + quantity);
  

  const {id} = request.params;

  knex("teams")
  .where("id", id)
  .first()
  .then((team) => {
    const members = team.members;
    const members_array = members.split(",");
    let teams = [];
    let eachTeam = [];
    if (select == "team_count") {
      if (members_array > quantity) {
        let members_per_team = members_array.length / quantity
        for (let i = 0; i < members_array.length; i += members_per_team) {
          eachTeam = members_array.slice(i, i + members_per_team);
          teams.push(eachTeam);
        }
      }
      else {
        teams = members_array;
      }
    if (team) {
      console.log(teams);
      response.render("teams/show", { team }, {teams});
    } else {
      response.redirect("/posts");
      }
    }
      
    else if (select == "number_per_team") {
      if (members_array > quantity) {
        let members_per_team = quantity
        for (let i = 0; i < members_array.length; i += members_per_team) {
          eachTeam = members_array.slice(i, i + members_per_team);
          teams.push(eachTeam);
        }
      }
      else {
        teams = members_array;
      }
      if (team) {
        console.log(teams);
        response.render("teams/show", { team }, {teams});
      } else {
        response.redirect("/posts");
      }
    };
});
});





module.exports = router;
