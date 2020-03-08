# Content Management System(CMS) webapp

A content managment system project done in less than a week that handles blog posting and user accounts.

![CMS](/readme_images/article-screen.png)

## Group members

Alison Babington(AlisonBabington), Foteini Ntaloumi(Fofiko) and Alvaro Alonso(VladmirVolgen)

## Tech stack

**Java** : Spring and Hibernate to handle the back-end of the app.

**JavaScript** : React to handle the front-end of the app. Bloomer and Bulma packages to handle the styling.

## What we have achieved

* Build a fully functional full-stack app using two different languages
* Build a scalable product that can be easily extended
* Deal with a considerable codebase
* Work using Agile methodology

## How to run the project

### Database setup

* Run the following Docker command: `docker run --name cms-postgres -p 5432:5432 -e POSTGRES_USERNAME=cms_admin -e POSTGRES_PASSWORD=admin  -d postgres`
* Once you have run the docker container run: `docker exec -it cms-postgres bash`
* Now log in into the db container: `psql -U postgres`
* And create the database: `CREATE DATABASE cms;`
