const client = require('./client');

async function init() {
  await client.set('msg:6', 'Hey from node js');
  const result = await client.get('msg:6');
  console.log('result', result);
}

init();
