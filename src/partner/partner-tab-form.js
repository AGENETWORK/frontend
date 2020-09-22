/* eslint-disable react/destructuring-assignment */
import React from "react";
import PartnetPersonForm from "./partner-person-form";
import PartnetOrgForm from "./partner-organization-form";

class PartnetTabForm extends React.Component {
  constructor(props) {
    super(props);
    this.setState({
      isVisable: props.isVisable,
    });
  }

  render() {
    return (
      <div>
        <PartnetPersonForm isVisable={this.state.isVisable} />
        <PartnetOrgForm isVisable={!this.state.isVisable} />
      </div>
    );
  }
}

export default PartnetTabForm;
