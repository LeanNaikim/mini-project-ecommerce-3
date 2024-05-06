"use client";
import { useCreateProductMutation, useDeleteProductMutation, useUpdateProductMutation } from "@/redux/service/product";
import React, { useState } from "react";

export default function TestJWT() {
	const [accessToken, setAccessToken] = useState("");
	const [user, setUser] = useState(null);
	const [unAthorized, setUnAuthorized] = useState(false);

	// handle login
	const handleLogin = async () => {
		const email = "leangnaikim168@gmail.com";
		const password = "susu94949494";

		fetch(process.env.NEXT_PUBLIC_API_URL + "/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log("Data in jwt test: ", data);
				setAccessToken(data.accessToken);
				setUser(data.user);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// handle patial update
	const handlePartialUpdate = async () => {
		const body = {
			name: "casual wardrobe update1",
		};

		const res = await fetch(
			`${process.env.NEXT_PUBLIC_DJANGO_API_URL}/api/products/${499}`,
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${accessToken}`,
				},
				body: JSON.stringify(body),
			}
		);

		if (res.status === 401) {
			setUnAuthorized(true);
		}

		const data = await res.json();
		console.log("Data from partial update: ", data);
	};

	// handel refresh token
	const handleRefreshToken = async () => {
		fetch(process.env.NEXT_PUBLIC_API_URL + "/refresh", {
			method: "POST",
			credentials: "include",
			body: JSON.stringify({}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log("Data from refresh token: ", data);
				setAccessToken(data.accessToken);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// handle logout
	const handleLogout = async () => {
		fetch(process.env.NEXT_PUBLIC_API_URL + "/logout", {
			method: "POST",
			credentials: "include",
			body: JSON.stringify({}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log("Data from logout : ", data);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	// handle Delete 
	const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();
	const handleDeleteProduct = async () => {
			try {
				const res = await deleteProduct({
					id: 753,
					accessToken: accessToken
				});
				console.log(res);
			 } catch (error) {
				console.error("Delete error",error);
	    }
    };

	// handle Create
    const [createProduct, { data, isLoading, error }] = useCreateProductMutation();
	const handleCreateProduct = async () => {
        const productBody = {
            category: {
            name: "running shoes",
            icon: "https://store.istad.co/media/product_images/Screenshot_2024-02-12_152037.png"
            },
            name: "New lesson",
            desc: "Lightweight running shoes have come a long way as both racing flats and daily trainers. Once upon a time, to shave grams on a shoe and get it down to a competitive weight, brands had to make considerable compromises in comfort and stability—but that’s no longer the case. Thanks to lighter midsole foams and meshy upper materials, some of our favorite supportive and maximally cushioned shoes now sit well below 8 ounces on the scale.",
            image: "https://store.istad.co/media/product_images/Screenshot_2024-02-12_152037.png",
            price: "95.25",
            quantity: 200
           };

           try {
            const res = await createProduct({
              newProduct: productBody,
              accessToken: accessToken,
            });
            console.log("Created Product Succesfully",res);
         } catch (error) {
            console.error(error);
         }
    };

    // handle update 
	const [updateProduct, { }] = useUpdateProductMutation();
		const handleUpdateProduct = async () => {
			const productBody = {
				category: {
				name: "running shoes1",
				icon: "https://store.istad.co/media/product_images/Screenshot_2024-02-12_152037.png"
				},
				name: "New lesson1",
				desc: "Lightweight running shoes have come a long way as both racing flats and daily trainers. Once upon a time, to shave grams on a shoe and get it down to a competitive weight, brands had to make considerable compromises in comfort and stability—but that’s no longer the case. Thanks to lighter midsole foams and meshy upper materials, some of our favorite supportive and maximally cushioned shoes now sit well below 8 ounces on the scale.",
				image: "https://store.istad.co/media/product_images/Screenshot_2024-02-12_152037.png",
				price: "95.25",
				quantity: 200
			   };
	
			   try {
				const res = await updateProduct({
				  id: 750,
				  updatedProduct: productBody,
				  accessToken: accessToken,
				});
				console.log("Created Product Succesfully",res);
			 } catch (error) {
				console.error(error);
			 }
        };

	
	return (
		<main className="h-screen grid place-content-center">
			<h1 className="text-5xl ">TEST Handle Login</h1>
			<button
				onClick={handleLogin}
				className="my-4 p-4 bg-blue-600 rounded-xl text-3xl text-gray-100"
			>
				Login
			</button>
			<button
				onClick={handlePartialUpdate}
				className="my-4 p-4 bg-blue-600 rounded-xl text-3xl text-gray-100"
			>
				Partial Update
			</button>
			{unAthorized && (
				<button
					onClick={handleRefreshToken}
					className="my-4 p-4 bg-blue-600 rounded-xl text-3xl text-gray-100"
				>
					Refresh
				</button>
			)}
			<button
				onClick={handleLogout}
				className="my-4 p-4 bg-blue-600 rounded-xl text-3xl text-gray-100"
			>
				Logout
			</button>

			<button onClick={handleDeleteProduct} className='my-4 p-4 bg-blue-600 rounded-xl text-white text-3xl '>Delete Product</button>
            <button onClick={handleCreateProduct} className='my-4 p-4 bg-blue-600 rounded-xl text-white text-3xl '>Create Product</button>
		    <button onClick={handleUpdateProduct} className='my-4 p-4 bg-blue-600 rounded-xl text-white text-3xl '>Update Product</button>
		</main>
	);
}
