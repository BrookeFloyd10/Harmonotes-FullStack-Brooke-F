
const LibraryCard = ({ item }) => {

    const { title, type, artist, difficulty, file, audio } = item
    
    return (
        <article className="library-card">
            <h3>{title}</h3>
            {artist && <p>By: {artist}</p>}
            {difficulty && <p>Difficulty: {difficulty}</p>}
            {file && (
                <a href={file} target="_blank" rel="noopener noreferrer">
                    {type === "song" ? "View Sheet Music" 
                    : type === "reference" ? "View Reference" 
                    : type === "exercise" ? "View Exercise"
                    : " "} </a>
            )}

            {audio && (
                <div>
                    <p>Play along!</p>
                    <a href={audio} target="_blank" rel="noopener noreferrer">
                        Listen</a>
                </div>
            )}
        </article>
    );
};


export default LibraryCard;