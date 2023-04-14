import { Route, Routes, Outlet } from "react-router-dom"
import { LocationList } from "../Locations/Locations"
import { ProductList } from "../Products/Products"
import { ProductForm } from "../Products/ProductsForm"

export const ApplicationViews = () => {
	return ( 
	<Routes>
<Route path="/" element={
	<>

	<h2 Kandy Korner></h2>
	<div>If you got the eats, we got the treats</div>
	<Outlet />
	</>
}>
	<Route path="Locations" element={ <LocationList /> } />
	<Route path="Products" element={ <ProductList /> } />
	<Route path="/products/product/create" element={ <ProductForm /> } />
</Route>
	</Routes>
	)
}


