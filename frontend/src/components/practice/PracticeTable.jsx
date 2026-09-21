import Button from "../shared/Button"
import DeleteModal from "../shared/DeleteModal"
import { useState } from "react";

const PracticeTable = ({ handleEdit, handleDelete, sessions }) => {
    const [ sessionToDelete, setSessionToDelete ] = useState(null);

    if (sessions.length === 0) {
        return (
            <div className="empty-table">
                <p>No Sessions Logged</p>
            </div>
        );
    }
        return (
            <div className="scrolling-table">
            <table className="practice-table">
                <thead>
                    <tr>
                        <th>Practice Focus</th>
                        <th>Duration</th>
                        <th>Triumphs/Challenges</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {/* maps over sessions logged by user to populate the table */}
                    {sessions.map((session) => (
                        <tr key={session.id}>
                        <td>{session.sessionFocus}</td>
                        <td>{session.sessionDuration}</td>
                        <td>{session.sessionTriumphsChallenges}</td>
                        <td><Button id={`edit-btn-${session.id}`}
                                    type="button"
                                    className="edit-btn"
                                    label="Edit"
                                    onClick={ () => handleEdit(session)} />
                            <Button id={`remove-btn-${session.id}`}
                                    type="button"
                                    className="remove-btn"
                                    label="Remove"
                                    onClick={ () => setSessionToDelete(session)}/>
                        </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {sessionToDelete && ( 
                        <DeleteModal 
                        title="Practice Session" 
                        id={sessionToDelete.id} 
                        handleDelete={handleDelete}
                        onCancel={ ()=> setSessionToDelete(null)}
                        />
                        )}
          </div>

    );
};

export default PracticeTable;