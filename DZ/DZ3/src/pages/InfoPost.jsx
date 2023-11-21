import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const InfoPost = () => {
    const navigate = useNavigate()

    const { id } = useParams();
    const [user, setUser] = useState('');
    const [posts, setPosts] = useState('');
    const [todos, setTodos] = useState('');

    const [activeButton, setActiveButton] = useState('');

    useEffect(() => {
        axios.get(`https://dummyjson.com/users/${id}`)
        .then(resp => {
            setUser(resp.data);
        })
    }, [id])

    const btnPosts = () => {
        axios.get(`https://dummyjson.com/posts/${id}`)
        .then(resp => {
            setPosts(resp.data);
            setActiveButton('posts');
        })
    }

    const btnTodo = () => {
        axios.get(`https://dummyjson.com/todos/${id}`)
        .then(resp => {
            setTodos(resp.data);
            setActiveButton('todos');
        })
    }


    const back = () => {
        navigate('/')
    }

    return (
        <>
        <div className="user">
            <span>Имя: {user.username}</span>
            <span>Возраст: {user.age}</span>
        </div>

        <div className="user_btn">
            <button onClick={btnPosts}>Посты</button>
            <button onClick={btnTodo}>Список дел</button>
        </div>

        <div className="user_content">
            {activeButton === 'posts' && <span className="show_border">{posts.body}</span>}
            {activeButton === 'todos' && <span className="show_border">{todos.todo}</span>}
        </div>

        <div className="back">
            <button onClick={back}>Назад</button>
        </div>
        </>
    )
}