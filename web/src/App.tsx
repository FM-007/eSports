
interface ButtonProps {
  title: string
}

const Button = (props: ButtonProps) => {
  return (
    <button>
      {props.title}
    </button>
  )
}

const App = () => {
 return (
  <div>
    <Button title="send 1" />
    <Button title="send 2" />
    <Button title="send 3" />
  </div>
 )
}

export default App
