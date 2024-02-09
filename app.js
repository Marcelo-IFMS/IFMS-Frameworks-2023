var app = require('./config/server');

app.get('/',function(req,res){
    res.render('home/index');
});
app.get('/cursos',function(req,res){
    res.render("secao/cursos");
});
app.get('/esportes',function(req,res){
    res.render("secao/esportes");
});
app.get('/pesquisa',function(req,res){
    res.render("secao/pesquisa");
});
app.get('/formulario_inclusao_noticias',function(req,res){
    res.render("admin/form_add_noticia");
});
app.get('/noticias',function(req,res){
    res.render("noticias/noticias");
});

app.listen(3000, function(){
    console.log('Servidor ON');
});