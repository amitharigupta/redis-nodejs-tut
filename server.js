const express = require('express');
const axios = require('axios').default;
const client = require('./client');

const PORT = 3000;
const app = express();

app.get('/', async (req, res) => {

  const cacheValue = await client.get('todos');

  if (cacheValue) {

    return res.json({ status: 200, data: JSON.parse(cacheValue) });
  } else {
    const { data } = await axios.get('https://jsonplaceholder.org/posts');
    await client.set('todos', JSON.stringify(data));
    await client.expire('todos', 30);
    return res.json({ status: 200, data: data });
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});


