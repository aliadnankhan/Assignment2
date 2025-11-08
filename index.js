// require module
var connect = require('connect')
// create app
var app = connect()

function homepage(req, res, next) 
{
  res.setHeader('Content-Type', 'text/plain')
  res.end('Home Page\n')
}

function aboutme(req, res, next) 
{
  res.setHeader('Content-Type', 'text/plain')
  res.end('About Me\n')
}

function projectpage(req, res, next) 
{
  res.setHeader('Content-Type', 'text/plain')
  res.end('Project Page\n')
}

function contactus(req, res, next) 
{
  res.setHeader('Content-Type', 'text/plain')
  res.end('Contact Us\n')
}

app.use('/', homepage)
app.use('/aboutme', aboutme)
app.use('/projectpage', projectpage)
app.use('/contactus', contactus)
app.listen(3000)
console.log('Server is running on local host')