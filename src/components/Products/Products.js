import { useEffect, useState } from "react";
import "./Products.css"
import { useNavigate } from "react-router-dom";


export const ProductList = () => {
    const [product, setProducts] = useState([])
     const [filteredProducts, setFilteredProduct] = useState([])
     const [ showTopPrice, setTopPrice] = useState(false)
    const navigate = useNavigate()



     const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)
   
useEffect(() => {
        if (showTopPrice) {
            const topPrice = product.filter(product => product.price > 2)
            setFilteredProduct(topPrice)
        }
        else {
            setFilteredProduct(product)
        }
    },
    [product, showTopPrice]
)

useEffect (
    () => {
        fetch(`http://localhost:8088/product`)
        .then(response => response.json()) 
        .then((productsArray) => {
            setProducts(productsArray)}
    )
},
   []     
)







// I originally had this in and didn't realize that by this calling setFilteredProduct in line 47 it was messing with my use effect starting in line 17
// useEffect (
//     () => {
//         if (kandyUserObject.staff) {
//             setFilteredProduct(product)
//         }

//         else {
//             const myProducts = product.filter(product => product.name)
//             setFilteredProduct(myProducts)
//         }
//     }
// )






return <>
     <h2>List of Products</h2>
     <article className="products">
        {
            filteredProducts.map(
                (product) => {
                    return <section className="productsList" key={`product--${product.typeID}`}>
                        <li>{product.name}
                        {product.price}
                        {product.type}
                        </li>
                    </section>
                }
            )}   
            
            { 
kandyUserObject.staff ? 
<>
<button onClick={() => {setTopPrice(true)}} >Top Prices</button>
<button onClick ={() => {setTopPrice(false)}} >Show All</button>
<button onClick={() => navigate("product/create")}>Create Product</button>
</>
:<>

   </>
   }
    </article>
</>
}

// react didn't like when I had an additional button outside of the format in lines in kandyUserObject. Worked once they were all contained in the format