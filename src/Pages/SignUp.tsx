import { FC, FormEvent, useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

export const SignUp: FC = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const navigate = useNavigate();
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await createUserWithEmailAndPassword(auth, email, password)
			.then((userCredentials) => {
				console.log(userCredentials.user.email);
				setDoc(doc(db, "cart", `${userCredentials.user.email}`), {
					myCart: [{}],
				});
				navigate("/");
			})
			.catch((error) => console.log(error.message));
	};

	return (
		<>
			<div className="h-screen w-full">
				<img
					className=" absolute hidden h-full w-full object-cover sm:block"
					src="https://images.unsplash.com/photo-1563865436874-9aef32095fad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
					alt="/"
				/>
				<div className="fixed top-0 left-0 h-screen w-full bg-black/60"></div>
				<div className="fixed z-50 w-full px-4 py-24">
					<div className="mx-auto h-[600px] max-w-[450px] bg-black/75">
						<div className="mx-auto max-w-[320px] py-16">
							<h1 className="text-3xl font-bold text-white">
								Sign Up
							</h1>
							<form
								onSubmit={(e) => handleSubmit(e)}
								className="flex w-full flex-col py-4"
							>
								<input
									onChange={(e) => setEmail(e.target.value)}
									className="my-2 rounded bg-gray-700 py-3"
									type="email"
									placeholder="Email"
									autoComplete="email"
								/>
								<input
									onChange={(e) =>
										setPassword(e.target.value)
									}
									className="my-2 rounded bg-gray-700 py-3"
									type="password"
									placeholder="current-password"
									autoComplete="password"
								/>
								<button className="my-6 rounded bg-green-500 py-3 font-bold text-white">
									Sign Up
								</button>
								<div className="flex items-center justify-between text-sm text-gray-600">
									<p>
										<input
											className="mr-2"
											type="checkbox"
										/>
										Remember me
									</p>
									<p>Need Help?</p>
								</div>
								<p className="py-8 text-white">
									<span className="text-gray-600">
										Already have an account ?{" "}
									</span>
									<Link to="/signin">Sign In</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
