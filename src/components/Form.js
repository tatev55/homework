function Form(){
    return (
        <form className = "form">
            <p>Book an Appointment</p>
            <input type = "text" placeholder = "Name" className = "input"/>
            <input type = "email" placeholder = "Email" className = "input"/>
            <button className = "button" onClick = {() =>{
                alert("Please fill in your name and email");
            }} >Book Appointment</button>
        </form>
    )
}

export default Form;