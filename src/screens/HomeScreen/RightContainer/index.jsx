import "./index.scss";

export const RightComponent = () => {
  return (
    <div className="right-container">
      <div className="header">
        <h1 className="title">
          <span>My</span> Playground
        </h1>
        <div className="add-folder-button">
          <button>
            <span className="material-icons">add</span>
            <span>New folder</span>
          </button>
        </div>
      </div>
      <div className="folder-container">
        <div className="folder-header">
          <div className="folder-header-item">
            <span className="material-icons" style={{ color: "#FFCA29" }}>
              folder
            </span>
            <span>{"DSA"}</span>
          </div>
          <div className="folder-header-item">
            <span className="material-icons">delete</span>
            <span className="material-icons">edit</span>
            <button>
              <span className="material-icons">add</span>
              <span>New Playground</span>
            </button>
          </div>
        </div>
        <div className="cards-container"></div>
      </div>
    </div>
  );
};