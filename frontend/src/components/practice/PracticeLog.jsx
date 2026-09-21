import FormField from "../shared/FormField";
import Button from "../shared/Button";

const PracticeLog = ({ practiceSession, handleChange, handleSubmit, error, editId}) => {   
    return (
        <aside className="practice-log">
            <h2>{editId ? "Edit This Session" : "Log New Session"}</h2>
            
            <form onSubmit={handleSubmit}>
                <FormField label="Practice Focus"
                            as="textarea"
                            id="session-focus"
                            name="sessionFocus"
                            value={practiceSession.sessionFocus || ""}
                            onChange={handleChange}
                            rows={1}
                            cols={30}
                            placeholder={"What did you focus on?"} />
                <FormField label="Practice Length"
                            as="textarea"
                            id="session-time"
                            name="sessionDuration"
                            value={practiceSession.sessionDuration || ""}
                            onChange={handleChange}
                            rows={1}
                            cols={30}
                            placeholder={"Practice length in minutes..."} />
                <FormField label="Triumphs & Challenges"
                            as="textarea"
                            id="practice-outcome"
                            name="sessionTriumphsChallenges"
                            value={practiceSession.sessionTriumphsChallenges || ""}
                            onChange={handleChange}
                            rows={5}
                            cols={30}
                            placeholder={"What successes or challenges did you have?"} />
                <Button id="submit-btn" 
                        type="submit" 
                        className="submit-btn" 
                        label={editId ? "Update Session" : "Log Session"} />
            </form>
                        {error && <span className="error-message">{error}</span>}
        </aside>
    );
};

export default PracticeLog;