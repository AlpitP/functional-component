export const SelectOption = ({ list, label, name, changeState, stateValue, setCity }) => {
    const optionChangeHandler = (e) => {
        changeState(e.target.value);
        console.log(stateValue)
        setCity('select')
    }
    return (
        <>
            <label>{label + " : "}</label>
            <select name={name} onChange={optionChangeHandler} value={stateValue}>
                <option value='select' disabled selected>Select</option>
                {list.map((state, index) => {
                    return <option key={index} value={state.state}>{state.state}</option>
                })}
            </select>
        </>
    )
}
