export type ProductType = {
	id: number,
    name: string,
    image: string,
    desc?:string,
    category?:string,
    quantity?: string,
    price: number,
    onClick?:() => void
};

export type TProduct = {
	id: number;
	name: string;
	price: number;
	description: string;
	category: string;
	image: string;
	[vlaue: string]: any;
  };
  

export type CartProductType = {
	name: string;
	image: string;
	price: number;
	id: number;
	// onClick?: () => void;
};


export const menu = [
    {
        title : "Home",
        path : "/"
    },
    {
        title : "About",
        path : "/about-us"
    },
    {
        title : "My Shop",
        path : "/dashboard"
    },
    {
        title : "Policy",
        path : "/policy"
    },
    {
        title : "My Cart",
        path : "/cart"
    }
]