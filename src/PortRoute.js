const express = require('express');
const router = express.Router();
/* importando o modelo */
const modelo = require('./models/modelos');
var Projeto = modelo.Projeto; //Vinculação de tipo


router.get("/", (req,res)=>{
    res.render('index.ejs');

});

/* rota para acesso a pagina sobre.*/
router.get("/sobre", (req,res)=>{
    res.render('sobre.ejs');

});

/* rota para acesso a pagina contato.*/
router.get("/contato", (req,res)=>{
    res.render('contato.ejs');

});
router.get("/projeto", (req,res)=>{
        /* dados mockados*/
        let projeto_1 = new Projeto("Minha Jornada","software","Java", "16/11/2020", "07/12/2021",'https://github.com/Barbara-BB/Minha-Jornada');    
        let projeto_2 = new Projeto("SkillShare","software","Java", "17/05/2021", "17/06/2021",'https://github.com/Barbara-BB/API-RGBA');
        let projeto_3 = new Projeto("TecSoja","software","JavaScript", "15/04/2021", "13/06/2021",'https://github.com/ThomasPalma1/FatecAPI-04');
        let projeto_4 = new Projeto("Alo Cidadão","software","JavaScript e Python", "09/08/2021", "Em execução",'https://github.com/ThomasPalma1/FatecAPI-05');

        let projetos = [];
        projetos.push(projeto_1);
        projetos.push(projeto_2);
        projetos.push(projeto_3);
        projetos.push(projeto_4);

    res.render('projeto.ejs',{lista_projetos: projetos});

});

module.exports = router;