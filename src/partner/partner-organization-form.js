/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { useForm } from "react-hook-form";

function PartnetOrgForm({
  isVisable,
  orgName,
  orgEmail,
  orgConfirmMail,
  repFirstName,
  repMidName,
  repLastName,
  repEmail,
  repConfirmMail,
  message,
  onSubmitFrom,
  formChange,
}) {
  const { register, handleSubmit, errors, watch } = useForm();
  const watchOrgEmail = watch("orgEmail", "");
  const watchRepEmail = watch("repEmail", "");
  const onSubmit = (data) => {
    onSubmitFrom(data);
  };
  if (!isVisable) return <div />;

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h6>Organization Details</h6>
        <div className="form-row">
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control"
              defaultValue={orgName}
              name="orgName"
              onChange={(e) => formChange(e)}
              placeholder="Organization Name"
              ref={register({ required: true })}
            />
            {errors.orgName && <span className="partnerError">required</span>}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <input
              className="form-control"
              type="text"
              defaultValue={orgEmail}
              name="orgEmail"
              onChange={(e) => formChange(e)}
              placeholder="Organization Mail"
              ref={register({
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                },
              })}
            />
            {errors.orgEmail && errors.orgEmail.type === "required" && (
              <span className="partnerError">required</span>
            )}
            {errors.orgEmail && errors.orgEmail.type === "pattern" && (
              <span className="partnerError">invalid email</span>
            )}
          </div>
          <div className="form-group col-md-4">
            <input
              className="form-control"
              type="text"
              defaultValue={orgConfirmMail}
              name="confirmOrgEmail"
              placeholder="Confirm Mail"
              onChange={(e) => formChange(e)}
              ref={register({
                required: true,
                validate: (value) => value === watchOrgEmail,
              })}
            />
            {errors.confirmOrgEmail && errors.confirmOrgEmail.type === "required" && (
              <span className="partnerError">required</span>
            )}
            {errors.confirmOrgEmail && errors.confirmOrgEmail.type === "validate" && (
              <span className="partnerError">email confirmation is not same</span>
            )}
          </div>
        </div>

        <h6>Representative Details</h6>
        <div className="form-row">
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control"
              defaultValue={repFirstName}
              name="repFirstName"
              placeholder="Representative first Name"
              onChange={(e) => formChange(e)}
              ref={register({ required: true })}
            />

            {errors.repFirstName && <span className="partnerError">required</span>}
          </div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control"
              defaultValue={repMidName}
              name="repMidName"
              placeholder="Representative Middle Name"
              onChange={(e) => formChange(e)}
              ref={register({ required: true })}
            />

            {errors.repMidName && <span className="partnerError">required</span>}
          </div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control"
              defaultValue={repLastName}
              name="repLastName"
              placeholder="Representative Last Name"
              onChange={(e) => formChange(e)}
              ref={register({ required: true })}
            />

            {errors.repLastName && <span className="partnerError">required</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-4">
            <input
              className="form-control"
              type="text"
              defaultValue={repEmail}
              name="repEmail"
              placeholder="Representative Mail"
              onChange={(e) => formChange(e)}
              ref={register({
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                },
              })}
            />
            {errors.repEmail && errors.repEmail.type === "required" && (
              <span className="partnerError">required</span>
            )}
            {errors.repEmail && errors.repEmail.type === "pattern" && (
              <span className="partnerError">invalid email</span>
            )}
          </div>
          <div className="form-group col-md-4">
            <input
              className="form-control"
              type="text"
              defaultValue={repConfirmMail}
              name="confirmRepEmail"
              placeholder="Confirm Mail"
              onChange={(e) => formChange(e)}
              ref={register({
                required: true,
                validate: (value) => value === watchRepEmail,
              })}
            />
            {errors.confirmRepEmail && errors.confirmRepEmail.type === "required" && (
              <span className="partnerError">required</span>
            )}
            {errors.confirmRepEmail && errors.confirmRepEmail.type === "validate" && (
              <span className="partnerError">email confirmation is not same</span>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-8">
            <textarea
              className="form-control"
              name="message"
              placeholder="Add a message"
              onChange={(e) => formChange(e)}
              defaultValue={message}
              ref={register({ required: true, minLength: 20, maxLength: 500 })}></textarea>
            {errors.message && errors.message.type === "required" && (
              <span className="partnerError">required</span>
            )}
            {errors.message && errors.message.type === "minLength" && (
              <span className="partnerError">Minimum 20 charachter</span>
            )}
            {errors.message && errors.message.type === "maxLength" && (
              <span className="partnerError">Miximum 500 charachter</span>
            )}
          </div>
        </div>
        <div className="form-row">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default PartnetOrgForm;
