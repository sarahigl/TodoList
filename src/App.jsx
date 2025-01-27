import './App.css'
const TODOS = [
  { tache: "Faire les courses", date: "2025/08/22", checked: false},
  { tache: "Sortir le chien", date: "2025/08/22", checked: true },
  { tache: "Faire le ménage", date: "2025/08/22", checked: false }
];


  // function Todo({todo}) {
  //   console.log(todo)
  //   if(todo.checked){
  //     return <>
  //     <li className='green'>
  //       <input type="checkbox" defaultChecked={todo.checked}/>
  //       {todo.tache} - {todo.date}
  //     </li>
  //   </>
  //   }else{
  //     return <>
  //     <li className='orange'>
  //     {todo.tache} - {todo.date}
  //     </li>
  //     </>
  //   }
  // }
function ToDoTernaire({todo}){
  console.log(todo)
 
  return <>
    <li className= {todo.checked ? "green" : "orange"}>
      <input type="checkbox" defaultChecked={todo.checked}/>
      {todo.tache} - {todo.date}
    </li>
  </>
}

  function List(){
    return (
      <ul>
        {TODOS.map((todo, index) => (
          <ToDoTernaire key={index} todo={todo} />
        ))}
      </ul>
    );
  }

function App() {
  const DATE = new Date();

  return (
    <>
      <article className='todolist'>
        <h1>Ma todo :</h1>
        <h2>{DATE.toLocaleString()}
        </h2>
      <List/>
      </article>
    </>
  )
}


export default App
