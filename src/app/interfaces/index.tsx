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
    client: string;
    uid: string;
    token: string | null;
    error: string | null;
    waitingResponse: boolean;
  };
}

export interface StorageLoginData {
  accessToken: string;
  client: string;
  uid: string;
}
