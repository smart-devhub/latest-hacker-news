import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Description from './components/Description';
import NewsList from './components/NewsList';
import NewsContextProvider from './context/NewsContext';

function App() {
  return (
    <NewsContextProvider>
      <div className="d-flex flex-row justify-context-start h-100">
      <NewsList />
      <Description />
      </div>
    </NewsContextProvider>
  );
}

export default App;
