export default {
  name: 'like',
  connector: 'mysql',
  url: '',
  host: process.env.NODE_ENV === 'production' ? 'likeDb' : '10.148.0.2',
  port: process.env.NODE_ENV === 'production' ? 3306 : 3307,
  user: 'root',
  password: '1234',
  database: 'likes',
};
