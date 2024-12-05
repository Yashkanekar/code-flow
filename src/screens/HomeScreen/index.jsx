import "./index.scss";

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
      <div className="right-container">
        <h1>Right container</h1>
      </div>
    </div>
  );
};

export default HomeScreen;
