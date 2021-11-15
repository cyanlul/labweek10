import logo from './logo.svg';
import './App.css';
import Form from './Form';

function App() {
  return (
    <div>
      Data Entry Model
      <Form></Form>
      <div>
        <input
          type="checkbox"
          value="Y"/>
        Agree Terms & Conditions?
      </div>
    </div>
  );
}

export default App;
