import React from 'react';

const Input = ({
  title,
  inputType,
  id,
  classFrmProps,
  placeholder,
  reqMsg,
  regexMsg,
  regex,
  minLength,
  maxLength,
  register,
  targetElement,
  input,
  error,
}) => {
  console.log('reqMsg', reqMsg);
  return (
    <div className="form-outline mb-4">
      <label className="form-label" htmlFor={id}>
        {title}
      </label>
      <input
        {...input}
        {...register(targetElement, {
          required: reqMsg,
          pattern: { value: regex, message: regexMsg },
        })}
        type={inputType}
        id={id}
        className={`form-control ${classFrmProps}`}
        placeholder={placeholder}
        maxLength={maxLength}
      />
      {error?.hasOwnProperty(targetElement) && (
        <p className="text text-danger">
          {error[targetElement]?.message &&
            error[targetElement]?.message.replace('{0}', `${title?.toLowerCase()} `)}
        </p>
      )}
    </div>
  );
};

export default Input;
