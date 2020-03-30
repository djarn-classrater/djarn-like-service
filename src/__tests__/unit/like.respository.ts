import {testLikeDb} from '../fixture/test-like-db.datasource';
import {LikeRepository} from '../../repositories';
import chai, {expect} from 'chai';
import asPromised from 'chai-as-promised';

chai.use(asPromised);

const dataMockup = {
  reviewId: 1,
  studentId: '600610773',
};

describe('CRUD test', () => {
  let repository: LikeRepository;
  before('Setup Database', async () => {
    repository = new LikeRepository(testLikeDb);
  });

  after('Clear Database', async () => {
    await repository.deleteAll();
  });

  it('Create Like', async () => {
    const response = await repository.create(dataMockup);
    expect(response).to.contains(dataMockup);
  });

  it('Create Duplicate Like ( Should Error )', async () => {
    expect(repository.create(dataMockup)).to.rejectedWith(/ER_DUP_ENTRY/);
  });
});
