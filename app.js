var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send("<html> <body> Portal IFMS Not&iacutecias</body></html>")
});
app.get('/cursos',function(req,res){
    res.send("<html> <body>IFMS Not&iacutecias de Cursos</body></html>");
});
app.get('/esportes',function(req,res){
    res.send("<html> <body> IFMS - Not&iacutecias de Esportes</body></html>");
});
app.get('/pesquisa',function(req,res){
    res.send("<html> <body> IMFS - Not&iacutecias de Pesquisas</body></html>")
});

app.listen(3000, function(){
    console.log("servidor rodando com express");
});