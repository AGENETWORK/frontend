/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { useForm } from "react-hook-form";

function PartnetOrgForm({
  isVisable,
  orgName,
  orgEmail,
  repFirstName,
  repMidName,
  repLastName,
  repEmail,
  message,
}) {
  const { register, handleSubmit, errors, watch } = useForm();
  const watchOrgEmail = watch("orgEmail", "");
  const watchRepEmail = watch("repEmail", "");
  const onSubmit = (values) => console.log(values);

  if (!isVisable) return <div />;

  return (
    <div className="container">
      <h4>My Form</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <div className="row">
            <label>Organization Name</label>
          </div>
          <div className="row">
            <div className="col col-md-6 col-sm-12">
              <input
                type="text"
                className="form-control"
                value={orgName}
                name="orgName"
                placeholder="Organization Name"
                ref={register({ required: true })}
              />
              {errors.orgName && <span>required</span>}
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <label>Organization Email</label>
          </div>

          <div className="row">
            <div className="col col-md-6 col-sm-12">
              <input
                className="form-control"
                type="text"
                value={orgEmail}
                name="orgEmail"
                placeholder="Organization Mail"
                ref={register({
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  },
                })}
              />
              {errors.orgEmail && errors.orgEmail.type === "required" && "required"}
              {errors.orgEmail && errors.orgEmail.type === "pattern" && "invalid email"}
            </div>
            <div className="col col-md-6 col-sm-12">
              <input
                className="form-control"
                type="text"
                value={orgEmail}
                name="confirmOrgEmail"
                placeholder="Confirm Mail"
                ref={register({
                  required: true,
                  validate: (value) => value === watchOrgEmail,
                })}
              />
              {errors.confirmOrgEmail && errors.confirmOrgEmail.type === "required" && "equired"}
              {errors.confirmOrgEmail &&
                errors.confirmOrgEmail.type === "validate" &&
                "email confirmation is not same"}
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <label>Repsintitaive Name</label>
          </div>
          <div className="row">
            <div className="col col-md-4 col-sm-12">
              <input
                type="text"
                className="form-control"
                value={repFirstName}
                name="repFirstName"
                placeholder="Repsintitaive first Name"
                ref={register({ required: true })}
              />

              {errors.repFirstName && <span>required</span>}
            </div>
            <div className="col col-md-4 col-sm-12">
              <input
                type="text"
                className="form-control"
                value={repMidName}
                name="repMidName"
                placeholder="Repsintitaive Middle Name"
                ref={register({ required: true })}
              />

              {errors.repMidName && "required"}
            </div>
            <div className="col col-md-4 col-sm-12">
              <input
                type="text"
                className="form-control"
                value={repLastName}
                name="repLastName"
                placeholder="Repsintitaive Last Name"
                ref={register({ required: true })}
              />

              {errors.repLastName && "required"}
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <label>Repsintitaive Email</label>
          </div>

          <div className="row">
            <div className="col col-md-6 col-sm-12">
              <input
                className="form-control"
                type="text"
                value={repEmail}
                name="repEmail"
                placeholder="Repsintitaive Mail"
                ref={register({
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  },
                })}
              />
              {errors.repEmail && errors.repEmail.type === "required" && "required"}
              {errors.repEmail && errors.repEmail.type === "pattern" && "invalid email"}
            </div>
            <div className="col col-md-6 col-sm-12">
              <input
                className="form-control"
                type="text"
                value={repEmail}
                name="confirmRepEmail"
                placeholder="Confirm Mail"
                ref={register({
                  required: true,
                  validate: (value) => value === watchRepEmail,
                })}
              />
              {errors.confirmRepEmail && errors.confirmRepEmail.type === "required" && "equired"}
              {errors.confirmRepEmail &&
                errors.confirmRepEmail.type === "validate" &&
                "email confirmation is not same"}
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <label>Comment or Message</label>
          </div>

          <div className="row">
            <div className="col col-md-12 col-sm-12">
              <textarea
                className="form-control"
                name="message"
                placeholder="Add a message"
                ref={register({ required: true, minLength: 20, maxLength: 500 })}
              >
                {message}
              </textarea>
              {errors.message && errors.message.type === "required" && "required"}
              {errors.message && errors.message.type === "minLength" && "Minimum 20 charachter"}
              {errors.message && errors.message.type === "maxLength" && "Miximum 500 charachter"}
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

export default PartnetOrgForm;
