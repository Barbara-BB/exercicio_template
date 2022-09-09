

/* importando o express */
const express = require('express')
const app = express();
const port = 5000;

let PortRoute = require('./PortRoute');
app.use('/',PortRoute);




/* Configurando a template engine. */
app.set('view engine', 'ejs');
app.set('views', './views');

/* Configurando o diretório que serve arquivos estáticos.*/
app.use(express.static('public'));



app.listen(port, listenHandler);





function listenHandler(){
    console.log(`Escutando na porta ${port}!`);
}