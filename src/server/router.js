const express = require('express'),
router = express.Router();
const path = require('path');
const db = require('./db');

//Setting up routes

//reder index.html
router.get('/',function(req,res,next){
  res.set('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname+'./../../index.html'));
  
})

//Get all jobs
router.get('/jobs',function(req,res,next){
  db.any('select * from jobs')
  .then(dbData => res.status(200).json(dbData))
  .catch(err => res.status(500).json({error: err.message}));
});

//Get single job
// domain.com/jobs/jobID
router.get('/jobs/:id', function(req,res,next){
  const jobID = parseInt(req.params.id);
  db.one('select * from jobs where "ID" = $1', jobID)
  .then(dbData => res.status(200).json(dbData))
  .catch(err => res.status(500).json({error: err.message}));
});

//Add a job to DB
router.post('/addJob',function(req,res,next){
  req.body.posted = new Date(req.body.posted);
  req.body.pay = parseInt(req.body.pay);

  db.none('insert into jobs(title, description, employer, skills, posted, pay, contact) values(${title}, ${description}, ${employer}, ${skills}, ${posted}, ${pay},${contact})',req.body)
  .then(dbData => res.status(200).json('Job posted!'))
  .catch(err => res.status(500).json({error: err.message}));
})

//Update a job
router.patch('/updateJob/:id',function(req,res,next){
  db.none('update jobs set title=$1, description=$2, employer=$3, skills=$4, posted=$5, pay=$6, contact=$7 where "ID"=$8',
    [req.body.title, req.body.description, req.body.employer,req.body.skills, new Date(req.body.posted),req.body.pay,req.body.contact, parseInt(req.params.id)])
    .then(dbData => res.status(200).json('Successfully updated!'))
    .catch(err => res.status(500).json({error: err.message}));
})

//Delete job
router.delete('/deleteJob/:id',function(req,res,next){
  const jobID = parseInt(req.params.id);
  db.result('delete from jobs where "ID" = $1',jobID)
  .then(dbData => res.status(200).json('Job deleted!'))
  .catch(err => res.status(500).json({error: err.message}));
})

module.exports = router;