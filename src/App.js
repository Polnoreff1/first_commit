import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';


function todoLIST() {
    const element = (
        <div>
            <h1 align={"center"}>Лист заданий на сегодня</h1>
            <h2></h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}





function App() {
  return (
    <div className="App">
      <header >

        <h1>
            Лист заданий на сегодня
        </h1>

          <input type="text" size="40" id={"25"}>
          </input>

        <div className={"CumDiv"}>
        <h1>
            Helloworld
        </h1>
            <table>
                <tr>
                <td></td>
                    <td>Привет</td>
                    <td>Привет</td>
                    <td>Привет</td>
            </tr>
                <tr>
                    <td>Пока</td>
                    <td>Пока</td>
                    <td>Пока</td>
                    <td>Пока</td>
                </tr>
            </table>



        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >


        </a>
        <p>My name is Danya </p>
          <p>
              Mother
          </p>
      </header>
    </div>
  );
}

export default App;
