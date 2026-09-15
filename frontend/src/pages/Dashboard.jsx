import { useEffect, useState } from 'react';
import XPTracker from '../components/practice/XPTracker';
import PracticeCard from '../components/practice/PracticeCard'
import PracticeLog from '../components/practice/PracticeLog';
import ErrorMessage from '../components/shared/ErrorMessage';
import Loading from '../components/shared/Loading';
import PracticeTable from '../components/practice/PracticeTable';


const Dashboard= ({ practiceData, setPracticeData, practiceLog, setPracticeLog, practiceSession, setPracticeSession }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formError, setFormError] = useState("");
    const [editId, setEditId] = useState(null);

// all the handler Functions and state for the practice log/ practice table are here

    const handleChange = (ev) => {
        const { name, value } = (ev.target);
        setPracticeSession((prev) => ({ ...prev, [name]: value }));
};

    const handleSubmit = (ev) => {
        ev.preventDefault();

        const {focus, time, outcome } = practiceSession;
            if (!focus || !time || !outcome) {
                setFormError("Complete all fields to log session")
                return;
            }

        if (editId === null) { 
            setPracticeLog((prev) => [...prev, {...practiceSession, id: Date.now() }]);
        } else {
            setPracticeLog((prev) => prev.map((session) => {
                if (session.id === editId) {
                    return practiceSession;
                } else {
                    return session;
                }
            }));
        }
        setPracticeSession({});
        setEditId(null);
        setFormError("");
    };

    const handleEdit =  (session) => {
        setPracticeSession(session);
        setEditId(session.id);
    };
   
    const handleDelete = (id) => {
        setPracticeLog((prev) => prev.filter((entry) => entry.id !== id));
    };
    

    const handleToggleComplete = (id) => {
        setPracticeData((prevData) => 
            prevData.map((exercise) => 
                exercise.id === id
                    ? {...exercise, completed: !exercise.completed }
                    : exercise
        )
      );
    };

    
     useEffect(() => {
        if (practiceData.length > 0) {
            setIsLoading(false);
            return;
        }
        
       const fetchPracticeData = async () => {
           try {
               const response = await fetch('http://localhost:8080/api/practice-exercises');
               if(!response.ok) {
                   throw new Error(`Error collecting practice exercises! Status:${response.status}`);
               }
              
               const data = await response.json();
               setPracticeData(data);

           } catch (err) {
               setError(err.message);
               console.error('Fetch error: ', err);

           } finally {
               setIsLoading(false);
           }
       };
      
       fetchPracticeData()
   }, []);
   

    if (isLoading) return <Loading />;
    if (error) return <ErrorMessage message={error} />;
    
    return (
        <>
        <div className="dashboard-top">
            <div className="dashboard-left">
                <h2>Welcome Back, Gabe!</h2>
                   <XPTracker practiceData={practiceData} />
            </div>

            <div className="lesson-summary">
            <h3>Last Lesson Summary:</h3>
                <ul>
                    <li>Practiced "Across the Universe" at 60 BPM</li>
                    <li>Worked on chords for "Another one Bites the Dust"</li>
                    <li>Worked on sight reading both songs</li>
                </ul>
            </div>

            <div className="instructor-notes">
                <h3>Instructor Notes:</h3>
                <ul>
                    <li>Remember, Mother metronome is there to help you.</li>
                    <li>Be mindful of hyperextension while you play.</li>
                    <li>You are doing great!</li>
                </ul>
            </div>
        </div>

        <div className="dashboard-cards-row">
            <section className="exercise-list">
                <h2>Practice Exercises</h2>
                    <ul>
                        {practiceData.map((item ) => (
                            <li key={item.id}><PracticeCard exercise={item} onToggleComplete={handleToggleComplete}/>
                        </li>
                        )) }
                    </ul>    
            </section>
            <aside className="practice-entry">
                <PracticeLog  practiceSession={practiceSession}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        error={formError}/>
            </aside> 
        </div>
        <section className="practice-table-section">
                <h2>Practice History</h2>
                <PracticeTable
                    sessions={practiceLog}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete} />

        </section>
        </>

        );
    };


export default Dashboard;