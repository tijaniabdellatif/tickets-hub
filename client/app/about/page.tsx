import { Metadata } from "next"

export const metadata: Metadata = {

    title:"About code evolution",
    authors:[{name:"abdellatif tijani"}],
    description:'tijani abdellatif description',
    applicationName:'Tdemy',
    publisher:'GCP',
    keywords:['code',"evolution",'something','else'],
    
}

export default function About(){

    return <h1>About page</h1> 
}