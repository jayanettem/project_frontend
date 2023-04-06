import logo from './logo.svg';
import './App.css';
import Questions from './components/questions';
function App() {
  return (
    <div className='App'>
      <h2>Star Rating Feedback</h2>
          <Questions />
    <button style={styles.button}>Submit Feedback</button>
    </div>
  )
}

const styles ={
  button: {
    border:"1px solid #a9a9a9",
    borderRadius: 5,
    padding:10,
    width:170,
    marginTop: "15px"
  }
}

export default App;
