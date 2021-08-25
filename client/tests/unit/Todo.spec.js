import axios from 'axios';
import { shallowMount } from '@vue/test-utils';

import Todo from '@/components/Todo.vue';

const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);

const apiUrl = process.env.VUE_APP_API_URL;

const getData = [
  {
    _id: '61228ecf0bdae90d2c7ba589',
    todo: 'abbas',
    __v: 0,
  },
  {
    _id: '61228ee2675f4c435ca28d4f',
    todo: 'test2',
    __v: 0,
  },
  {
    _id: '61228f38b747c547941ccda2',
    todo: 'test3',
    __v: 0,
  },
];

const postData = [
  {
    _id: '612391eec7f6dc4b4481b029',
    todo: 'test',
    __v: 0,
  },
];

describe('Mount test', () => {
  it('Is it mount', () => {
    const wrapper = shallowMount(Todo);
    expect(wrapper.exists()).toBeTruthy();
  });
});

describe('Todo test', () => {
  afterAll(() => {
    mock.restore();
  });
  beforeEach(() => {
    mock.reset();
  });

  it('Load todos', async () => {
    mock.onGet(apiUrl).reply(200, getData);

    const wrapper = shallowMount(Todo);
    await wrapper.vm.getTodos();
    const todos = wrapper.findAll('li');

    expect(todos).toHaveLength(3);
  });

  it('Post new todos', async () => {
    mock.onPost(apiUrl).reply(200, postData);
    const wrapper = shallowMount(Todo, {
      data() {
        return {
          newTodo: {
            todo: 'test',
          },
        };
      },
    });

    await wrapper.vm.addTodo();
    // eslint-disable-next-line no-underscore-dangle
    const err = wrapper.vm._data.err.length;
    expect(err).toBe(0);
  });
});
