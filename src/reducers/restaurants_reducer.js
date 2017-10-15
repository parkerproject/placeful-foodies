import { FETCH_RESTAURANTS } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_RESTAURANTS:
      return {};
    default:
  }

  return state;
}
