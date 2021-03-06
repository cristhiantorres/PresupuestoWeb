import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import NumberFormat from 'react-number-format';
import { Label, Input, InputGroupAddon, InputGroupText, FormFeedback, InputGroup } from 'reactstrap';

const FormInput = ({ id, label, children, type, error, handleChange, className, onBlur, readOnly, value, control }, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
    {type !== 'checkbox' && (
      <Label htmlFor={id} className="font-weight-bold">
        {label}
        {children}
      </Label>
    )}
    {type === 'textarea' ? (
      <Input
          readOnly={readOnly}
          className={`${!!error && 'is-invalid'} ${className}`}
          as="textarea"
          id={id}
          type={type}
          name={id}
          ref={ref}
          onChange={handleChange}
          size="sm"
          onBlur={onBlur}
          value={value}
      />
    ) : (type === 'file') ? (
      <Input
        readOnly={readOnly}
        className={`${!!error && 'is-invalid'} ${className}`}
        id={id}
        type={type}
        name={id}
        ref={ref}
        size="sm"
        onChange={handleChange}
        onBlur={onBlur}
        value={value}
      />
    ) : (type === 'password') ? (
      <InputGroup className="input-password">
        {showPassword ? (
          <Input
            readOnly={readOnly}
            className={`${!!error && 'is-invalid'} ${className}`}
            id={id}
            type="text"
            name={id}
            ref={ref}
            size="sm"
            onChange={handleChange}
            onBlur={onBlur}
            value={value}
          />
        ) : (
          <Input
            readOnly={readOnly}
            className={`${!!error && 'is-invalid'} ${className}`}
            id={id}
            type={type}
            name={id}
            ref={ref}
            size="sm"
            onChange={handleChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        <InputGroupAddon addonType="append" onClick={() => setShowPassword(!showPassword)}>
          <InputGroupText>
            <FontAwesomeIcon icon={showPassword ? 'eye-slash' : 'eye'} />
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    ) : (type === 'checkbox') ? (
      <Input
        readOnly={readOnly}
        className={`${!!error && 'is-invalid'} ${className}`}
        id={id}
        label={label}
        type={type}
        name={id}
        ref={ref}
        size="sm"
        onChange={handleChange}
        onBlur={onBlur}
        value={value}
      />
    ) : (type === 'phone') ? (
        <Controller
          control={control}
          name={id}
          render={({ onChange, onBlur, value, name, ref }) => (
            <NumberFormat
              readOnly={readOnly}
              className={`form-control form-control-sm ${!!error && 'is-invalid'} ${className}`}
              id={name}
              label={label}
              name={name}
              ref={ref}
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              format="####-######"
              mask="_"
            />
          )}
        />
    ) : (type === 'amount') ? (
      <Controller
        control={control}
        name={id}
        render={({ onChange, onBlur, value, name, ref }) => (
          <NumberFormat
            readOnly={readOnly}
            className={`form-control form-control-sm ${!!error && 'is-invalid'} ${className}`}
            id={name}
            label={label}
            name={name}
            ref={ref}
            value={value}
            onBlur={onBlur}
            onValueChange={(values) => {
              const { formattedValue, value } = values;
              handleChange(value);
            }}
            thousandSeparator={'.'}
            decimalSeparator={','}
          />
      )}
    />
    ) : (
      <Input
        readOnly={readOnly}
        className={`${!!error && 'is-invalid'} ${className}`}
        id={id}
        type={type}
        name={id}
        ref={ref}
        size="sm"
        onChange={handleChange}
        onBlur={onBlur}
        value={value}
      />
    )}
    <FormFeedback type="invalid">{error?.message}</FormFeedback>
  </>

  );
};

export default React.forwardRef(FormInput);
