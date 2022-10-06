import * as express from 'express';

const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.send('Hello World');
});
app.get('/bsm', (request, response) => {
    response.send('=====Mentalidades===== <br>* Persistência <br>* Responsabilidade Pessoal <br>* Orientação ao Futuro <br>* Mentalidade de Crescimento <br>=====Habilidades=====<br> * Trabalho em Equipe <br>* Atenção aos Detalhes <br>* Proatividade <br>* Comunicação');
});
app.get('/objetivos', (request, response) => {
    response.send('Buscar estar aprendendo os fundamentos de banco de dados e API e expandir meus conhecimentos através de estudos pessoais.');
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}!`)
    }); 
