import "./index.scss";
import { RightComponent } from "./RightContainer";

const HomeScreen = () => {
  return (
    <div className="home-container">
      <div className="left-container">
        <div className="items-container">
          <img src="../../../assets/code.png" />
          <h1>Code Flow</h1>
          <button>
            <span className="material-icons">add</span>
            <span>Create Playground</span>
          </button>
        </div>
      </div>
      <RightComponent />
    </div>
  );
};

export default HomeScreen;
