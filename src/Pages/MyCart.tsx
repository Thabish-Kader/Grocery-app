import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { doc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { ICart } from "../interface/interface";

export const MyCart = () => {
	const user = auth.currentUser;
	const [cart, setCart] = useState<ICart | undefined>();

	useEffect(() => {
		onSnapshot(doc(db, "cart", `${user?.email}`), (doc) => {
			setCart(doc.data());
		});
	}, []);

	return (
		<div className="h-full w-full ">
			<Navbar />

			<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
				{cart?.myCart?.map((item: any, id) => (
					<>
						<div
							key={id}
							className=" flex flex-col justify-between "
						>
							<img
								className="object-fit h-[250px] w-[350px]"
								src={item.image}
								alt=""
							/>
							<h1 className="text-xl text-green-500">
								{item.name}
							</h1>
							<h1 className="text-lg text-orange-500">
								{item.price}
							</h1>
						</div>
					</>
				))}
			</div>
		</div>
	);
};
