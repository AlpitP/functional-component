import ErrorMessage from "./ErrorMessage";
export const Select = ({
  list,
  label,
  name,
  onChange,
  value,
  isError,
  errorMessage,
  id,
}) => {
  return (
    <>
      <label>{label + " : "}</label>
      <select name={name} onChange={onChange} value={value} id={id}>
        {list.map((item, index) => {
          return (
            <option value={item} key={index}>
              {item}
            </option>
          );
        })}
      </select>
      <br />
      <ErrorMessage isError={isError} message={errorMessage} /> <br />
    </>
  );
};
