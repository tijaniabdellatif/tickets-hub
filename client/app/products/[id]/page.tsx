import {Metadata} from 'next';
import Link from 'next/link';

type Props = {

    params:{

        id:string
    }
}



export const generateMetadata = async ({params}:Props):Promise<Metadata> => {
    const title = await new Promise(resolve => {
         setTimeout(() => {   
            resolve(`Iphone ${params.id}`)
         },100)
    })
    return {
        title:`Product ${title}`,  
    }

}

export default function ProdutDetils({params}:Props){
    return(
       <>
           <h1>Product </h1>
           <p>About the product {params?.id}</p>  
           
       </> 
    );
}