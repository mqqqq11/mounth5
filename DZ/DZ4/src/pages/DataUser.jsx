import { useSelector } from "react-redux"


export const DataUser = () => {
  const name = useSelector(state => state.name)
  const age = useSelector(state => state.age)
  return (
    <>
      <div className="data_user">
        <span>Name: {name}</span>
        <span>Age: {age}</span>
      </div>
    </>
  )
}
