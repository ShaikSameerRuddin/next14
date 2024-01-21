"use client";
import Image from "next/image";

import { nextLogo, vercelLogo } from "@/shared/icons";
import { useAppDispatch, useAppSelector } from "@/logic/redux/reduxHooks";
import { addNote, removeNote } from "@/logic/redux/Slice/noteSlice";
import Link from "next/link";

export default function Home() {
  const notes = useAppSelector((state: any) => state.notes.notes);
  console.log("🚀 ~ Home ~ notes:", notes);
  const dispatch = useAppDispatch();

  const deleteNote = (noteId: string) => {
    dispatch(removeNote(noteId));
  };

  const getNextId = () => {
    // Find the maximum id in existing notes and increment by 1
    const maxId = Math.max(...notes.map((note : any) => parseInt(note.id, 10)), 0);
    return (maxId + 1).toString();
  };

  const data = {
    id: getNextId(),
    title: `title${getNextId()}`,
    content: `content${getNextId()}`,
  };

  const renderNotes = notes.map((note : any) => (
    <div key={note.id}>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <button onClick={() => deleteNote(note.id)}>Delete Note</button>
    </div>
  ));
  return (
    <div>
      {renderNotes}
      <div onClick={() => dispatch(addNote(data))}>addNote</div>
      <Link href='/login'>login</Link>
    </div>
  );
}
