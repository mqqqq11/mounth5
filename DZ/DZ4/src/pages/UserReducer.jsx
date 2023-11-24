
import { useState } from "react"
import { useDispatch} from "react-redux"

export const UserReducer = () => {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const dispatch = useDispatch()

  
  const handleSave = () => {
    dispatch({type: 'NAME', payload: name})
    dispatch({type: 'AGE', payload: age})
  }

  return (
    <>
      <div>
        <span>Name:</span>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      </div>

      <div>
        <span>Age:</span>
        <input type="number" value={age} onChange={e => setAge(e.target.value)}/>
      </div>

      <div>
        <button onClick={handleSave}>Save</button>
      </div>
    </>
  )
}
