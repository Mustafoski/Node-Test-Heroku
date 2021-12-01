import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Emir!!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));

//  script "engines": {
//     "node": "14.x"
//   },
// --remove .lock files

// git add .
// git commit -m "some commit"
// git push heroku master
