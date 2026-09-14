

function XPTracker({practiceData}) {

    const completedTasks = practiceData.filter((exercise) => {
      return exercise.completed
    });
    const dailyXp = completedTasks.reduce((total, exercise) => {
        return total + exercise.xp
    }, 0);

    return (
        <section className="xp-tracker">
            <h3>Today's XP</h3>
            <p>{dailyXp}</p>
        </section>
    );
}

export default XPTracker;