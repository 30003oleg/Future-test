import { DataChoose, InfoTable, Loader } from './components';
import { useState, useEffect } from 'react';

function App() {
  const [currentData, setCurrentData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const data = `http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`;

  const onSort = function () {

  }
  console.log(currentData);

  useEffect(() => {
    fetch(data)
      .then(resp => resp.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCurrentData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loader></Loader>;
  } else {
    return (
      <div>
        <main>
          {currentData && <InfoTable data={currentData} onSort={onSort}></InfoTable>}
        </main>
        <Loader></Loader>
      </div>
    );
  }
}

export default App
