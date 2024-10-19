import React from "react";

const Alert = (props) => {
  return (
    <div>
    {props.alert && <div>
      <div className={`alert alert-${props.alert.type.toLowerCase()} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.type}!! </strong>{props.alert.message}
      </div>
    </div>}
    </div>
  );
};

export default Alert;
