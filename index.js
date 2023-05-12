
const express = require('express');
const app = express();
const PORT = process.env.PORT ||8000
const schedule = require('node-schedule');
const cron = require('node-cron');
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

cron.schedule('0 0 * * *', async () => {
    console.log("0 0 * * *    mail sent in 24 hr")
})
cron.schedule('1 * * * *', async () => {
  console.log("1 * * * *    mail sent in a 1 min")
}) 
cron.schedule('0 1 * * *', async () => {
  console.log("0 1 * * *    mail sent in a 1 hr")
})   
app.listen(PORT, () => { console.log(`Jesus is with me.${PORT}`) });