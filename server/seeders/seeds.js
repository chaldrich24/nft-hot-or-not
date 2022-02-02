const { faker } = require('@faker-js/faker');

const db = require('../config/connection');
const { Nft, User } = require('../models');

const nfts = [
  {
    "nftName": "Cool Cat #4814",
    "imageUrl": "https://lh3.googleusercontent.com/uQmS-2SW7vOB2skwJBKJPAjVtOuGtWBZKJZ5rl45DMCPyji0jrNKw0pJBdiuOKNydmt9JwjY6d7Zww8yQe8ftBgmxxPf2DXHjqaZ=w600",
  },
  {
    "nftName": "Cool Cat #9189",
    "imageUrl": "https://lh3.googleusercontent.com/eYEwDyojBF3MO4HIacxfjRHOpj8OOu87SadpeRaJQYDf7KDdH0N7EIQIUF-W06GZim1-V1UjWTEPgvgvGrBf7_DwHbLp70gg_a0DTA=s0",
  },
  {
    "nftName": "#775",
    "imageUrl": "https://lh3.googleusercontent.com/deIBeQ-SOix4NSlCcX0n0mKeISZtuxza6AkJqdBpyAQMOOyImGjEbRIP46yO3_-WspXhs10_nmNNJatIt3lwokDAvhSzi2Yv8vg5=s0",
  },
  {
    "nftName": "#3532",
    "imageUrl": "https://lh3.googleusercontent.com/tmDxtrM7y8dGsdMAZ-B598Y-GXkA_Eh0zOPhUMSKsKV71easUhB9_jlCUMMcgBgN0NlCNX6GqJR1HSnRW1_Qe3qrVgBmuMSQbsLUNw=w600",
  },
  {
    "nftName": "Fancy Bear #1723",
    "imageUrl": "https://lh3.googleusercontent.com/1YPUuosI4dyMZ2SFI5AUMXI8k_wIWggTn8Nu5o05dJl0waZM0psajYm21v_Xm_-IJTxmzA525b3zSM3ZzoYkNKvVfJu5Pw-1HcwnUQ=w600",
  },
  {
    "nftName": "Fancy Bear #7031",
    "imageUrl": "https://lh3.googleusercontent.com/Y9tek5GQkmcsIsDynLKbHvukmYrUhXkFqKRlsi4TgHOCde-w5pWyac8zDvLC9Z_yzBDm6x43niGMjjqU1qH77_ZUlE1sDW5YPW6TdZc=w600",
  },
  {
    "nftName": "Miner #7888",
    "imageUrl": "https://lh3.googleusercontent.com/B5ljxcrqtUb-JrPPbQNAihdRCM4R3sH_WMfzqduNbfr0MZ0pxBYnwTnJygu2D0RBvc-z3GZeh7et7hq0tMbPRK5PNVARg84co4zXXA=w600",
  },
  {
    "nftName": "Snack Time",
    "imageUrl": "https://lh3.googleusercontent.com/VoML45pMEjlXtvRVTLhd1Var0Ra_fW86PIRH-1lIoYQ98b0K6RZFW33g7nMJLVLUEzS3uSPZqxZ9K7yKJiw-ISzizIcw2tmtegHa7Q=w600",
  },
  {
    "nftName": "Pit Stop",
    "imageUrl": "https://lh3.googleusercontent.com/aYyijx9JqZLsBqBPV0jn1UcDLk74R-yJzA9z64vIW7bj6tD-apZ6wzvTyZ2Qr90d6JlXn_P7mwFVbkwfDKLifUHW3mEpdROWJ_GcOw=w600",
  },
  {
    "nftName": "Arcus",
    "imageUrl": "https://lh3.googleusercontent.com/Mas5J38DZdjT8oPwYP71Ltp1pZKPSGypm_HWsKIVdxWSaFj5JrAHfmvA1EBMR1AU-9a5MwP3sSMyQ08e0SXB2f54RBMELnpwotHz=w600",
  },
  {
    "nftName": "Kent Brockman Hasbulla",
    "imageUrl": "https://lh3.googleusercontent.com/tGZ8clWjLBV02Ioz36DgGCgnx5rEUOH7h7U8QJuunD-J4EKqp7YQ3hdGzTNi-6gt3F8cqhKRFRjfvChi0JicQbdTp3_JwzHVErk_Vw=w600",
  },
  {
    "nftName": "Dreamy",
    "imageUrl": "https://lh3.googleusercontent.com/XwgOY5oMdnSyrluJu9nSbCCbB2hqFYlodorGofEKYfGSvd8P7n_OF20AJheTKe3DIZymA66zjhq1w2v76AtNkmVskLKlfygqkt8_=w600",
  },
  {
    "nftName": "Joy of Pizza",
    "imageUrl": "https://lh3.googleusercontent.com/L8348gMEVC73DVBLrXQTq2mviWfHHUzsOKtxmjFY5QJT487n7lLMYXLLGo0T83gM3CjxY5sieJ-yColPU2eR6VmC4A=w600",
  },
  {
    "nftName": "Artvatar #5273",
    "imageUrl": "https://lh3.googleusercontent.com/h7_xU-sUM9jvqMteZVluvesQEGPRGtpH3tjvgkOt5TkiUo-QoeyS4ERsdTSpO3Bg6x4ACcEVZk9dSrXIC-i8DAhMb2i2g_zJ-ekWDYk=w600",
  },
  {
    "nftName": "Terry Crews",
    "imageUrl": "https://lh3.googleusercontent.com/jCTLLqeqoeh0HIQ9mM7EoIhSxEeDDlJzzv8Ap5MkQqzkCB2vIGMInoZvvx3mA5efGNp2zk_G8P0gZVKzRQH8DTeK_kDGqcvN-SWqIw=w600",
  },
  {
    "nftName": "Doodle #3423",
    "imageUrl": "https://lh3.googleusercontent.com/4bKioDNwioekVjuzIqckjt6EhyQBW-gkPClWnTnyHcAN3PWdFKxRURV8CD88wT6VEVmAye1FHrg_mpbEx61N8w7u3CrHN53581PW=w600",
  },
  {
    "nftName": "Land in Sandbox metaverse",
    "imageUrl": "https://lh3.googleusercontent.com/s6xN9lv_cI7KVxnKK3wwxBvZlwzGCPEwea2YW7WNWjSXxxeWtMgodOQUlV_T7sRybUwYbVrJLQxn6c6n9sq-ggJVN2EMqEE0Ov676Q=w600",
  },
  {
    "nftName": "Lucky Goat",
    "imageUrl": "https://lh3.googleusercontent.com/fnRiIlywQiJHN8NCJqqk9g0DnUadHIYEpLqoZUqVuS29BobiEB61CY0KEx_D2uOAN-nMSm8n2ghkUFDhMjxZBo1OelmV2iMRC5eh8OY=w600",
  },
  {
    "nftName": "Ross Ulbricht Genesis Collection",
    "imageUrl": "https://storage.opensea.io/files/75a674ab0f5d9f01f761c87dea112e6e.png",
  },
  {
    "nftName": "Archtype #397",
    "imageUrl": "https://lh3.googleusercontent.com/m--FW4ri9s6lLttI0Y-PwpSSufjaGH-01Co0bDMeaUg2r2WAT7Z4f6g201EeR1FJihIONchZ_8UnGFkFFYoMkh0Wx4l8FuNiH94w=w600",
  },
  {
    "nftName": "Parallel Masterpiece",
    "imageUrl": "https://lh3.googleusercontent.com/Dy7owTRAPLgYZ8ownJKHWbQgrdhjErFZCgQMpPbc0simmQcBaFiT7MG_yZYHxJ-u6KYQxk0xVfOG5BAqWkcpckXyDQwTZtSUJCLHTB0=w600",
  },
  {
    "nftName": "Autumnal Ambiguous Monsters",
    "imageUrl": "https://lh3.googleusercontent.com/sjvP-Phpy1EMVJu8ufR94zsEna5VJHCxd3vuukZ7Fa_feLZP6JsBC00cRGARXiuqWu4-darWPh_vFr4yRMs1tvs-=w600",
  },
  {
    "nftName": "Behind the king",
    "imageUrl": "https://storage.opensea.io/files/784adb92a5419484de1e69fcf2c8a59f.jpg",
  }

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
    const nftName = nfts[i].nftName;
    const creator = faker.lorem.words(Math.round(Math.random() * 20) + 1);
    const owner = faker.lorem.words(Math.round(Math.random() * 20) + 1);
    const imageUrl = nfts[i].imageUrl;

    const price = Math.random() * 50;
    const likes = Math.floor(Math.random() * 20);
    const nonLikes = Math.floor(Math.random() * 10);

    const createdNft = await Nft.create({ nftName, creator, owner, price, likes, nonLikes, imageUrl });

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
