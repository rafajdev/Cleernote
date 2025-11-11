# 📝 Cleernote

Cleernote é um app **minimalista de notas** feito com **React + TypeScript + TailwindCSS**.  
Guarda suas notas no `localStorage` e permite **criar, editar e excluir** com uma interface simples e rápida.

---

## ⚙️ Tecnologias
- React + TypeScript  
- Vite ([vite.config.ts](vite.config.ts))  
- TailwindCSS  
- Nanoid (IDs únicos)  
- Icons: lucide-react  

---

## 🏗 Estrutura principal
- **Componente raiz:** [`App`](src/App.tsx)  
- **Provedor de estado:** [`NotesProvider`](src/contexts/NotesProvider.tsx)  
- **Contexto:** [`NotesContext`](src/contexts/NotesContext.tsx)  
- **Hook de negócios:** [`useNotesManager`](src/hooks/useNotesManager.tsx)  
- **Hook de consumo:** [`useNotes`](src/hooks/useNotes.tsx)  

### 📄 Páginas
- Lista de notas: [`NoteList`](src/pages/NoteList.tsx)  
- Edição de nota: [`NoteEdit`](src/pages/NoteEdit.tsx)  

### 🧩 Componentes
- Cartão: [`Card`](src/components/Card.tsx)  
- Botão: [`Button`](src/components/Button.tsx)  
- Barra inferior: [`Navbar`](src/components/Navbar.tsx)  

### 📦 Tipos e Configurações
- Tipos: [`NoteType`](src/types/NoteType.ts)  
- Entrada: [`main.tsx`](src/main.tsx)  
- HTML: [index.html](index.html)  
- TS Config: [tsconfig.app.json](tsconfig.app.json), [tsconfig.node.json](tsconfig.node.json)  

---

## 🚀 Como rodar
```bash
npm install     # instalar dependências
npm run dev     # rodar em desenvolvimento
npm run build   # build para produção
```

---

## 🔄 Fluxo do App

### NotesProvider
O `NotesProvider` usa o hook `useNotesManager` para gerenciar:  
- **notes** → lista de notas  
- **currentNote** → nota atualmente em edição  
- **isOnEditPage** → controle de tela de edição  

**Operações principais:**  
- `upsertNote` → criar/atualizar nota  
- `deleteNote` → remover nota  

### App
O `App` consome o contexto via `useNotes` para alternar entre:  
- `NoteList` → lista de notas  
- `NoteEdit` → edição de nota  

### Persistência
Todas as notas são salvas no **localStorage**, mantendo seus dados mesmo após fechar o navegador 💾  

---