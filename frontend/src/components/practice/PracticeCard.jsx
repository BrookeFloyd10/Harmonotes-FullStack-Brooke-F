import { useState } from "react";


const PracticeCard = ({ exercise, onToggleComplete }) => {
    const[ justCompleted, setJustCompleted ] = useState(false);
    
    const { title, description, duration, xpValue, videoLink, completed } = exercise;
    return (
        
        <article className="practice-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{duration}</p>
            <label htmlFor={`completed-${exercise.id}`}>
            <input id={`completed-${exercise.id}`} 
                type="checkbox" 
                checked={completed} 
                onChange={() => {onToggleComplete(exercise.id);
                                setJustCompleted(true);
                }}/>

            </label>
            {completed && justCompleted && (
                <div className="confetti-container">
                    <span className="confetti-note confetti-up">♪</span>
                    <span className="confetti-note confetti-left">♫</span>
                    <span className="confetti-note confetti-right">♬</span>
                </div>
            )}
            <p>{xpValue} XP</p>

            {videoLink && (
                <a href={videoLink} target="_blank" rel="noopener noreferrer">Reference Video!</a>
        )}
        </article>
    );
};

export default PracticeCard;