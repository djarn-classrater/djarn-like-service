import {Entity, model, property} from '@loopback/repository';

@model()
export class Like extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  reviewId: number;

  @property({
    type: 'string',
    required: true,
  })
  studentId: string;

  @property({
    type: 'date',
    default: () => new Date(),
  })
  date?: string;

  constructor(data?: Partial<Like>) {
    super(data);
  }
}

export interface LikeRelations {
  // describe navigational properties here
}

export type LikeWithRelations = Like & LikeRelations;
