import { DataChoose, InfoTable, Loader } from './components';
import { useState, useEffect } from 'react';

function App() {
  const [currentData, setCurrentData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSort, setCurrentSort] = useState([]); // [true, 'phone']
  const [filteredData, setFilteredData] = useState([]);
  const [fetchURL, setFetchURL] = useState(`http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`);
  const [currentPage, setCurrentPage] = useState(0);
  const [pagedData, setPagedData] = useState([]);



  const onFetch = (fetchURL) => {
    setFetchURL(fetchURL);
  }

  const onSort = (dataKey) => {
    if (currentSort[0]) {
      switch (dataKey) {
        case 'id':
          filteredData.sort(
            (a, b) => parseInt(a[dataKey]) - parseInt(b[dataKey])
          );
          break;
        case 'firstName':
        case 'lastName':
        case 'email':
        case 'phone':
          filteredData.sort(
            (a, b) => {
              let valueA = a[dataKey].toLowerCase();
              let valueB = b[dataKey].toLowerCase();
              if (valueA > valueB) {
                return 1;
              }
              if (valueA < valueB) {
                return -1;
              }
              return 0;
            }
          );
          break;
      }
      let sortedData = [...filteredData];
      setFilteredData(sortedData);
      setCurrentSort([false, dataKey]);
    } else {
      switch (dataKey) {
        case 'id':
          filteredData.sort(
            (a, b) => parseInt(b[dataKey]) - parseInt(a[dataKey])
          );
          break;
        case 'firstName':
        case 'lastName':
        case 'email':
        case 'phone':
          filteredData.sort(
            (a, b) => {
              let valueA = a[dataKey].toLowerCase();
              let valueB = b[dataKey].toLowerCase();
              if (valueA < valueB) {
                return 1;
              }
              if (valueA > valueB) {
                return -1;
              }
              return 0;
            }
          );
          break;
      }
      let sortedData = [...filteredData];
      setFilteredData(sortedData);
      setCurrentSort([true, dataKey]);
    }
  }




  const onSearch = (subString) => {
    if (subString) {
      let filteredData = currentData.filter(
        (elem, index, array) => {
          for (let key in elem) {
            if (key != 'address' && key != 'description') {
              if (elem[key].toString().includes(subString)) return true;
            }
          }
        }
      );
      setFilteredData(filteredData);
    } else setFilteredData(currentData);
    setCurrentPage(0);
  }

  const onChangePage = (pageChange) => {
    let maxPage = Math.ceil(filteredData.length / 50) - 1;
    if (pageChange) {
      if (currentPage < maxPage) setCurrentPage(currentPage + 1);
    }
    if (!pageChange) {
      if (currentPage > 0) setCurrentPage(currentPage - 1);
    }
  }

  const onAddNewRow = (newRow) => {
    let newDataObj = { ...newRow }
    let arr = [...filteredData];
    arr.unshift(newDataObj);
    setFilteredData(arr);
    console.log(newDataObj);
  }


  useEffect(async () => {
    setIsLoaded(false);
    await fetch(fetchURL)
      .then(resp => resp.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCurrentData(result);
          setFilteredData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [fetchURL]);

  useEffect(() => {
    let maxStringsCount = 50;
    let pagedData = filteredData.slice(
      maxStringsCount * currentPage, (maxStringsCount * (currentPage + 1))
    );
    setPagedData(pagedData);
  }, [filteredData, currentPage]);




  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loader></Loader>;
  } else {
    return (
      <div>
        <main>
          <DataChoose onFetch={onFetch}></DataChoose>
          {currentData &&
            <InfoTable
              data={pagedData}
              onSort={onSort}
              currentSort={currentSort}
              onSearch={onSearch}
              currentPage={currentPage}
              onChangePage={onChangePage}
              onAddNewRow={onAddNewRow}
            ></InfoTable>}
        </main>
        <Loader></Loader>
      </div>
    );
  }
}

export default App
