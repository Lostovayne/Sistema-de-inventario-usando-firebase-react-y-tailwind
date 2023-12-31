import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state

export interface AuthProps {
    status: string;
    displayName: string | null | undefined;
    email: string | null | undefined;
    photoURL: string | null | undefined;
    uid: string | undefined;
    errorMessage?: string;
}

export const Status = {
    checking: "checking",
    authenticated: "authenticated",
    notAuthenticated: "not-authenticated",
};

// Define the initial state using that type
const initialState: AuthProps = {
    status: Status.checking,
    displayName: "",
    email: "",
    photoURL: "",
    uid: "",
    errorMessage: "",
};

export const AuthSlice = createSlice({
    name: "auth",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        login: (state, action: PayloadAction<AuthProps>) => {
            state.status = action.payload.status;
            state.displayName = action.payload.displayName;
            state.email = action.payload.email;
            state.photoURL = action.payload.photoURL;
            state.uid = action.payload.uid;
            state.errorMessage = action.payload.errorMessage;
        },

        logout: (state, { payload: { errorMessage } }) => {
            state.status = Status.notAuthenticated;
            state.displayName = "";
            state.photoURL = "";
            state.uid = "";
            state.errorMessage = errorMessage;
        },

        checkingCredentials: (state) => {
            state.status = "checking";
        },
    },
});

export const { login, logout, checkingCredentials } = AuthSlice.actions;
