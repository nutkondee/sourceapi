module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '10.49.64.3'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'sourceapi'),
        username: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', '9W8ibVQbBl'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
