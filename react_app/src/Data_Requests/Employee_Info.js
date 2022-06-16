import { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeInfo = () => {
    const [error, setError] = useState(null);
    const [isloaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get("http://dummy.restapiexample.com/api/v1/employees")
            .then((res) => res)
            .then((result) => {
                setIsLoaded(true);
                setItems(result.data.data);
            },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isloaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
                {console.log(items)}
                {items.map((item) => (
                    <li key={item.id}>
                        {item.employee_name}
                    </li>
                ))}
            </>
        )
    }

}

export default EmployeeInfo;