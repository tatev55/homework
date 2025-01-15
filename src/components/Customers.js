function Customers(){
    return (
        <div className = "customers-container">
            <div>
                <h2 className = "customer-name-title">Happy Customers</h2>
                
            </div>
            <div className = "customer-cards">
                <CustomerCard
                    image = "customer-one"
                    name = "Lina Gold"
                    text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"
                />

                <CustomerCard
                    image = "customer-two"
                    name = "Mike Fisher"
                    text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"
                />
                <CustomerCard
                    image = "customer-three"
                    name = "Sheen Yu"
                    text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"
                />
            </div>
        </div>
    )
}


function CustomerCard({image, name, text}){
    return (
        <div className = "card">
            <div className = {image}></div>
            <h3 className = "customer-name-title">{name}</h3>
            <p> {text}</p>
        </div>
    )
}

export default Customers;