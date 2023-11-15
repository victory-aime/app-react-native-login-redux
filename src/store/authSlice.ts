/*authSlice.ts

import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;


// authSlice.ts

/*import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../services/modules/users'; // Adjust the import path based on your file structure
import { RootState } from '@reduxjs/toolkit/dist/query/core/apiState';

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticatedUser: (state, action: PayloadAction<AuthState>) => {
      // This assumes that the payload is an object with isAuthenticated and user properties
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
    },
  },
});

export const { setAuthenticatedUser } = authSlice.actions;
export default authSlice.reducer;

// Selector to get the auth state
export const selectAuth = (state: RootState) => state.auth;*/

// authReducer.js

/*const initialState = {
  isAuthenticated: false,
  token: null,
  // Autres informations d'authentification
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      };
    // Gérer d'autres actions d'authentification ici
    default:
      return state;
  }
};

export default authReducer;*/



import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  username: string | null; 
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  username: null,

};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<{ token: string; username: string }>) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.username = action.payload.username; 
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.username = null; 
    },

  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
