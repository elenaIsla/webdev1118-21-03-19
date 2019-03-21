import faker from 'faker';

export const generateTask = () => {
  return {
    title: faker.lorem.sentence(),
    id: faker.random.uuid(),
    isDone: false,
  } 
}

// import { generateTask } from './'

// export default generateTask;
// import generateTask from './'

