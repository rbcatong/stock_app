//set up server
const express = require('express')

const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())



      // this makes sure express behaves correctly
      if (process.env.NODE_ENV === 'production') {
        // Express will serve up production assets
        // like our main.js file, or main.css file!
        app.use(express.static('client/build'));

        // Express will serve up the index.html file
        // if it doesn't recognize the route
         //express will serve up the index.html if it doesnt recognize the route



        app.get('*', (req, res) => {
          res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        });
      }



const PORT = process.env.PORT || 5000
app.listen(PORT , ()=> console.log('starting server'))
