import React from 'react';
import {Menu} from 'lucide-react'
import { Sheet,SheetContent,SheetTrigger,SheetClose } from '@/components/ui/sheet';
import Sidebard from './Sidebard';
type Props = {

   
}

const MobileSidebar = (props: Props) => {
  return (
     <Sheet key='left'>
        <SheetTrigger className='md:hidden pr-4 hover:opacity-75 transition'>
        <Menu size={25} />
        </SheetTrigger>
        <SheetContent side='left' className='p-0 bg-white'>
         <SheetClose asChild>
               <Sidebard   />
         </SheetClose>
           
        </SheetContent>
     </Sheet>
  )
}

export default MobileSidebar