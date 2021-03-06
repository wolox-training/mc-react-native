export const internalServerError = new Promise((resolve) =>
  resolve({
    data: {
      status: 500,
      error: 'Internal Server Error'
    },
    ok: false,
    status: 500,
    problem: 'SERVER_ERROR'
  })
);

export const successApiCall = new Promise((resolve) =>
  resolve({
    data: {},
    headers: { 'access-token': 'fakeToken123' },
    ok: true,
    status: 200,
    problem: null
  })
);
