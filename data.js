import bcrypt from 'bcrypt'
const saltRounds = 10;
const pass1 = '123456';

const data = {
  //creating the top 8 products that will be shown on the main page when the user first visits the site
  //added _id so that each product would have unique identifier
  // users: [
  //   {
  //     name: 'Angie',
  //     email: 'admin@example.com',
  //     password: bcrypt.hashSync('123456', saltRounds),
  //     isAdmin: true
  //   },
  //   {
  //     name: 'Jane',
  //     email: 'user@example.com',
  //     password: bcrypt.hashSync('123456', saltRounds),
  //     isAdmin: false, 
  //   }
  // ],
  products: [
    {
      // _id: '1',
      name: 'Albedo Bushiroad Sleeves - Overlord IV Vol. 3522',
      slug: 'albedo-sleeves-3522',
      category: 'card sleeve',
      image: '/images/albedo-3522.jpg',
      price: 24.99,
      listDate: 'August 25th, 2023',
      countInStock: 3,
      description: 'Albedo Bushiroad High Grade Sleeves - Overlord IV Vol. 3522. 75ct Sleeves , standard size (weiss, pokemon, Magic the gathering, One Piece)'
    },
    {
      // _id: '2',
      name: 'Shalltear Bushiroad Sleeves - Overlord IV Vol.3523',
      slug: 'shalltear-sleeves-3523',
      category: 'card sleeve',
      image: '/images/shalltear-3523.jpg',
      price: 34.99,
      listDate: 'August 25th, 2023',
      countInStock: 3,
      description: 'Shalltear Bushiroad Card Sleeve Collection High Grade Vol.3523 Overlord IV. 75ct Sleeves , standard size (weiss, pokemon, Magic the gathering, One piece)'
    },
    {
      // _id: '3',
      name: 'Albedo Bushiroad Rubber Mat Collection V2 Vol.595',
      slug: 'albedo-playmat-595',
      category: 'playmat',
      image: '/images/albedo-pm-595.jpg',
      price: 54.99,
      listDate: 'August 26th, 2023',
      countInStock: 4,
      description: 'Albedo Bushiroad Rubber Mat Collection V2 Vol.595 Overlord IV ED Ver. Playmat.'
    },
    {
      // _id: '4',
      name: 'Overlord IV Key Visual Bushiroad Sleeves Vol.3520',
      slug: 'overlord-sleeves-3520',
      category: 'card sleeve',
      image: '/images/overlord-3250.jpg',
      price: 24.99,
      listDate: 'August 26th, 2023',
      countInStock: 6,
      description: 'Overlord IV Key Visual Bushiroad Sleeve Collection High Grade Vol.3520.'
    },
    {
      // _id: '5',
      name: 'Albedo Pt. 2 Overlord IV Bushiroad Sleeves Vol.3524 ',
      slug: 'albedo-sleeves-3524',
      category: 'card sleeve',
      image: '/images/albedo-3524.jpg',
      price: 24.99,
      listDate: 'August 26th, 2023',
      countInStock: 6,
      description: 'Albedo Pt. 2 Overlord IV Bushiroad Sleeve Collection High Grade Vol.3524'
    },
    {
      // _id: '6',
      name: 'Ainz Key Visual Bushiroad Rubber Mat Collection V2 Vol.593',
      slug: 'ainz-playmat-593',
      category: 'playmat',
      image: '/images/ainz-pm-593.jpg',
      price: 42.99,
      listDate: 'August 26th, 2023',
      countInStock: 3,
      description: 'Ainz Bushiroad Rubber Mat Collection V2 Vol.594 Overlord IV ED Ver. Playmat.'
    },
    {
      // _id: '7',
      name: 'Key Visual Bushiroad Rubber Mat Collection V2 Vol.592',
      slug: 'overlord-playmat-592',
      category: 'playmat',
      image: '/images/overlord-pm-592.jpg',
      price: 42.99,
      listDate: 'August 26th, 2023',
      countInStock: 4,
      description: 'KEY visual z Bushiroad Rubber Mat Collection V2 Vol.592 Overlord IV ED Ver. Playmat.'
    },
    {
      // _id: '8',
      name: 'High School DxD Born Akeno Card Sleeve Mat Series No.MT212',
      slug: 'akeno-sleeves-mt212',
      category: 'card sleeve',
      image: '/images/akeno-mt212.jpg',
      price: 32.99,
      listDate: 'August 26th, 2023',
      countInStock: 4,
      description: 'Akeno High School DxD Sleeves 65 CT.), Movic Weiss Schwarz'
    },
  ],
};

export default data;