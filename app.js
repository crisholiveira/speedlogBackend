var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var homeRouter = require('./routes/home');
var perfilRouter = require('./routes/perfil');
var requisicoesRouter = require('./routes/requisicoes');
var estoqueRouter = require('./routes/estoque');
var usuariosRouter = require('./routes/usuarios');
var produtosRouter = require('./routes/produtos');
var listaUsuariosRouter = require('./routes/listaUsuarios');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/home', homeRouter);
app.use('/perfil', perfilRouter);
app.use('/requisicoes', requisicoesRouter);
app.use('/estoque', estoqueRouter);
app.use('/usuarios', usuariosRouter);
app.use('/produtos', produtosRouter);
app.use('/listaUsuarios', listaUsuariosRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.PORT || 8000;
var server = app.listen(port, function( ){
  console.log('Express server listening on port ' + server.address().port);
})

module.exports = app;
