'use client'
import DashboardNavigation from "@/components/DashboardNavigation";
import MenubarCustom from "@/components/MenubarCustom";
import { useGlobalContext } from "../context/store";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";
import DoughnutChart from "@/components/Chart";
import CardCustom from "@/components/CardCustom";
import MonthlyCard from "@/components/MonthlyCard";
import EarningReportsCard from "@/components/EarningReportsCard";
import { NotificationCard } from "@/components/NotificationsCard";
import './home.css'

function HomePage() {
  const { username, isLogin, setIsLogin, setUsername } = useGlobalContext()
  const router = useRouter()
  useLayoutEffect(() => {
    if (isLogin) {
      router.push('/home')
    } else {
      router.push('/')
    }
  }, [isLogin, router])
  return (
    <>
      <div className="w-4/5 mx-4 mainDiv">
        <div className="flex justify-between items-center mb-2">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Dashboard
          </h1>
          <MenubarCustom />
        </div>
        <div className="mb-2">
          <DashboardNavigation />
        </div>
        <div>
          <div className="flex w-3/3 justify-end">
            <div className="flex gap-11 twoCardsDiv">
              <CardCustom
                cardTitle="Total Earning"
                cardDiscription="earnings all time"
                cardContent="19.280"
                cardFooter="150 orders"
              />
              <CardCustom
                cardTitle="Total Spending"
                cardDiscription="spendings all time"
                cardContent="10.534"
                cardFooter="130 orders"
              />
            </div>
            <div className="w-1/3 pl-2 grid gap-5">
              <EarningReportsCard />
              <div>
                <NotificationCard/>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-72 w-2/3 relative bottom-72 monthlyDiv">
          <MonthlyCard />
        </div>
      </div>

    </>
  )
}
export default HomePage;
