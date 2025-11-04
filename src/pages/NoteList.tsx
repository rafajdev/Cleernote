import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { Plus } from 'lucide-react';

export default function NoteList() {
  return (
    <div className="flex flex-col w-dvw h-dvh">
      <header className="flex items-center h-3/14 px-20">
        <h1 className="text-3xl">Cleernote</h1>
      </header>
      <main className="h-8/10 px-20">
        <p>Here is a list of notes.</p>
      </main>
      <footer className="flex justify-center items-center h-3/14 px-20">
        <Navbar>
          <Button>
            <Plus />
            New note
          </Button>
        </Navbar>
      </footer>
    </div>
  )
}