import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const ProductForm = () => {
    
    const [product, update] = useState({
        name: "",
        type: ""
        

        

    })
   
const navigate = useNavigate()


    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        console.log("You clicked the  button.")

        // TODO: Create the object to be saved to the API
const productToSendToAPI = {
    userId: kandyUserObject.id,
    name: product.name,
    type: product.type
    
}

        // TODO: Perform the fetch() to POST the object to the API
  return fetch(`http://localhost:8088/products`, {
  method: "POST",
    headers: {
        "Content-Type": "application/json"
    
    },
body: JSON.stringify(productToSendToAPI)

  })
  .then(response => response.json())
  .then(() => {
    navigate("/products")

  })
  
}
    

    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Product entry</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Please Place name of candy"
                        value={product.name}
                        onChange={
                            (evt) => {
                                const copy = {...product}
                                copy.name = evt.target.value
                            update(copy)
                            }
                        } />
                </div>
                <div className="form-group">
                    <label htmlFor="type">Type:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Insert Candy Type here"
                        value={product.type}
                        onChange={
                            (evt) => {
                                const copy = {...product}
                                copy.type = evt.target.value
                            update(copy)
                            }
                        } />
                </div>
                <div className="form-group">
                    <label htmlFor="Price">Price:</label>
                    <input
                        required autoFocus
                        type="number"
                        step="0.01"
                        className="form-control"
                        placeholder="Insert Candy Price here"
                        value={product.price}
                        onChange={
                            (evt) => {
                                const copy = {...product}
                                copy.price = evt.target.value
                            update(copy)
                            }
                        } />
                </div> 
            </fieldset>
            <button
            onClick={ (clickEvent) => handleSaveButtonClick(clickEvent)}
            
            
            className="btn btn-primary">
                Submit Product
            </button>
        </form>
        
    )
                    }
                   
// on line 93 step is equal to the incriment amount of the counting table