import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Post = () => {
	const [todos, setTodos] = useState();

	useEffect(() => {
		axios.get(`https://jsonplaceholder.typicode.com/posts`).then(( response ) => {
				const responseTodos = response.data;
				console.log(responseTodos);
				setTodos(responseTodos);
			})
		}, []);

	return (
		<div class={'post'}>
			<h1> To Do List</h1>
			{todos && todos.map((todo) => {
				const {id, title, userId, body} = todo;
				return (
					<div key={id}>
						<h4>Post Title: {title}</h4>
						<h5>Post Body: {body}</h5>
						<h6>Assigned to user: {userId}</h6>
						<h6>post-id: {id}</h6>
					</div>
				)
			})}
		</div>
	)

}

export default Post;