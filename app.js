const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const dotenv = require('dotenv');
//adminBro
const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroMongoose = require('@admin-bro/mongoose')
AdminBro.registerAdapter(AdminBroMongoose)

//models
const User = require('./models/Users');
const Topic = require('./models/Topics');
const Question = require('./models/Questions');
const Company=require('./models/Companies');
const Exp = require('./models/Exps');

const app = express();
const bodyParser = require('body-parser');



//DB config
const db = require('./config/keys').MongoURI;


// Passportconfig
require('./config/passport')(passport);  //(change this line)

// Connect to Mongo (Use RemdiU for internet connection)
mongoose.connect(db,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true,
  useFindAndModify:false})
    .then(() => console.log('Mongodb Connected...'))
    .catch(err => console.log(err)); // change DNS to google if timeout error.

//EJS
app.use(expressLayouts);
app.use(express.static("views"));
app.set('view engine','ejs');



// Express session
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );

  //Passport Middleware
  app.use(passport.initialize());
  app.use(passport.session());
  // Connect flash
  app.use(flash());

// Global variables
app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });  


//BodyParser(now part of express)
//app.use(express.urlencoded({extended: false})); // to obtain data upon using body.req
const adminBro = new AdminBro({
  databases: [mongoose],
  rootPath: '/admin',
})

// const router = AdminBroExpress.buildRouter(adminBro)
const ADMIN = {
  email:require('./config/keys').ADMIN_EMAIL  ,
  password: require('./config/keys').ADMIN_PASSWORD,
}

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  cookieName: process.env.ADMIN_COOKIE_NAME || 'admin-bro',
  cookiePassword: process.env.ADMIN_COOKIE_PASS || 'supersecret-and-long-password-for-a-cookie-in-the-browser',
  authenticate: async (email, password) => {
    if (email === ADMIN.email && password === ADMIN.password) {
      return ADMIN
    }
    return null
  }
})
app.use(adminBro.options.rootPath, router)
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))
  


//Routes 
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));
//app.use('/admin', require('./routes/admin'));
app.use('/topics',require('./routes/topics'));
app.use('/comps',require('./routes/comp'));



const PORT = process.env.PORT /*incase we deploy*/ || 5000 ;

app.listen(PORT,console.log(`Server running on port ${PORT}...`));