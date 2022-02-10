module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'user_name',
  password: 'password',
  database: 'tasklist',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
