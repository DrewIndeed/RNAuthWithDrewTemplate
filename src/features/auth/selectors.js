// get email
export const emailSelector = state => state.auth?.asyncResponse?.email;

// get isAuthenticated
export const authenticatedSelector = state => state.auth?.isAuthenticated;
