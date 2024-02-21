const express = require('express');
const app = express();
const ExpressError = require('./expressError');
const {mean, median, mode } = require('./doMath')

app.get("/mean/:nums", (req, res) =>{
  if (!req.query.nums) {
    throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
  }
  let numsAsStrings = req.query.nums.split(',');
  // check if anything bad was put in
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }


  let result = {
    operation: "mean",
    value: mean(nums)
  }
  
  return res.send(result);

})

app.get("/median", (req, res) =>{
  if (!req.query.nums) {
    throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
  }
  let numsAsStrings = req.query.nums.split(',');
  // check if anything bad was put in
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }


  let result = {
    operation: "median",
    value: median(nums)
  }
  
  return res.send(result);

})

app.get("/mode", (req, res) =>{
  if (!req.query.nums) {
    throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
  }
  let numsAsStrings = req.query.nums.split(',');
  // check if anything bad was put in
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }


  let result = {
    operation: "mode",
    value: mode(nums)
  }
  
  return res.send(result);

})

app.use(function (req, res, next) {
  const err = new ExpressError("Not Found",404);


  return next(err);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message
  });
});

app.listen(3000,()=>{
    console.log("server running on port 3000");
})