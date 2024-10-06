
const today = new Date();
// const staticDay = new Date("2012, 11, 20, 3, 0, 0")
function formatDate(date) {
  return new Intl.DateTimeFormat(
      'ko-KR',
      { weekday : 'long', day: "numeric", month: "long", second: "numeric" }
  ).format(date);
}

let todos = []

function addTodo(todo, date) {
  todos.push({ todo: todo, day: formatDate(date)});
}
// console.log(todos[0].todo)
// console.log(todos[0].day)
  addTodo( "뭔가요", today);
  addTodo( "뭔가요2", today);

export  default function TodoList() {
  return (
      <h5>{todos.map((todo) =>
              <div key={todo.todo}>{todo.todo}, {todo.day}</div>
      )}
      </h5>
  )
}