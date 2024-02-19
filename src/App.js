import logo from './logo.svg';
import './App.css';
import Header from './componants/Header';
import { Todo } from './componants/Todo';
import { Todos } from './componants/Todos';
import { Footer } from './componants/Footer';

function App() {
  return (
    <>
      <Header />
      <Todos />
      <Footer />

    </>
  );
}

export default App;
