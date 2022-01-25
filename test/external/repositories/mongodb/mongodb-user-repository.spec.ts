import { MongoHelper } from '@/external/respositories/mongodb/helper'
import { MongodbUserRepository } from '@/external/respositories/mongodb/'

describe('Mongodb user repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    await MongoHelper.clearCollection('users')
  })

  test('when user is added, it should exist', async () => {
    const userRepository = new MongodbUserRepository()
    const user = {
      name: 'Any name',
      email: 'any@mail.com'
    }
    await userRepository.add(user)
    expect(await userRepository.exists(user)).toBeTruthy()
  })

  test('find all users should return all added users', async () => {
    const userRepository = new MongodbUserRepository()
    await userRepository.add({
      name: 'Any name',
      email: 'any@mail.com'
    })
    await userRepository.add({
      name: 'Second name',
      email: 'second@mail.com'
    })
    const users = await userRepository.findAllUsers()
    expect(users[0].name).toEqual('Any name')
    expect(users[1].name).toEqual('Second name')
  })
})
