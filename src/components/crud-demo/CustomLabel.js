export default function CustomLabel({ name, value }) {
    return (
        <label htmlFor={name}>{value}</label>
    )
}