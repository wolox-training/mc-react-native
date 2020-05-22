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
