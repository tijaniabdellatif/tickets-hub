export default function ProdutDetils({params}:{params:{id:string}}){

    console.log(params);

    return(
       <>
          <h1>Product 1</h1>
           <p>About the product {params?.id}</p>  
       </> 
    );
}