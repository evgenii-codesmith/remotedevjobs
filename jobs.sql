DROP DATABASE IF EXISTS remotejobs;
CREATE DATABASE remotejobs;

\c remotejobs;

CREATE TABLE "jobs" (
	"ID" serial NOT NULL,
	"title" varchar(50) NOT NULL,
	"description" TEXT NOT NULL,
	"employer" varchar(50) NOT NULL,
	"skills" varchar(350) NOT NULL,
	"posted" TIMESTAMP NOT NULL,
	"pay" integer NOT NULL,
	"contact" varchar(30) NOT NULL,
	CONSTRAINT Untitled_pk PRIMARY KEY ("ID")
) WITH (
  OIDS=FALSE
);

INSERT INTO jobs (title, description, employer, skills, posted, pay, contact) VALUES ('Front-End Engineer', 'Make web apps', 'Jilt','React,Node,Express,SQL', '2018-11-26 19:10:25-07','120000','work@jilt.io');

INSERT INTO jobs (title, description, employer, skills, posted, pay, contact) VALUES ('Senior Software Engineer', 'Be a ninja', 'Threshold','Go,Python,AWS', '2018-11-27 10:10:26-07','190000','work@threshold.com');

INSERT INTO jobs (title, description, employer, skills, posted, pay, contact) VALUES ('Lead architect', 'Deploy apps to AWS, Migrate dbs', 'Sourceaudio1','AWS,Linux,Docker', '2018-11-28 19:10:25-07','120000','jobs@sourceaudio.com');