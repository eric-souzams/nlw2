const Database = require('./db')
const createProffy = require('./createProffy')
Database.then(async (db) => {

  proffyValue = {
    name: "Mayk Brito",
    avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
    whatsapp: "61000000000", 
    bio: "Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
  }

  classValue = {
    subject: 1, 
    cost: "20",
  }

  classScheduleValues = [
    {
      weekday: 1, 
      time_from: 720, 
      time_to: 1120
    },
    {
      weekday: 4, 
      time_from: 520, 
      time_to: 1120
    }
  ]

//  await createProffy(db, {proffyValue, classValue, classScheduleValues})


  const selectedProffys = await db.all("SELECT * FROM proffys")

  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
  `)

  const selectClassesSchedule = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "4"
    AND class_schedule.time_from <= "13000"
    AND class_schedule.time_to > "1300";
  `)
})