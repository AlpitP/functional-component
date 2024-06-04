import React, { useCallback, useEffect, useState } from "react";
import "../crud-demo/tableStyle.css";
import Checkbox from "./Checkbox";
import Input from "./Input";
import RadioButton from "./RadioButton";
import { Select } from "./Select";
import Table from "./Table";

let id = 3;
const city = {
  Gujarat: ["select", "Surat", "Ahmedabad", "Rajkot", "Bharuch"],
  Maharashtra: ["select", "Mumbai", "Nagpur", "Pune", "Nasik"],
  Rajasthan: ["select", "Udaipur", "Jaipur", "Bikaner"],
  select: ["select"],
};
function FormComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    hobby: [],
    state: "select",
    city: "select",
  });
  const [isSubmit, setIsSubmit] = useState(true);
  const [editRecordIndex, setEditRecordIndex] = useState();
  const [isError, setIsError] = useState(true);
  const [tableData, setTableData] = useState([
    {
      id: 1,
      name: "Ashish",
      email: "alpitpethani@gmail.com",
      gender: "Male",
      hobby: ["Reading"],
      state: "Gujarat",
      city: "Surat",
    },
    {
      id: 2,
      name: "Alpit",
      email: "ashishkure@gmail.com",
      gender: "Male",
      hobby: ["Reading", "Playing"],
      state: "Maharashtra",
      city: "Mumbai",
    },
  ]);
  const formFieldData = [
    {
      type: "text",
      label: "Name",
      name: "name",
      error: "*Name is Required",
    },
    {
      type: "email",
      label: "Email",
      name: "email",
      error: "*Email is Required",
    },
    {
      type: "radio",
      label: "Gender",
      name: "gender",
      data: ["Male", "Female"],
      error: "*Please Select Your Gender",
    },
    {
      type: "checkbox",
      label: "Hobby",
      name: "hobby",
      data: ["Reading", "Playing", "Sport"],
      error: "*Please Select Your Hobbies",
    },
    {
      type: "select",
      label: "State",
      name: "state",
      data: ["select", "Gujarat", "Maharashtra", "Rajasthan"],
      error: "*Please Select Your State",
    },
    {
      type: "select",
      label: "City",
      name: "city",
      id: "city",
      data: city[formData.state],
      error: "*Please Select Your City",
    },
  ];

  const formValidation = useCallback(() => {
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.gender === "" ||
      formData.hobby.length === 0 ||
      formData.state === "select" ||
      formData.city === "select"
    ) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [formData]);
  useEffect(() => {
    formValidation();
  }, [formData, formValidation]);

  function submitHandler(e) {
    e.preventDefault();
    if (isSubmit && !isError) {
      setTableData([
        ...tableData,
        {
          id: id++,
          name: formData.name,
          email: formData.email,
          gender: formData.gender,
          hobby: formData.hobby,
          state: formData.state,
          city: formData.city,
        },
      ]);
      clearFormHandler();
    } else if (!isSubmit && !isError) {
      tableData.splice(editRecordIndex, 1, {
        id: tableData[editRecordIndex].id,
        name: formData.name,
        email: formData.email,
        gender: formData.gender,
        hobby: formData.hobby,
        state: formData.state,
        city: formData.city,
      });
      setTableData([...tableData]);
      setIsSubmit(true);
      clearFormHandler();
    }
  }
  const clearFormHandler = () => {
    setFormData({
      name: "",
      email: "",
      gender: "",
      hobby: [],
      state: "select",
      city: "select",
    });
    setIsSubmit(true);
    setIsError(true);
  };

  const editDataHandler = useCallback(
    (index) => {
      setIsSubmit(false);
      setEditRecordIndex(index);
      setFormData(tableData[index]);
    },
    [tableData]
  );
  const changeHandler = (e) => {
    if (e.target.type === "checkbox") {
      if (e.target.checked) {
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: [...formData[e.target.name], e.target.value],
        }));
      } else {
        formData[e.target.name].splice(
          formData[e.target.name].findIndex((ele) => ele !== e.target.value),
          1
        );
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: [...formData[e.target.name]],
        }));
      }
    } else if (e.target.name === "state") {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
        city: "select",
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    }
  };

  return (
    <>
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
                  isError={formData[item.name] === ""}
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
                  isError={formData[item.name].length === 0}
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
                  isError={formData[item.name] === "select"}
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
                  isError={formData[item.name] === ""}
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
      <Table
        data={tableData}
        handlerSubmit={setTableData}
        EditRecord={editDataHandler}
        clearForm={clearFormHandler}
      />
      <br />
    </>
  );
}

export default FormComponent;
