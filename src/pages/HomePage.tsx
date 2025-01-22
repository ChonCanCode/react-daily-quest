import { Link } from 'react-router-dom';


const HomePage = () => {
    const challenges = [
        { day:1, title: 'What is React?'},
        { day:2, title: 'How to setup React on Window'},
        { day:3, title: 'How the are the files work withn the React project?'},
        { day:4, title: 'How to apply style in react.'},

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