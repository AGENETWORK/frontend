/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import PartnetPersonForm from "./partner-person-form";
import PartnetOrgForm from "./partner-organization-form";

class PartnetTabForm extends React.Component {
  render() {
    return (
      <div>
        <PartnetPersonForm isVisable />
        <PartnetOrgForm isVisable={false} />
      </div>
    );
  }
}

export default PartnetTabForm;
