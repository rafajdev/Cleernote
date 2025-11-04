export default function NoteList() {
  return (
    <div className="flex flex-col w-dvw h-dvh">
      <header className="flex items-center h-2/12 px-16">
        <h1 className="text-3xl">Cleernote</h1>
      </header>
      <main className="h-8/10 px-16">
        <p>Here is a list of notes.</p>
      </main>
      <footer className="h-2/12 px-16">
        <p>Navbar</p>
      </footer>
    </div>
  )
}