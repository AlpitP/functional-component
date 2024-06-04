export default function CitySelect({ name, changeCity, value, list, selectedState, label }) {
    return (
        <>
            <label>{label + " : "}</label>
            <select name={name} onChange={(e) => changeCity(e.target.value)} value={value}>
                <option value='select' disabled defaultValue='selected'>Select</option>
                {list.map((state) => {
                    return (selectedState === state.state) &&
                        state.city.map((city, index) => {
                            return <option key={index} value={city}>{city}</option>
                        });
                })}
            </select>
        </>
    )
}