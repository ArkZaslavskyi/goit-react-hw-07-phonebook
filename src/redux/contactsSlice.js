import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const handlePending = (state) => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        // addContact: {
        //     reducer(state, action) {
        //         return [action.payload, ...state];
        //     },
        //     prepare({ name, number }) {
        //         return {
        //             payload: {
        //                 id: nanoid(),
        //                 name,
        //                 number
        //             },
        //         };
        //     },
        // },
        // deleteContact(state, action) {
        //     return state.filter(contact =>
        //         contact.id !== action.payload
        //     );
        // },
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;  
        },
        [fetchContacts.rejected]: handleRejected,

        [addContact.pending]: handlePending,
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);  
        },
        [addContact.rejected]: handleRejected,

        [deleteContact.pending]: handlePending,
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const idx = state.items.findIndex(item =>
                item.id === action.payload.id);
            state.items.splice(idx, 1);  
        },
        [deleteContact.rejected]: handleRejected,    },
});


// fetchContacts - получение массива контактов (метод GET) запросом. Базовый тип экшена "contacts/fetchAll".
// addContact - добавление контакта (метод POST). Базовый тип экшена "contacts/addContact".
// deleteContact - удаление контакта (метод DELETE). Базовый тип экшена "contacts/deleteContact".

// export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;