/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { withNamespaces } from "react-i18next";
import { useForm } from "react-hook-form";

function PartnetOrgForm({
  t,
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
        <h6>{t("partner-org-form-orgDetails-label")}</h6>
        <div className="form-row">
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control"
              defaultValue={orgName}
              name="orgName"
              onChange={(e) => formChange(e)}
              placeholder={t("partner-org-form-orgName-placeholder")}
              ref={register({ required: true })}
            />
            {errors.orgName && <span className="partnerError">{t("form-errorMsg-required")}</span>}
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
              placeholder={t("partner-org-form-orgMail-placeholder")}
              ref={register({
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                },
              })}
            />
            {errors.orgEmail && errors.orgEmail.type === "required" && (
              <span className="partnerError">{t("form-errorMsg-required")}</span>
            )}
            {errors.orgEmail && errors.orgEmail.type === "pattern" && (
              <span className="partnerError">{t("form-errorMsg-invalidMail")}</span>
            )}
          </div>
          <div className="form-group col-md-4">
            <input
              className="form-control"
              type="text"
              defaultValue={orgConfirmMail}
              name="confirmOrgEmail"
              placeholder={t("partner-org-form-orgConfirmMail-placeholder")}
              onChange={(e) => formChange(e)}
              ref={register({
                required: true,
                validate: (value) => value === watchOrgEmail,
              })}
            />
            {errors.confirmOrgEmail && errors.confirmOrgEmail.type === "required" && (
              <span className="partnerError">{t("form-errorMsg-required")}</span>
            )}
            {errors.confirmOrgEmail && errors.confirmOrgEmail.type === "validate" && (
              <span className="partnerError">{t("form-errorMsg-mailConfirmNotEqual")}</span>
            )}
          </div>
        </div>

        <h6>{t("partner-org-form-orgRepDetails-label")}</h6>
        <div className="form-row">
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control"
              defaultValue={repFirstName}
              name="repFirstName"
              placeholder={t("partner-org-form-repFirstName-placeholder")}
              onChange={(e) => formChange(e)}
              ref={register({ required: true })}
            />

            {errors.repFirstName && (
              <span className="partnerError">{t("form-errorMsg-required")}</span>
            )}
          </div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control"
              defaultValue={repMidName}
              name="repMidName"
              placeholder={t("partner-org-form-repMidName-placeholder")}
              onChange={(e) => formChange(e)}
              ref={register({ required: true })}
            />

            {errors.repMidName && (
              <span className="partnerError">{t("form-errorMsg-required")}</span>
            )}
          </div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control"
              defaultValue={repLastName}
              name="repLastName"
              placeholder={t("partner-org-form-repLastName-placeholder")}
              onChange={(e) => formChange(e)}
              ref={register({ required: true })}
            />

            {errors.repLastName && (
              <span className="partnerError">{t("form-errorMsg-required")}</span>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-4">
            <input
              className="form-control"
              type="text"
              defaultValue={repEmail}
              name="repEmail"
              placeholder={t("partner-org-form-repMail-placeholder")}
              onChange={(e) => formChange(e)}
              ref={register({
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                },
              })}
            />
            {errors.repEmail && errors.repEmail.type === "required" && (
              <span className="partnerError">{t("form-errorMsg-required")}</span>
            )}
            {errors.repEmail && errors.repEmail.type === "pattern" && (
              <span className="partnerError">{t("form-errorMsg-invalidMail")}</span>
            )}
          </div>
          <div className="form-group col-md-4">
            <input
              className="form-control"
              type="text"
              defaultValue={repConfirmMail}
              name="confirmRepEmail"
              placeholder={t("partner-org-form-reConfirmpMail-placeholder")}
              onChange={(e) => formChange(e)}
              ref={register({
                required: true,
                validate: (value) => value === watchRepEmail,
              })}
            />
            {errors.confirmRepEmail && errors.confirmRepEmail.type === "required" && (
              <span className="partnerError">{t("form-errorMsg-required")}</span>
            )}
            {errors.confirmRepEmail && errors.confirmRepEmail.type === "validate" && (
              <span className="partnerError">{t("form-errorMsg-mailConfirmNotEqual")}</span>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-8">
            <textarea
              className="form-control"
              name="message"
              placeholder={t("partner-org-form-message-placeholder")}
              onChange={(e) => formChange(e)}
              defaultValue={message}
              ref={register({ required: true, minLength: 20, maxLength: 500 })}
            />
            {errors.message && errors.message.type === "required" && (
              <span className="partnerError">{t("form-errorMsg-required")}</span>
            )}
            {errors.message && errors.message.type === "minLength" && (
              <span className="partnerError">{t("form-errorMsg-min-length") + 20}</span>
            )}
            {errors.message && errors.message.type === "maxLength" && (
              <span className="partnerError">{t("form-errorMsg-max-length") + 500}</span>
            )}
          </div>
        </div>
        <div className="form-row">
          <button className="btn btn-primary" type="submit">
            {t("form-submit-btn")}
          </button>
        </div>
      </form>
    </div>
  );
}

export default withNamespaces()(PartnetOrgForm);
