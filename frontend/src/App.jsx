import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router'
import Header from './components/layout/Header'
import Home from './pages/Home'
import About from './pages/About'
import Library from './pages/Library'
import Dashboard from './pages/Dashboard'
import Footer from './components/layout/Footer'
import './App.css'





const App= () => {
  const [practiceData, setPracticeData] = useState([]);
  const [practiceLog, setPracticeLog] = useState([]);
  const [practiceSession, setPracticeSession] = useState({});
  const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem("loggedInUser")) || null);
  
  return (
    <div className="body-container"> 
      <Header loggedInUser={loggedInUser}
              setLoggedInUser={setLoggedInUser}
              />
      
      <main>
          <Routes>
            <Route path="/" element={<Home setLoggedInUser={setLoggedInUser} />} />
            <Route path="/about" element={<About />} />
            <Route path="/library" element=
                                        {loggedInUser ? (
                                            <Library />
                                    ) : ( <Navigate to="/" />)
                                  } 
                                />
            <Route path="/dashboard" element=
                                        {loggedInUser ? (
                                            <Dashboard  
                                            loggedInUser={loggedInUser}
                                            practiceData={practiceData}
                                            practiceLog={practiceLog}
                                            practiceSession={practiceSession}
                                            setPracticeData={setPracticeData}
                                            setPracticeLog={setPracticeLog}
                                            setPracticeSession={setPracticeSession}
                                          />
                                      ) : (<Navigate to="/" />)
                                    }
                                  />
          </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
