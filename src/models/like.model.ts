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
  review_id: number;

  @property({
    type: 'string',
    required: true,
  })
  student_id: string;

  @property({
    type: 'date',
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
