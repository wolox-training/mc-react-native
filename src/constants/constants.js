const avatar1 = require('../app/assets/avatars/img_user1.png');
const avatar2 = require('../app/assets/avatars/img_user2.png');

export const LibraryData = [
  {
    id: 1,
    author: 'Emmie Thiel',
    title: 'Ring of Bright Water',
    genre: 'Short story',
    publisher: 'Butterworth-Heinemann',
    year: '1968',
    image_url: null,
  },
  {
    id: 2,
    author: 'Christopher Pike',
    title: 'Scavenger Hunt',
    genre: 'other',
    publisher: 'Pocket Books',
    year: '1989',
    image_url: null,
  },
  {
    id: 3,
    author: 'Lois Duncan',
    title: 'Locked in time',
    genre: 'suspense',
    publisher: 'Little, Brown',
    year: '1985',
    image_url: 'http://wolox-training.s3.amazonaws.com/uploads/6942334-M.jpg',
  },
  {
    id: 4,
    author: 'Christopher Pike',
    title: 'Scavenger Hunt',
    genre: 'suspense',
    publisher: 'Pocket Books',
    year: '1989',
    image_url: 'http://wolox-training.s3.amazonaws.com/uploads/6963511-M.jpg',
  },
  {
    id: 5,
    author: 'Christopher Pike',
    title: 'Scavenger Hunt',
    genre: 'suspense',
    publisher: 'Pocket Books',
    year: '1989',
    image_url: 'http://wolox-training.s3.amazonaws.com/uploads/6963511-M.jpg',
  },
  {
    id: 6,
    author: 'Paula Hawkins',
    title: 'The Girl on the Train\n',
    genre: 'suspense',
    publisher: 'Riverhead Books',
    year: '2015',
    image_url: 'http://wolox-training.s3.amazonaws.com/uploads/content.jpeg',
  },
  {
    id: 7,
    author: 'Anthony Doerr',
    title: 'All the Light We Cannot See',
    genre: 'suspense',
    publisher: 'Scribner',
    year: '2014',
    image_url: 'http://wolox-training.s3.amazonaws.com/uploads/content.jpeg',
  },
  {
    id: 8,
    author: 'John Katzenbach',
    title: 'The analyst',
    genre: 'thriller',
    publisher: 'Ballantine Books',
    year: '2003',
    image_url:
      'http://wolox-training.s3.amazonaws.com/uploads/el-psicoanalista-analyst-john-katzenbach-paperback-cover-art.jpg',
  },
  {
    id: 9,
    author: 'Andy Weir',
    title: 'The Martian',
    genre: 'fiction',
    publisher: 'Crown Publishing Group',
    year: '2011',
    image_url: 'http://wolox-training.s3.amazonaws.com/uploads/41DNuJfahyL._SX322_BO1_204_203_200_.jpg'
  }
];

export const imageMissing = require('../app/assets/image-missing.png');

export const Comments = [
  {
    id: 1,
    name: 'Roberto',
    lastname: 'Gallo',
    comment:
      'Es un libro fantastico que te llena el alma de alegria, una cosa extraordinaria jamás leída. 100% recomendado',
    avatarImage: avatar1
  },
  {
    id: 2,
    name: 'Juan',
    lastname: 'Alberti',
    comment:
      'Se ve bueno pero no tuve el tiempo de terminarlo, el autor te mete como 100 páginas solo para describirte un árbol. En fin, igual lo voy a termimnar algún día',
    avatarImage: avatar2
  },
  {
    id: 3,
    name: 'María',
    lastname: 'Castañera',
    comment:
      'Es maravilloooooso las cantidad de adjetivos que usa para referirse a una simple flor, deberia ser poeta.',
    avatarImage: avatar1
  },
  {
    id: 4,
    name: 'Ana',
    lastname: 'Sanchez',
    comment: 'Quiero que me devuelvan el tiempo invertido en leer esto, tiene el peor final EVER',
    avatarImage: avatar2
  },
  {
    id: 5,
    name: 'Marcelo',
    lastname: 'Castrobarro',
    comment:
      'Y la parte 2 para cuando?? A ver si el author le mete ganas que dejó el final más abierto que las nalgas de Brasil en la semi mundial 2014',
    avatarImage: avatar1
  }
];
