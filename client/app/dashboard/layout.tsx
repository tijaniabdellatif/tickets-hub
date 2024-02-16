import {Notifications} from '../../components/notifications';
import { UserAnalytics } from '@/components/user-analytics';
import { RevenueMetrics } from '@/components/revenue-metrics';

export default function DashboardLayout({children}:{children:React.ReactNode}){

     return(

        <>
        <div>{children}</div>
         <UserAnalytics />
         <Notifications />
         <RevenueMetrics />
        </>
     );

}