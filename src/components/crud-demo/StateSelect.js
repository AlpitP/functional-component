const StateSelect = ({ label, changeState, list, name, value, setCity }) => {
  const optionChangeHandler = (e) => {
    changeState(e.target.value);
    setCity("select");
  };
  return (
    <>
      <label>{label + " : "}</label>
      <select name={name} onChange={optionChangeHandler} value={value}>
        <option value="select" disabled defaultValue="selected">
          Select
        </option>
        {list.map((state, index) => {
          return (
            <option key={index} value={state}>
              {state}
            </option>
          );
        })}
      </select>
    </>
  );
};
export default StateSelect;
