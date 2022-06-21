import {createSelector} from '@reduxjs/toolkit';

export const userSelector = state => state.auth;
export const messageSelector = state => state.message;

export const mainSelector = createSelector(
  userSelector,
  messageSelector,
  (auth, message) => {
    return {
      auth,
      message,
    };
  },
);
