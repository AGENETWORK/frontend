/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import PartnetPersonForm from "./partner-person-form";
import PartnetOrgForm from "./partner-organization-form";
import "./partner.css";

class PartnetTabForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitOrgPartnerForm = this.submitOrgPartnerForm.bind(this);
    this.submitPersonPartnerForm = this.submitPersonPartnerForm.bind(this);
    this.orgPartnerFormChanges = this.orgPartnerFormChanges.bind(this);
    this.personPartnerFormChanges = this.personPartnerFormChanges.bind(this);

    this.state = {
      // Render props
      isPerson: true,
      // Person props
      pFirstName: "",
      pLastName: "",
      pMidName: "",
      pMail: "",
      pConfirmMail: "",
      pMessage: "",
      // ORG props
      oRepFirstName: "",
      oRepLastName: "",
      oRepMidName: "",
      oRepMail: "",
      oRepConfirmMail: "",
      oMail: "",
      oConfirmMail: "",
      oMessage: "",
      oName: "",
    };
  }

  orgPartnerFormChanges(e) {
    this.console.log(e);
    e.preventDefault();
  }

  personPartnerFormChanges(e) {
    this.console.log(e);
    e.preventDefault();
  }

  submitPersonPartnerForm(date) {
    this.console.log("P");
    this.console.log(date);
  }

  submitOrgPartnerForm(date) {
    this.console.log("OGR");
    this.console.log(date);
  }

  selectPartner(type) {
    this.console.log(type);
    if (type === "P" && this.state.isPerson) return;
    if (type === "O" && !this.state.isPerson) return;
    this.setState({
      isPerson: type === "P",
    });
  }

  render() {
    return (
      <div>
        <div className="tab">
          <button
            type="button"
            className={this.state.isPerson ? "active" : ""}
            onClick={() => this.selectPartner("P")}>
            Person
          </button>
          <button
            type="button"
            className={!this.state.isPerson ? "active" : ""}
            onClick={() => this.selectPartner("O")}>
            Organization
          </button>
        </div>
        <div className={this.state.isPerson ? "tabcontent" : ""}>
          <PartnetPersonForm
            isVisable={this.state.isPerson}
            firstName={this.state.pFirstName}
            midName={this.state.pMidName}
            lastName={this.state.pLastName}
            email={this.state.pMail}
            confirmEmail={this.state.pConfirmMail}
            extractInfo={this.state.pMessage}
            onSubmitFrom={this.submitPersonPartnerForm}
            formChange={this.personPartnerFormChanges}
          />
        </div>
        <div className={!this.state.isPerson ? "tabcontent" : ""}>
          <PartnetOrgForm
            isVisable={!this.state.isPerson}
            orgName={this.state.oName}
            orgEmail={this.state.oMail}
            orgConfirmMail={this.state.oConfirmMail}
            repFirstName={this.state.oRepFirstName}
            repMidName={this.state.oRepMidName}
            repLastName={this.state.oRepLastName}
            repEmail={this.state.oRepMail}
            repConfirmMail={this.state.oRepConfirmMail}
            message={this.state.oMessage}
            onSubmitFrom={this.submitOrgPartnerForm}
            formChange={this.orgPartnerFormChanges}
          />
        </div>
      </div>
    );
  }
}

export default PartnetTabForm;
