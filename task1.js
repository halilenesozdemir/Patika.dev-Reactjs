import axios from 'axios';

export const getUser = async user_id => {
  const { data: user } = await axios('https://jsonplaceholder.typicode.com/users/' + user_id);
  const { data: post } = await axios('https://jsonplaceholder.typicode.com/posts?id=' + user_id);

  console.log(user);
  console.log(post);
};
