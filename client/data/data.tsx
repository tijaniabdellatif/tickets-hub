

type ProductsType = {

    title:string,
    price:number,
    id:string,
    description:string
}

type NavLinksType = {

      name:string,
      uri:string
}
export const productData:Array<ProductsType> = [

 {
    title:"product 1",
    price:3200,
    id:"120",
    description:"description 1"
 },
 {
    title:"product 2",
    price:4200,
    id:"121",
    description:"description 2"
 },
 {

    title:"product 3",
    price:4200,
    id:"122",
    description:"description 3"
 }
]

export const navLinks:Array<NavLinksType> = [

    {
        name:"Register",
        uri:"/register"
    },
    {

        name:"Login",
        uri:"/login"
    }
]