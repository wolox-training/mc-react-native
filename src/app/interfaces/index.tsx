export interface BookDetailInterface {
  title: string;
  author: string;
  imageUri: string | null;
  year: string;
  genre: string;
}

export interface Books {
  fullComments: boolean;
}

export interface State {
  bookReducer: { fullComments: Books };
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
