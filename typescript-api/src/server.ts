import { app } from './app';

const PORT = 4000;

const server = app.listen(PORT, () => console.log(`App ouvindo a porta ${PORT} ⚡`));

process.on('SIGINT', () => {
    server.close();
    console.log('App finalizado 🔺')
})
