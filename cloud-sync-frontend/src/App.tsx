import './App.css';
import { useEffect, useState } from 'react'
import { getRequest } from './helpers'
import { TEST } from './fetchURLS'

function App() {

  const [fetchData, setFetchData] = useState(null)

  useEffect(() => {
    getRequest(TEST, setFetchData);
  },[])

  return (
    <div title='block' className="App">
      {fetchData}
    </div>
  );
}

export default App;
