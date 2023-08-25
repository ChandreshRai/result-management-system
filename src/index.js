const bodyParser = require('body-parser');

const studenntRoutes=require('./routes/student.routes.js')
const teacherRoutes = require('./routes/teacher.routes')
const {engine} = require('express-handlebars');

const app = require('express')();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// const a = ;

// app.engine('handlebars', exphbs());
// app.engine('handlebars', handlebars.engine()); 
//   app.set('view engine', 'handlebars');
//   app.set("views", "./src/views");

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
 


app.get('/', (req, res) => {
    // Prepare data

    try {
        const data = {
            title: 'Welcome to My App',
            message: 'Hello from the server!'
          };
        
          // Render the template and pass in the data
          res.render('home', data);
    } catch (error) {
        console.log(error);
    }
    
  });
  app.get('/add', function(req, res) {
    res.render('add', { title: 'Express' });
});


  app.post('/add/complete', function(req, res) {
    // var Kitten = req.Kitten;
    console.log(req.body); // PROBLEM: it returns empty, while I expect req.body
    // res.redirect('/meow_response');
});

app.use('',teacherRoutes)
app.use('',studenntRoutes)

app.listen(3000, ()=>{
    console.log('server is listening at 4400');
})