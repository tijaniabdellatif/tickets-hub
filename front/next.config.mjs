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
    }
   
};

export default nextConfig;
