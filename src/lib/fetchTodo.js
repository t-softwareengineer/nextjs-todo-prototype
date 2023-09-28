export default async function fetchTodo(id) {
  const response = await fetch(`http://localhost:5000/todos/${id}`);
  if (!response.ok) return undefined;
  const todo = await response.json();
  return todo;
}