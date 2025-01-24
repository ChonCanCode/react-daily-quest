import { useParams } from "react-router-dom";
import Day0 from "../challenges/day0"; 
import Day1 from "../challenges/day1"; 
import Day2 from "../challenges/day2";
import Day4 from "../challenges/day4";

const ChallengePage = () => {
  const { day } = useParams<{ day: string }>();
  if (day === "0") return <Day0 />;
  if (day === "1") return <Day1 />;
  if (day === "2") return <Day2 />; 
  if (day === "4") return <Day4 />; 
  return <div>Challenge not found!</div>;
};

export default ChallengePage;