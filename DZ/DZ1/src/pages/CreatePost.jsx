import { useState } from "react"


export const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [storages, setStorages] = useState([])

  const create = () => {
    const newPost = {id: Date.now(), title}
    setStorages([...storages, newPost]) 

    setTitle('')
  }
  
  return (
    <>
      <form>
        <label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
        </label>
        <button type="button" onClick={create}>Create</button>
      </form>

      <ul>
        {storages.map(storage => (
          <li key={storage.id}>{storage.title}</li>
        ))}
      </ul>
    </>
  )
}
