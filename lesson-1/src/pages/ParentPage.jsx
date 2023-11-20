import { useState } from "react"



const ChildOne = ( user ) => {
    return (
        <>
            <div> название- {user}</div>
        </>
    )
}

export const ParentPage = () => {
    const [name, setName] = useState('Igor')
  return (
    <div>ParentPage
        <input type="text" onChange={e => setName(e.target.value)} value={name} />

        <ChildOne user={name}/>
    </div>

  )
}
