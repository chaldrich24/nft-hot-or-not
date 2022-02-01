const {faker} = require('@faker-js/faker');

const db = require('../config/connection');
const { Nft, User } = require('../models');

const imageUrls = [
  'url',
  'url'
]

db.once('open', async () => {
  await Nft.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create nfts
  let createdNfts = [];
  for (let i = 0; i < 20; i += 1) {
    const nftName = faker.lorem.words(Math.round(Math.random() * 20) + 1);
    const creator = faker.lorem.words(Math.round(Math.random() * 20) + 1);
    const owner = faker.lorem.words(Math.round(Math.random() * 20) + 1);
    const imageUrl = i;

    const price = Math.random() * 50;
    const likes = Math.random() * 10;

    const createdNft = await Nft.create({ nftName, creator, owner, price, likes, imageUrl });

    createdNfts.push(createdNft);
  }

  // create comments
  for (let i = 0; i < 50; i += 1) {
    const commentBody = faker.lorem.words(Math.round(Math.random() * 15) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username } = createdUsers.ops[randomUserIndex];

    const randomNftIndex = Math.floor(Math.random() * createdNfts.length);
    const { _id: nftId } = createdNfts[randomNftIndex];

    await Nft.updateOne(
      { _id: nftId },
      { $push: { comments: { commentBody, username } } },
      { runValidators: true }
    );
  }

  console.log('all done!');
  process.exit(0);
});
