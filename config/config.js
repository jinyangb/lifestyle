module.exports = {
  development: {
    database: 'lifestyle_development',
    dialect: 'postgres'
  },
  test: {
    database: 'lifestyle_development',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
