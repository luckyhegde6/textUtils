import React from "react";
import PropTypes from "prop-types";

export default function Alert(props) {
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong align='center'>  {props.alert.message} </strong>  
        </div>
      )}
    </div>
  );
}

Alert.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
};

Alert.defaultProps = {
  type: "danger",
  message: "",
};
