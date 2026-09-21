import { useEffect, useState } from 'react';
import { globalGet } from '../components/APIs/api';
import LibraryCard from '../components/LibraryCard';
import Loading from '../components/shared/Loading';
import ErrorMessage from '../components/shared/ErrorMessage';


const Library = () => {
    const [libraryData, setLibraryData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [instrumentFilter, setInstrumentFilter] = useState("all");


    useEffect(() => {
        const fetchLibraryData = async () => {
            setIsLoading(true)
            try {
                const query = instrumentFilter === "all" ? "" :`?instrument=${instrumentFilter}`;
                const libraryItems = await globalGet(`/library-items${query}`);
                setLibraryData(libraryItems);
            }catch (err) {
                setError(err.message);
                console.error('Fetch error: ', err)
            } finally {
                setIsLoading(false);
            }
        };
        fetchLibraryData();
        }, [instrumentFilter]);

    if (isLoading) return <Loading />;
    if (error) return <ErrorMessage message={error} />

    const songs = libraryData.filter(item => item.type === "song");
    const exercises = libraryData.filter(item => item.type === "exercise");
    const resources = libraryData.filter(item => item.type === "reference");
    const noResults = "There are no materials for this instrument yet!";
        return(
            <div className="library-page">
                <h1>Studio Library</h1>
            <select value={instrumentFilter} onChange={(ev) => setInstrumentFilter(ev.target.value)}>
                <option value="all">All Instruments</option>
                <option value="guitar">Guitar</option>
                <option value="piano">Piano</option>
            </select>

          
{/* maps over fetched data to create list items making updating much easier*/}

            <div className="songs">
                <h2>Songs</h2>
            {songs.length > 0 ? (
                    <ul>
                        {songs.map((item) =>
                            <li key={item.id}><LibraryCard item={item} />
                        </li>)}
                    </ul>
                ) : <p className="no-results-message">{noResults}</p>}
                </div>

                <div className="exercises">
                    <h2>Exercises</h2>
            {exercises.length > 0 ? (
                    <ul>
                        {exercises.map((item) =>
                            <li key={item.id}><LibraryCard item={item} />
                        </li>)}
                    </ul>
                ) : <p className="no-results-message">{noResults}</p>}

                </div>
                

                <div className="resources">
                    <h2>Theory & Guides:</h2>
            {resources.length > 0 ? (
                    <ul>
                        {resources.map((item) =>
                            <li key={item.id}><LibraryCard item={item} />
                        </li>)}
                    </ul>
            ) : <p className="no-results-message">{noResults}</p>}

                </div>
        </div>
    );
};

export default Library;