
const express = require('express');
const app = express();
const PORT = process.env.PORT ||8000
const schedule = require('node-schedule');
const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(0, 6)];
rule.hour = 13;
rule.minute = 40;

const job = schedule.scheduleJob(rule, function(){
  console.log('Hallelujha God is with me...');
});
const job2 = schedule.scheduleJob("**/1***", function(){
    console.log('Hallelujha God is with me 2...');
  });

app.listen(PORT, () => { console.log(`Jesus is with me.${PORT}`) });