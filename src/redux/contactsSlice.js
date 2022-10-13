import { createSlice, nanoid } from "@reduxjs/toolkit";

import initialContacts from 'contacts.json'; // <--- get them from localStorage in componentDidMount()

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialContacts,
    reducers: {
        addContact: {
            reducer(state, action) {
                return [action.payload, ...state];
            },
            prepare({ name, number }) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number
                    },
                };
            },
        },
        deleteContact(state, action) {
            return state.filter(contact =>
                contact.id !== action.payload
            );
        },
    }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
