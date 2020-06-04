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
    token: string | null;
    error: string | null;
    waitingResponse: boolean;
  };
}
