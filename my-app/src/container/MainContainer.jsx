import React from "react";

const MainContainer = () => {
  return (
    <div>
      <div className="grid grid-cols-3 mx-auto">
        <div className="m-auto">
          <div className="text-end">grid 1</div>
          <div>content</div>
        </div>
        <div>grid 2</div>
        <div>grid 3</div>
      </div>
    </div>
  );
};

export default MainContainer;
