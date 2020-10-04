/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { withNamespaces } from "react-i18next";
import { useForm } from "react-hook-form";

function PartnetPersonForm({
  t,
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
        <h6>{t("partner-person-form-personDetails-label")}</h6>
        <div className="form-row">
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control"
              defaultValue={firstName}
              name="firstName"
              placeholder={t("partner-person-form-firstName-placeholder")}
              onChange={(e) => formChange(e)}
              ref={register({ required: true })}
            />
            {errors.firstName && (
              <span className="partnerError">{t("form-errorMsg-required")}</span>
            )}
          </div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control"
              defaultValue={midName}
              name="midName"
              placeholder={t("partner-person-form-midName-placeholder")}
              onChange={(e) => formChange(e)}
              ref={register({ required: true })}
            />
            {errors.midName && <span className="partnerError">{t("form-errorMsg-required")}</span>}
          </div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control"
              defaultValue={lastName}
              name="lastName"
              placeholder={t("partner-person-form-lastName-placeholder")}
              onChange={(e) => formChange(e)}
              ref={register({ required: true })}
            />
            {errors.lastName && <span className="partnerError">{t("form-errorMsg-required")}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-4">
            <input
              className="form-control"
              type="text"
              defaultValue={email}
              name="email"
              placeholder={t("partner-person-form-personMail-placeholder")}
              onChange={(e) => formChange(e)}
              ref={register({
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                },
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <span className="partnerError">{t("form-errorMsg-required")}</span>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <span className="partnerError">{t("form-errorMsg-invalidMail")}</span>
            )}
          </div>
          <div className="form-group col-md-4">
            <input
              className="form-control"
              type="text"
              defaultValue={confirmEmail}
              name="confirmEmail"
              placeholder={t("partner-person-form-personConfirmMail-placeholder")}
              onChange={(e) => formChange(e)}
              ref={register({
                required: true,
                validate: (value) => value === watchEmail,
              })}
            />
            {errors.confirmEmail && errors.confirmEmail.type === "required" && (
              <span className="partnerError">{t("form-errorMsg-required")}</span>
            )}
            {errors.confirmEmail && errors.confirmEmail.type === "validate" && (
              <span className="partnerError">{t("form-errorMsg-mailConfirmNotEqual")}</span>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-8">
            <textarea
              className="form-control"
              name="extractInfo"
              placeholder={t("partner-person-form-message-placeholder")}
              onChange={(e) => formChange(e)}
              defaultValue={extractInfo}
              ref={register({ required: true, minLength: 20, maxLength: 500 })}
            />
            {errors.extractInfo && errors.extractInfo.type === "required" && (
              <span className="partnerError">{t("form-errorMsg-required")}</span>
            )}
            {errors.extractInfo && errors.extractInfo.type === "minLength" && (
              <span className="partnerError">{t("form-errorMsg-min-length") + 20}</span>
            )}
            {errors.extractInfo && errors.extractInfo.type === "maxLength" && (
              <span className="partnerError">{t("form-errorMsg-max-length") + 500}</span>
            )}
          </div>
        </div>

        <div className="form-group">
          <button className="btn btn-primary" type="submit">
            {t("form-submit-btn")}
          </button>
        </div>
      </form>
    </div>
  );
}

export default withNamespaces()(PartnetPersonForm);
