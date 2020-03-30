import {LikeDataSource} from '../../datasources';

export const testLikeDb = new LikeDataSource({
  name: 'likes',
  connector: 'mysql',
  uri: '',
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: '1234',
  database: 'likes',
});
