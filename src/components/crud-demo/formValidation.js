export default function formValidation(name, email, setIsValid) {
    if (name === '' || email === '') {
        setIsValid(false);
        alert("Please enter Name")
    }
}