import React from 'react';
import { Form, FormFeedback, Label } from 'reactstrap';
import Select from 'react-select';
import { Controller } from 'react-hook-form';

const MySelect = ({ options, onChange, onBlur, value, error, handleChange }) => {
  const customControlStyles = {
    control: (provided, state) => ({
      ...provided,
      maxHeight: 30.99,
      minHeight: 30.99,
    }),
    singleValue: (provided, state) => ({
      ...provided,
      top: "43%",
    }),
    placeholder: (provided, state) => ({
      ...provided,
      top: "37%",
      fontSize: 14,
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      marginBottom: 10,
      marginTop: 5,
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      paddingTop: 0,
      paddingBottom: 3,
      paddingLeft: 8,
      paddingRight: 8,
    }),
  };
  const handleChanges = (e) => {
    if (handleChange) {
      handleChange(e);
    }
    onChange(e);
  }
  return (<Select
            options={options}
            styles={customControlStyles}
            className={`${error && `is-invalid`}`}
            onChange={handleChanges}
            placeholder="Eliga una opción"
            // noOptionsMessage="Sin registros"
            {...{ onBlur, value }}
          />)
};

const FormSelect = ({ label, id, error, options, handleChange, value, control }, ref) => {
  return (
    <>
      <Label htmlFor={id} className="font-weight-bold">{label}</Label>
      <Controller
        id={id}
        control={control}
        name={id}
        defaultValue={value}
        render={({ onChange, onBlur, value }) => (
          <MySelect {...{
            onChange: item => onChange(item.value),
            onBlur,
            value: options.find(item => item.value === value),
            options: options,
            error: error,
            handleChange: handleChange,
          }} />
        )}
      />
      <FormFeedback type="invalid">{error?.message}</FormFeedback>
    </>
  );
};

export default React.forwardRef(FormSelect);
