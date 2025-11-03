import { useState } from "react"
import NoteEdit from "./pages/NoteEdit"
import NoteList from "./pages/NoteList"

function App() {
  const [isOnEditPage] = useState(false)

  return isOnEditPage ? <NoteEdit /> : <NoteList />
}

export default App
