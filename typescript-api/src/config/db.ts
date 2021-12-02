import { createConnection } from 'typeorm';

export const connection = async () => {
  const connection = await createConnection();
  console.log(`App conectado ao DB ${connection.options.database} 📦`);

  process.on('SIGINT', async () => {
    await connection.close();
    console.log(`Conexão ao DB fechada 🔺`);
  });
};
