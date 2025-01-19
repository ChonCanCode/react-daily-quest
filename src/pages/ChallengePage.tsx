import { useParams } from 'react-router-dom';

const challenges: { [key: string]: { title: string; description: string } } = {
  1: { title: 'Introduction to React', description: 'Learn React basics.' },
  2: { title: 'Understanding Props and State', description: 'Explore props and state in React.' },
  3: { title: 'Handling Events', description: 'Learn how to handle events in React.' },
};

const ChallengePage = () => {
  const { day } = useParams<{ day: string }>();
  const challenge = challenges[String(1)];

  if (!challenge) {
    return <div>Challenge not found!</div>;
  }

  return (
    <div>
      <h1>{challenge.title}</h1>
      <p>{challenge.description}</p>
    </div>
  );
};

export default ChallengePage;
