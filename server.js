// const express = require('express');
// const PORT = process.env.PORT || 3000;

// const app = express();

// app.listen(PORT, () => {
//   console.log(`Express server listening on port ${PORT}`);
// });

const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')

const AppRouter = require('./routes/AppRouter')
const DietRouter = require('./routes/DietRouter')
const DiscussionRouter = require('./routes/DiscussionRouter')
const WorkoutRouter = require('./routes/WorkoutRouter')

const PORT = process.env.PORT || 3001

app.use('/', DietRouter, DiscussionRouter, WorkoutRouter)
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.use('/', AppRouter)
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
