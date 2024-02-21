import React from "react";
import Sidebard from "./_components/Sidebard";

export default function DashboardLayout({children}:{children:React.ReactNode}){

     return (
     <div className="h-full">
        <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
            <Sidebard />
        </div> 
      {children}
     </div>)
}

