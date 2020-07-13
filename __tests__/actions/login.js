import actionCreators, { actions } from '@redux/login/actions';
import api from '@config/api';

import { internalServerError, successApiCall } from '@mocks/responses';
import { store } from '@mocks/store';

describe('testing actions with an api mock', () => {
  beforeEach(() => {
    store.clearActions();
  });
  test('test dispatch error', async () => {
    api.post = jest.fn().mockReturnValue(internalServerError);
    const expectedActionsTypes = [actions.SIGN_IN, actions.SIGN_IN_FAILURE];
    await store.dispatch(actionCreators.signIn('a@a.com', 'password'));
    const actionTypes = store.getActions().map((action) => action.type);
    expect(actionTypes).toEqual(expectedActionsTypes);
    expect(api.post.mock.calls).toHaveLength(1);
  });
  test('test dispatch Success', async () => {
    api.post = jest.fn().mockReturnValue(successApiCall);
    const serviceSpy = jest.spyOn(api, 'post');
    const expectedActionsTypes = [actions.SIGN_IN, actions.SIGN_IN_SUCCESS];
    await store.dispatch(actionCreators.signIn('a@a.com', 'password'));
    const actionTypes = store.getActions().map((action) => action.type);
    expect(actionTypes).toEqual(expectedActionsTypes);
    expect(api.post.mock.calls).toHaveLength(1);
    expect(serviceSpy).toHaveBeenCalled();
  });
});
