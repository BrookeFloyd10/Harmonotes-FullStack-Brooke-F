import Button from "../shared/Button"

const PracticeTable = ({ handleEdit, handleDelete, sessions }) => {
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
                        <th> </th>
                    </tr>
                </thead>
                <tbody>

                    {/* maps over sessions logged by user to populate the table */}
                    {sessions.map((session) => (
                        <tr key={session.id}>
                        <td>{session.focus}</td>
                        <td>{session.time}</td>
                        <td>{session.outcome}</td>
                        <td><Button id={`edit-btn-${session.id}`}
                                    type="button"
                                    className="edit-btn"
                                    label="Edit"
                                    onClick={ () => handleEdit(session)} />
                            <Button id={`remove-btn-${session.id}`}
                                    type="button"
                                    className="remove-btn"
                                    label="Remove"
                                    onClick={ () => handleDelete(session.id)}/></td>
                    </tr>
                    ))}
                </tbody>
            </table>
          </div>

    );
};

export default PracticeTable;
