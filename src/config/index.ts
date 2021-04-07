const { env } = process

export default {
  port: env.PORT || 3250,
  env: env.NODE_ENV || 'development',
  databaseURI: env.NODE_ENV === 'test'
    ? 'sqlite://:memory:'
    : env.DATABASE_URI || 'mysql://albacross:albacross@mysql:3306/albacross',
}
