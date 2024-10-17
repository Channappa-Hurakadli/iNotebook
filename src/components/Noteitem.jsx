import React from "react";

const Noteitem = (props) => {
  const { notes } = props;

  return (
    <div className="col-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{notes.title}</h5>
          <p className="card-text">{notes.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. In, fugiat? Ea ducimus doloribus veniam in error dicta soluta architecto, a id sed illum voluptatibus reprehenderit quia alias molestias? Quasi, quo!</p>
          <i className="fa-solid fa-trash mx-2"></i>
          <i className="fa-solid fa-pen-to-square mx-2"></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;