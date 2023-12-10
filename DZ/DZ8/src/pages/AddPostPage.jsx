import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddActions } from "../redux/AddSlice";

export const AddPostPage = () => {
  const [newPost, setNewPost] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if(newPost.trim() !== '') {
      dispatch(AddActions.setAdd(newPost));
      setNewPost("");
    }
  };


  return (
    <>
      <form>
        <input value={newPost} onChange={e => setNewPost(e.target.value)} />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </form>
    </>
  );
};