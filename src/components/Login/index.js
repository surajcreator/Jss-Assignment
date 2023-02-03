import React, { useState } from 'react';
import { withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';
import Input from '../React/Input/Input';
import { filterObject } from '../../common/common';
import { useForm } from 'react-hook-form';
import { withTranslation } from 'react-i18next';
import axios from 'axios';
import { ApiRoutes } from '../../config/ApiRoutes';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
  const [validUser, setValidUser] = useState(null);
  const [asyncCall, setAsyncCall] = useState(null);
  const navigate = useHistory();
  const { t } = props;
  const { title, formFields, nextRoute, loginFailureMsg } = props.sitecoreContext.route.fields;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log('t', t && t('Reg'));

  const onSubmit = async (data) => {
    setAsyncCall(true);
    const response = await axios(ApiRoutes.GetUserDetails);
    setAsyncCall(false);
    console.log('response', response.data);
    let user = await getUser(response, data);
    if (user) {
      setValidUser(user);
      delete user.password;
      sessionStorage.setItem('isAuthenticated', true);
      sessionStorage.setItem('user', JSON.stringify(user));
      navigate.push(nextRoute.url);
    } else {
      setValidUser({
        error: loginFailureMsg,
      });
    }
  };

  const getUser = (users, data) => {
    let loginUser = users.data.filter((user) => user.email === data.login_email)[0];
    if (loginUser && loginUser.password === data.login_password) return loginUser;
  };

  return (
    <section className="custom-container-xs m-auto vh-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <h1 className="card-title h3 mb-0">{title.value}</h1>
              </div>
            </div>
            <div className="card-body">
              {validUser && validUser.error && (
                <div className="alert alert-danger">{validUser.error.value}</div>
              )}
              <form onSubmit={handleSubmit(onSubmit.bind(this))} noValidate>
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
                        JSON.parse(
                          filterObject(Validations, 'Email Validator').fields.Parameters.value
                        ).regularExpression,
                      inputName = `login_${itm.name}`;
                    return (
                      <Input
                        key={`${inputName + index}`}
                        inputType={Type.value}
                        id={inputName}
                        placeholder={PlaceholderText.value}
                        classFrmProps=""
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
                  <button type="submit" className="btn btn-primary">
                    {/* {t('df')} */}
                    {asyncCall ? 'Please wait...' : 'Login'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withSitecoreContext()(Login);
