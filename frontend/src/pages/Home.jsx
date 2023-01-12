import { useState, useEffect } from "react";
import Axios from "axios";
import WorkoutDetails from "../components/WorkoutDetails";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  useEffect(() => {
    Axios.get(import.meta.env.VITE_WORKOUTS_API_URL).then((res) =>
      setWorkouts(res.data)
    );
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
    </div>
  );
};

export default Home;
