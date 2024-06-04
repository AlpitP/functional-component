import { useEffect, useState } from "react"

const withFetchData = (OriginalComponent) => {
    return function (props) {
        const [data, setData] = useState(null);
        const [isLoading, setIsLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001');
                    const jsonData = await (response.json());
                    setData(jsonData);
                    setIsLoading(false);
                } catch (error) {
                    setError(error);
                    setIsLoading(false);
                }
            }
            fetchData();
        }, [])

        return (
            <div>
                <OriginalComponent data={data} isLoading={isLoading} error={error} />
            </div>
        )
    }
}
function FetchData(props) {
    const { data, isLoading, error } = props;

    if (isLoading) return <h1>Loading...</h1>

    if (error) return <p>error: {error.message}</p>

    return (
        <>
            <div style={{ display: 'flex', maxWidth: '100%', flexWrap: 'wrap' }}>
                {data && data.map((user) => {
                    return <UserProfile
                        url={user.imageUrl}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        email={user.email}
                        contactNumber={user.contactNumber} />
                })}
            </div>
        </>
    )
}
function UserProfile(props) {
    return (
        <div style={{ margin: 15 }}>
            <img src={props.url} alt="userImage" />
            <p>{props.firstName}</p>
            <p>{props.lastName}</p>
            <p>{props.email}</p>
            <p>{props.contactNumber}</p>
        </div>
    )
}
export default withFetchData(FetchData);