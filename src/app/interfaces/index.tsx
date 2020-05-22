export interface BookDetailInterface {
  title: string;
  author: string;
  imageUri: string | null;
  year: string;
  genre: string;
}

export interface Books {
  id: number;
  author: string;
  title: string;
  genre: string;
  publisher: string;
  year: string;
  image: string | null;
}
// "author": "Tara Westover", "created_at": "2019-02-25T20:38:50.380Z", "genre": "Literary fiction", "id": 8, "image": [Object], "publisher": "Random House Publishing Group", "title": "Educated: A Memoir", "updated_at": "2019-02-25T20:38:50.380Z", "year": "2019"}
export interface State {
  bookReducer: {
    books: Books;
    booksLoading: boolean;
  };
  loginReducer: {
    token: string;
    client: string;
    uid: string;
    error: string;
    waitingResponse: boolean;
  };
}

export interface StorageLoginData {
  accessToken: string;
  client: string;
  uid: string;
}
