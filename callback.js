import axios from 'axios';

/* fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => {
    console.log('Users Yüklendi', users);
  });

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(data => data.json())
  .then(post => console.log('Postlar yüklendi', post)); */

/* async function getData() {
  const data = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
  console.log(data);
}

getData(); */

/* const getData = async () => {
  const { data: users } = await axios('https://jsonplaceholder.typicode.com/users');

  const { data: post1 } = await axios('https://jsonplaceholder.typicode.com/posts/1');
  const { data: post2 } = await axios('https://jsonplaceholder.typicode.com/posts/2');
  console.log(users, post1, post2);
};

getData(); */

/* const getComments = () => {
  return new Promise((resolve, reject) => {
    resolve('Comments');
  });
};
getComments()
  .then(data => console.log(data))
  .catch(e => console.log(e));
 */

const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios('https://jsonplaceholder.typicode.com/users');

    resolve(data);
    reject('Kardeşim sorun var');
  });
};

const getPost = post_id => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios('https://jsonplaceholder.typicode.com/posts/' + post_id);

    resolve(data);
    // reject('Bir sorun oluştu');
  });
};

/* (async () => {
  try {
    const users = await getUsers();

    const post = await getPost(1);

    console.log(users);
    console.log(post);
  } catch (e) {
    console.log(e);
  }
})(); */

Promise.all([getUsers(), getPost(1)])
  .then(console.log)
  .catch(console.log);
