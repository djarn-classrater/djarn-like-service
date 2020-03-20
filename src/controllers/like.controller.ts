import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import { Like } from '../models';
import { LikeRepository } from '../repositories';

export class LikeController {
  constructor(
    @repository(LikeRepository)
    public likeRepository: LikeRepository,
  ) { }

  @post('/likes', {
    responses: {
      '200': {
        description: 'Like model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Like) } },
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Like, {
            title: 'NewLike',
            exclude: ['id', 'date'],
          }),
        },
      },
    })
    like: Omit<Like, 'id'>,
  ): Promise<Like> {
    return this.likeRepository.create(like);
  }

  @get('/likes/count', {
    responses: {
      '200': {
        description: 'Like model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.number('reviewId') reviewId: number,
  ): Promise<Count> {
    return this.likeRepository.count({ reviewId });
  }

  @get('/likes', {
    responses: {
      '200': {
        description: 'Array of Like model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Like, { includeRelations: true }),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.string('studentId') studentId?: string,
    @param.query.number('reviewId') reviewId?: number,
  ): Promise<Like[]> {
    return this.likeRepository.find({
      where: {
        studentId,
        reviewId,
      },
    });
  }

  @patch('/likes', {
    responses: {
      '200': {
        description: 'Like PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Like, { partial: true }),
        },
      },
    })
    like: Like,
    @param.query.object('where', getWhereSchemaFor(Like)) where?: Where<Like>,
  ): Promise<Count> {
    return this.likeRepository.updateAll(like, where);
  }

  @get('/likes/{id}', {
    responses: {
      '200': {
        description: 'Like model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Like, { includeRelations: true }),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(Like))
    filter?: Filter<Like>,
  ): Promise<Like> {
    return this.likeRepository.findById(id, filter);
  }

  @patch('/likes/{id}', {
    responses: {
      '204': {
        description: 'Like PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Like, { partial: true }),
        },
      },
    })
    like: Like,
  ): Promise<void> {
    await this.likeRepository.updateById(id, like);
  }

  @put('/likes/{id}', {
    responses: {
      '204': {
        description: 'Like PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() like: Like,
  ): Promise<void> {
    await this.likeRepository.replaceById(id, like);
  }

  @del('/likes/{id}', {
    responses: {
      '204': {
        description: 'Like DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.likeRepository.deleteById(id);
  }
}
