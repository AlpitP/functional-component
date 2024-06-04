import useFormHandle from "./useFormHandle";

function Form() {
    const firstName = useFormHandle('John')
    const lastName = useFormHandle('Doe')
    console.log(firstName)
    console.log(lastName)
    return (
        <>
            <form>
                First Name:   <input type="text" {...firstName} /><br />
                Last Name:  <input type="text" {...lastName} />
            </form>
            <div>You are {firstName.value} {lastName.value}</div>
        </>
    )
}

export default Form;