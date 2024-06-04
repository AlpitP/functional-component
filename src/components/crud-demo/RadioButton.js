import ErrorMessage from "./ErrorMessage";

export default function RadioButton({
  label,
  onChange,
  value,
  list,
  isError,
  errorMessage,
  name,
}) {
  return (
    <>
      <label>{label + " :"}</label>
      {list.map((item, index) => {
        return (
          <span key={index}>
            <input
              type="radio"
              name={name}
              value={item}
              onChange={onChange}
              checked={value === item}
            />
            {item}
          </span>
        );
      })}
      <br />
      <ErrorMessage isError={isError} message={errorMessage} />
      <br />
    </>
  );
}
