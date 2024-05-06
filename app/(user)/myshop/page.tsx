"use client"
import React, { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { ProductType } from "@/lib/definitions";

export default function MyShop() {
	const [products, setProducts] =useState<ProductType[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [openModal, setOpenModal] = useState(false);
	const [productDetail, setProductDetail] = useState<ProductType | null>(null);

	// fetch products
	useEffect(() => {
		setLoading(true);
		fetch("https://store.istad.co/api/products/")
			.then((res) => res.json())
			.then((data) => {
				console.log(data.results)
				setProducts(data.results);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setLoading(false);
			});
	}, []);

	const [imagePlaceholder, setImagePlaceholder] = useState<string>(
		"https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
	);

	const handleViewProduct = (product: ProductType) => {
		setProductDetail(product);
		setOpenModal(true);
	};
	
	const handleDeleteProduct = (productId: number) => {
		// Make API request to delete the product with the given ID
		fetch(`https://store.istad.co/api/products/${productId}`, {
		  method: "DELETE",
		})
		  .then((response) => {
			if (response.ok) {
			  // Remove the deleted product from the products list
			  setProducts(products.filter((product) => product.id !== productId));
			  console.log(`Product with ID ${productId} has been deleted.`);
			} else {
			  console.error(`Failed to delete product with ID ${productId}.`);
			}
		  })
		  .catch((error) => {
			console.error(`Error deleting product with ID ${productId}:`, error);
		});
	};

	const handleUpdateProduct = (updatedProduct: ProductType) => {
		// Make API request to update the product
		fetch(`https://store.istad.co/api/products/${updatedProduct.id}`, {
		  method: "PUT",
		  headers: {
			"Content-Type": "application/json",
		  },
		  body: JSON.stringify(updatedProduct),
		})
		  .then((response) => {
			if (response.ok) {
			  // Update the product in the products list
			  setProducts(products.map((product) =>
				product.id === updatedProduct.id ? updatedProduct : product
			  ));
			  console.log(`Product with ID ${updatedProduct.id} has been updated.`);
			} else {
			  console.error(`Failed to update product with ID ${updatedProduct.id}.`);
			}
		  })
		  .catch((error) => {
			console.error(`Error updating product with ID ${updatedProduct.id}:`, error);
		  });
	};

	const columns: TableColumn<ProductType>[] = [
		{
			name: "Title",
			selector: (row) => row.name,
		},

		{
			name: "Price",
			selector: (row) => row.price,
			sortable: true,
		},
		{
			name: "Thumbnail",
			selector: (row): any => (
				<img className="w-16 h-16" src={row.image} alt={row.image} />
			),
			sortable: true,
		},
		{
			name: "Action",
			selector: (row): any => (
				<div>
					<button
						onClick={() => handleViewProduct(row)}
						className="text-gray-100 bg-lime-500 mx-1 px-3 py-2 rounded-md text-sm "
					>
						view
					</button>
					<button
						onClick={() => handleUpdateProduct(row)}
						className="text-gray-100 bg-amber-500 mx-1 px-3 py-2 rounded-md text-sm"
					>
                      Edit
                    </button>
					<button
						onClick={() => handleDeleteProduct(row.id)}
						className="text-gray-100 bg-red-500 mx-1 px-3 py-2 rounded-md text-sm"
					>
						Delete
					</button>
				</div>
			),
		},
	];

	return (
		<main >
			<DataTable
				fixedHeader
				progressPending={loading}
				columns={columns}
				data={products}
				pagination
				customStyles={customStyles}
				striped
				highlightOnHover
			/>	
		</main>
	);
}

const customStyles = {
	rows: {
		style: {
			minHeight: "72px", 
		},
	},
	headCells: {
		style: {
			paddingLeft: "38px", 
			paddingRight: "8px",
			fontSize: "15px",
			backgroundColor: "#f1f1f1",
		},
	},
	cells: {
		style: {
			paddingLeft: "38px", 
			paddingRight: "8px",
		},
	},
};