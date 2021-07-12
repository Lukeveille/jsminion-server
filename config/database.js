module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DB_HOST'),
        port: env.int('DB_PORT', 5432),
        database: env('DB_NAME', 'jsminion'),
        username: env('DB_USERNAME', 'postgres'),
        password: env('DB_PASSWORD'),
        ssl: env.bool('DB_SSL', false),
      },
      options: {}
    },
  },
});
