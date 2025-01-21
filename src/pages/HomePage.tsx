import { Link } from 'react-router-dom';

const HomePage = () => {
    const challenges = [
        { day:1, title: 'Introduction to React'},
        { day:2, title: 'Setting Up React with VS Codeng Props and State'},
        { day:3, title: 'Handling Events'},
        //Add more challenges as needed
    ];

    return(
        <div>
            <h1>Daily Challenges</h1>
            <ul>
                {challenges.map((challenge) => (
                    <li key={challenge.day}>
                        <Link to={`/challenge/${challenge.day}`}>
                        Day {challenge.day}: {challenge.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;