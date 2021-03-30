import Question from "./components/Question"
import data from "./data"
import {useState, useEffect} from "react"

function App() {
  const [questions, setQuestions] = useState([])

  useState(() => {
    setQuestions(data)
  }, [])
  if (questions.length === 0) {
    return (
      <div style={{textAlign:"center", padding:"50px"}}>
        <h3>Loading...</h3>
      </div>
    )
  }
  return (
    <div className="main">
        <div className="category">
            <h3>Questions And Answers About Login</h3>
        </div>
        <div className="questions">
        {questions.map(q => <Question info={q} />)}
        </div>
    </div>
  );
}

export default App;
