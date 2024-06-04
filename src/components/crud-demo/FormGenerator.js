import React from "react";
import Checkbox from "./Checkbox";
import Input from "./Input";
import RadioButton from "./RadioButton";
import { Select } from "./Select";

const FormGenerator = ({
  formFieldData,
  formData,
  submitHandler,
  changeHandler,
  isSubmit,
  clearFormHandler,
}) => {
  return (
    <form onSubmit={submitHandler}>
      {formFieldData.map((item, index) => {
        switch (item.type) {
          case "radio":
            return (
              <RadioButton
                label={item.label}
                name={item.name}
                onChange={changeHandler}
                value={formData[item.name]}
                list={item.data}
                isError={formData[item.name] === "" ? true : false}
                errorMessage={item.error}
                key={index}
              />
            );
          case "checkbox":
            return (
              <Checkbox
                label={item.label}
                name={item.name}
                onChange={changeHandler}
                value={formData[item.name]}
                list={item.data}
                isError={formData[item.name].length === 0 ? true : false}
                id={item.id}
                errorMessage={item.error}
                key={index}
              />
            );
          case "select":
            return (
              <Select
                list={item.data}
                label={item.label}
                name={item.name}
                id={item.id}
                onChange={changeHandler}
                value={formData[item.name]}
                isError={formData[item.name] === "select" ? true : false}
                errorMessage={item.error}
                key={index}
              />
            );

          default:
            return (
              <Input
                label={item.label}
                type={item.type}
                name={item.name}
                onChange={changeHandler}
                value={formData[item.name]}
                errorMessage={item.error}
                key={index}
                isError={formData[item.name] === "" ? true : false}
              />
            );
        }
      })}
      {isSubmit ? (
        <button name="submit">Submit</button>
      ) : (
        <>
          <button name="update">Update</button>
          <button onClick={clearFormHandler} style={{ marginLeft: 10 }}>
            Cancel
          </button>
        </>
      )}
    </form>
  );
};

export default FormGenerator;
