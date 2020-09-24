/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { useForm } from "react-hook-form";

function PartnetPersonForm({
  isVisable,
  firstName,
  midName,
  lastName,
  email,
  confirmEmail,
  extractInfo,
  onSubmitFrom,
  formChange,
}) {
  const { register, handleSubmit, errors, watch } = useForm();
  const watchEmail = watch("email", "");
  const onSubmit = (data) => {
    onSubmitFrom(data);
  };

  if (!isVisable) return <div />;
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h6>Person Details</h6>
        <div className="form-row">
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control"
              defaultValue={firstName}
              name="firstName"
              placeholder="First Name"
              onChange={(e) => formChange(e)}
              ref={register({ required: true })}
            />
            {errors.firstName && <span className="partnerError">required</span>}
          </div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control"
              defaultValue={midName}
              name="midName"
              placeholder="Middle Name"
              onChange={(e) => formChange(e)}
              ref={register({ required: true })}
            />
            {errors.midName && <span className="partnerError">required</span>}
          </div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control"
              defaultValue={lastName}
              name="lastName"
              placeholder="Last Name"
              onChange={(e) => formChange(e)}
              ref={register({ required: true })}
            />
            {errors.lastName && <span className="partnerError">required</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-4">
            <input
              className="form-control"
              type="text"
              defaultValue={email}
              name="email"
              placeholder="Your Mail"
              onChange={(e) => formChange(e)}
              ref={register({
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                },
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <span className="partnerError">required</span>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <span className="partnerError">invalid email address</span>
            )}
          </div>
          <div className="form-group col-md-4">
            <input
              className="form-control"
              type="text"
              defaultValue={confirmEmail}
              name="confirmEmail"
              placeholder="Confirm Mail"
              onChange={(e) => formChange(e)}
              ref={register({
                required: true,
                validate: (value) => value === watchEmail,
              })}
            />
            {errors.confirmEmail && errors.confirmEmail.type === "required" && (
              <span className="partnerError">required</span>
            )}
            {errors.confirmEmail && errors.confirmEmail.type === "validate" && (
              <span className="partnerError">Email confirmation is not same</span>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-8">
            <textarea
              className="form-control"
              name="extractInfo"
              placeholder="Add more information..."
              onChange={(e) => formChange(e)}
              defaultValue={extractInfo}
              ref={register({ required: true, minLength: 20, maxLength: 500 })}></textarea>
            {errors.extractInfo && errors.extractInfo.type === "required" && (
              <span className="partnerError">required</span>
            )}
            {errors.extractInfo && errors.extractInfo.type === "minLength" && (
              <span className="partnerError">Minimum 20 charachter</span>
            )}
            {errors.extractInfo && errors.extractInfo.type === "maxLength" && (
              <span className="partnerError">Miximum 500 charachter</span>
            )}
          </div>
        </div>

        <div className="form-group">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default PartnetPersonForm;
