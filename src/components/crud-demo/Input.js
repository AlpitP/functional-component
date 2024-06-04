import ErrorMessage from "./ErrorMessage";

export default function Input({
  type,
  onChange,
  value,
  label,
  errorMessage,
  isError,
  name,
}) {
  return (
    <>
      <label>{label + " : "}</label>
      <input type={type} onChange={onChange} value={value} name={name} />
      <br />
      <ErrorMessage isError={isError} message={errorMessage} />
      <br />
    </>
  );
}
