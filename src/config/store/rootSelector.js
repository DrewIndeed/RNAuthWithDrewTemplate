import {createSelector} from '@reduxjs/toolkit';

// indi selectors
export const userSelector = state => state.auth;
export const messageSelector = state => state.message;

// combined selectors
export const rootSelector = createSelector(
  userSelector,
  messageSelector,
  (auth, message) => {
    return {
      auth,
      message,
    };
  },
);
