
const express = require('express');
const app = express();
const PORT = process.env.PORT ||8000
const schedule = require('node-schedule');
const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(0, 6)];
rule.hour = 13;
rule.minute = 40;

const job = schedule.scheduleJob(rule, function(){
  console.log('Hallelujha God is with me...rule');
});
const job3= schedule.scheduleJob("0 */1***", function(){
    console.log('Hallelujha God is with me...0*/1***');
  });
const job4= schedule.scheduleJob("*/1***", function(){
    console.log('Hallelujha God is with me...*/1***');
  });
const job5 =schedule.scheduleJob("*/23***", function(){
    console.log('Hallelujha God is with me...*/23***');
  });
const job6= schedule.scheduleJob("*/24***", function(){
    console.log('Hallelujha God is with me...*/24***');
  });
const job7 =schedule.scheduleJob("0*/23***", function(){
    console.log('Hallelujha God is with me...0*/23***');
  });
const job8= schedule.scheduleJob("0*/24***", function(){
    console.log('Hallelujha God is with me...0*/24***');
  });
app.listen(PORT, () => { console.log(`Jesus is with me.${PORT}`) });