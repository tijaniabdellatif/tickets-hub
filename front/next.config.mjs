/** @type {import('next').NextConfig} */

const nextConfig = {
    logging:{
        fetches:{
            fullUrl:true
        }
    },

    output:"standalone",
    images:{

        domains:['tickets.dev']
    },

    async redirects() {
        
         return [

            {
                source:'/',
                destination:"/home",
                permanent:true,
                basePath:false,
            }
         ];
        
      },
   
};

export default nextConfig;
