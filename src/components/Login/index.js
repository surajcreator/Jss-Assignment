import React from 'react';
import { withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';
import Input from '../React/Input/Input';
import { filterObject } from '../../common/common';
import { useForm } from 'react-hook-form';
import { withTranslation } from 'react-i18next';

const Login = (props) => {
  const { t } = props;
  const { title, formFields } = props.sitecoreContext.route.fields;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log('t', t && t('Reg'));
  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleSubmit((data) => console.log(data))}>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <h1 className="h3">{title.value}</h1>
              </div>

              {formFields &&
                formFields.map((itm, index) => {
                  const { Title, PlaceholderText, MinLength, MaxLength, Type, Validations } =
                      itm.fields,
                    RequiredMessage =
                      filterObject(Validations, 'RequiredMessage') &&
                      filterObject(Validations, 'RequiredMessage').fields.RequiredMessage.value,
                    RegexMsg =
                      filterObject(Validations, 'Email Validator') &&
                      filterObject(Validations, 'Email Validator').fields.Message.value,
                    Regex =
                      filterObject(Validations, 'Email Validator') &&
                      filterObject(Validations, 'Email Validator').fields.Parameters.value,
                    inputName = `login_${itm.name}`;
                  return (
                    <Input
                      key={`${inputName + index}`}
                      inputType={Type.value}
                      id={inputName}
                      placeholder={PlaceholderText.value}
                      classFrmProps="form-control-lg"
                      title={Title.value}
                      reqMsg={RequiredMessage}
                      regexMsg={RegexMsg}
                      regex={Regex}
                      minLength={MinLength.value}
                      maxLength={MaxLength.value}
                      register={register}
                      targetElement={inputName}
                      error={errors}
                    />
                  );
                })}

              <div className="text-lg-start mt-4 pt-2">
                <button type="submit" className="btn btn-primary btn-lg">
                  {t('LoginButton')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withTranslation()(withSitecoreContext()(Login));
