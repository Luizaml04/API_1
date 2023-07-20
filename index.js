const restify = requere('restify');
const errors = require('restify-errors');

const servidor = restify.createServer({
    name: 'loja',
    version: '1.0.0.'
});

servidor.use(restify.plugins.acceptParser(servidor.acceptable));
servidor.use(resyify.plugins.queryParser());
servidor.use(restify.plugins.queryParser());

servidor.listen(8001, function() {
    console.log("%s execute em %s", servidor.name, servisor.url);
});

var knex = require('knex') ({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'loja_dsapi '
    }
})
    servidor.get('/',  (req, res, next) => {
        res.send('Bem-Vindo(a) a API Loja! ' );
    });  
    
    servidor.get('/produto',  (req, res, next) => {
        knex('produtos' ).then ((dados) =>{
            res.send(dados);
        }, next);
    }, next);

    servidor.get('/produtos/:id',  (req, res, next) => {
        const id = req.params.idProd;
        knex('produtos' )
            .where('id', idProduto)
            .first()
            .then( (dados) =>{
                if(!dados ){
                    return res.send(errors.BadRequestError('Produto Não encontrado'));
                }
                res.send(dados);
            }, next);
        });
       
    servidor.get('/produtos',  (req, res, next) => {
        const idProduto = req.params.idProd;
        knex('produtos' )
            .where('id' , idProdutos)
            .delete( )
            .then ((dados) =>{
                if( !dados)(
                    return res.send(
                      new.errors.BadRequestError('Produtos não encontrados ' ));

                )
                res.send(dados);
            }, next);
        });
       