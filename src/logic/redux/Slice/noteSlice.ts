import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Note = {
  id: string;
  title: string;
  content: string;
};

interface NoteState {
  notes: Array<Note>;
}

const initialState: NoteState = {
  notes: [
    { id: "1", title: "title1", content: "content1" },
    { id: "2", title: "title2", content: "content2" },
    { id: "3", title: "title3", content: "content3" },
  ],
};

export const noteSlice = createSlice({
  name: "noteSlice",
  initialState: initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      const note = action.payload;
      state.notes.push(note);
    },
    removeNote: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const notes = state.notes.filter((note) => note.id !== id);
      state.notes = notes;
    },
  },
});

// actions
export const { addNote, removeNote } = noteSlice.actions;

// selectors
export const selectNotes = (state: RootState) => state.notes.notes;

export default noteSlice.reducer;
