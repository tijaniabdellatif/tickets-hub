import {notFound} from 'next/navigation'

export default function ReviewDetails({params}:{params:{id:string,reviewId:string}}){

 
   if(parseInt(params.reviewId) > 1000){

       notFound();
   }

    return(
       <>
          <h1>review details {params.reviewId} for the product {params.id}</h1>
           
       </> 
    );
}