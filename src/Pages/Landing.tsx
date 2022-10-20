import { Banner } from "../components/Banner";
import { CategoryCards } from "../components/CategoryCards";
import { Navbar } from "../components/Navbar";
import { Services } from "../components/Services";

export const Landing = () => {
	return (
		<>
			<Navbar />
			<Banner />
			<CategoryCards />
			<Services />
		</>
	);
};
