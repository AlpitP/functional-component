import ErrorMessage from "./ErrorMessage";

export default function Checkbox({
  label,
  onChange,
  value,
  list,
  isError,
  name,
  errorMessage,
}) {
  return (
    <>
      <label>{label + " :"}</label>
      {list.map((item, index) => {
        return (
          <span key={index}>
            <input
              type="checkbox"
              name={name}
              value={item}
              onChange={onChange}
              checked={value.includes(item)}
            />
            {item}
          </span>
        );
      })}
      <br />
      <ErrorMessage isError={isError} message={errorMessage} /> <br />
    </>
  );
}
