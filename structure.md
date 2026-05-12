what need to be a backend dev: a programming language (java js php goland c++ etc) and a db (Mongo, MySql, postgres, sqllite) 

## Backend Structure

src: source folder acting as a central container having core logic and all of the source code.
  └─> index:      entry point of application
  └─> App/main:   contains config, cookies, urlcode etc
  └─> constants:  enums, db-name (ex: airline has 3 seats isle, middle, window so only 3 available and no fourth.basically restrictions)
DB: actual code that connects to db
Models: structure or schema of data for different type of libraries lies here.
Controllers: all functionality and methods are writtens here. all the data is processed here.
Routes: what we accept what we dont (ex. /route is good /routes is not)
Middleware: TBD
Utils: Basic utilities. 
  