import Modes from "../components/Modes";
import Timer from "../components/Timer";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-start items-center">
      <div className="flex flex-row gap-4 justify-center items-center">
        <Timer />
        <Modes />
      </div>
    </div>
  )
}

export default HomePage