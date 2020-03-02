import {DefaultCrudRepository} from '@loopback/repository';
import {Like, LikeRelations} from '../models';
import {LikeDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class LikeRepository extends DefaultCrudRepository<
  Like,
  typeof Like.prototype.id,
  LikeRelations
> {
  constructor(
    @inject('datasources.like') dataSource: LikeDataSource,
  ) {
    super(Like, dataSource);
  }
}
