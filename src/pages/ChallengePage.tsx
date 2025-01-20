import { useParams } from "react-router-dom";
import Day1 from "../challenges/day1"; // Import day-specific components
// Import other day components as you create them

const ChallengePage = () => {
  const { day } = useParams<{ day: string }>();

  // Render the appropriate component based on the day
  if (day === "1") return <Day1 />;
  if (day === "2") return <div>Day 2 Challenge</div>; // Replace with actual component
  if (day === "3") return <div>Day 3 Challenge</div>; // Replace with actual component

  return <div>Challenge not found!</div>;
};

export default ChallengePage;