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
}) {
  const { register, handleSubmit, errors, watch } = useForm();
  const watchEmail = watch("email", "");
  const onSubmit = (values) => console.log(values);

  if (!isVisable) return <div />;
  return (
    <div className="container">
      <h4>My Form</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <div className="row">
            <label>Name</label>
          </div>
          <div className="row">
            <div className="col col-md-4 col-xs-12">
              <input
                type="text"
                className="form-control"
                value={firstName}
                name="firstName"
                placeholder="First Name"
                ref={register({ required: true })}
              />
			  
			  
              {errors.firstName && <span>required</span>}
            </div>
            <div className="col col-md-4 col-xs-12">
              <input
                type="text"
                className="form-control"
                value={midName}
                name="midName"
                placeholder="Middle Name"
                ref={register({ required: true })}
              />
              {errors.midName && "required"}
            </div>
            <div className="col col-md-4 col-xs-12">
              <input
                type="text"
                className="form-control"
                value={lastName}
                name="lastName"
                placeholder="Last Name"
                ref={register({ required: true })}
              />
              {errors.lastName && "required"}
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <label>Email</label>
          </div>
          <div className="row">
            <div className="col col-md-6 col-xs-12">
              <input
                className="form-control"
                type="text"
                value={email}
                name="email"
                placeholder="Your Mail"
                ref={register({
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  },
                })}
              />
              {errors.email && errors.email.type === "required" && "required"}
              {errors.email && errors.email.type === "pattern" && "invalid email address"}
            </div>
            <div className="col col-md-6 col-xs-12">
              <input
                className="form-control"
                type="text"
                value={confirmEmail}
                name="confirmEmail"
                placeholder="Confirm Mail"
                ref={register({
                  required: true,
                  validate: (value) => value === watchEmail,
                })}
              />
              {errors.confirmEmail && errors.confirmEmail.type === "required" && "required"}
              {errors.confirmEmail &&
                errors.confirmEmail.type === "validate" &&
                "Email confirmation is not same"}
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <label>Extra Information</label>
          </div>
          <div className="row">
            <div className="col col-md-12 col-xs-12">
              <textarea
                className="form-control"
                name="extractInfo"
                placeholder="Add more information..."
                ref={register({ required: true, minLength: 20, maxLength: 500 })}>
                {extractInfo}
              </textarea>
              {errors.extractInfo && errors.extractInfo.type === "required" && "required"}
              {errors.extractInfo &&
                errors.extractInfo.type === "minLength" &&
                "Minimum 20 charachter"}
              {errors.extractInfo &&
                errors.extractInfo.type === "maxLength" &&
                "Miximum 500 charachter"}
            </div>
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
