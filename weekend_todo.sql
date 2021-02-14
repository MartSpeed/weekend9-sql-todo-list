-- CREATE TABLE to be pulled from
-- CREATE TABLE information for weekend_todo database
CREATE TABLE "weekend_todo" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (1024) NOT NULL,
);

-- INSERT INTO the VALUES() that need to be recorded
INSERT INTO "weekend_todo" ("task")
VALUES 
('Clean the gutters closest to the lake'),
('Pressure wash the house on the lake side'),
('Go to farmers market'),
('Finish laundry from last week'),
('Stop by the computer parts store'),
('Find a new book to read');