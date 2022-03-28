export default function Forpropschild(props){
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.data1.firstname}</td>
                        <td>{props.data1.lastname}</td>
                        <td>{props.data1.address}</td>
                    </tr>   
                </tbody>
            </table>
        </div>
    )
}