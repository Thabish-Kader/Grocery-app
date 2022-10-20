import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Landing } from "./Pages/Landing";
import { SignUp } from "./Pages/SignUp";
import { SignIn } from "./Pages/SignIn";
import { MyCart } from "./Pages/MyCart";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/mycart" element={<MyCart />} />
			</Routes>
		</>
	);
}

export default App;
