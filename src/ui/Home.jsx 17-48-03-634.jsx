import React from "react";
import {
  Package,
  TrendingUp,
  TrendingDown,
  BookOpenCheck,
  PackageOpen,
  BookX,
  Clock,
  DollarSign,
  Target,
} from "lucide-react";
import PerfomanceKPI from "./PerfomanceKPI";

const DoughnutChart = ({ title, percent }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
    <h3 className="text-lg font-semibold text-text mb-4">{title}</h3>
    <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
      {/* Placeholder for Doughnut Chart */}
      <span className="text-2xl font-bold text-primary">{percent}</span>
    </div>
  </div>
);

const ActivityFeed = () => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
    <h3 className="text-lg font-semibold text-text mb-4">
      Recent Activity Feed
    </h3>
    <ul className="space-y-3 text-sm">
      <li className="flex items-start gap-2">
        <Clock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
        <div>
          <p className="text-text font-medium">Order #799 Completed</p>
          <p className="text-text/50 text-xs">just now</p>
        </div>
      </li>
      <li className="flex items-start gap-2">
        <DollarSign className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
        <div>
          <p className="text-text font-medium">Invoice #012 Sent</p>
          <p className="text-text/50 text-xs">2 hours ago</p>
        </div>
      </li>
      <li className="flex items-start gap-2">
        <PackageOpen className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
        <div>
          <p className="text-text font-medium">Order #790 In-progress</p>
          <p className="text-text/50 text-xs">5 hr ago</p>
        </div>
      </li>
    </ul>
  </div>
);

const FinancialSummary = () => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
    <h3 className="text-lg font-semibold text-text mb-4 flex items-center gap-2">
      <DollarSign className="w-5 h-5 text-green-600" />
      Financial Summary
    </h3>
    <p className="text-2xl font-bold text-text mb-1">
      Total Earnings: <span className="text-green-600">Kes 4,500</span>
    </p>
    <p className="text-sm text-text/70">This Month (vs Kes 12,000 Total)</p>
  </div>
);

const GoalTracking = () => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
    <div>
      <h3 className="text-lg font-semibold text-text mb-1 flex items-center gap-2">
        <Target className="w-5 h-5 text-indigo-600" />
        Goal Tracking
      </h3>
      <p className="text-sm text-text/70 mb-3">Monthly Target: Kes 7,500</p>
      <p className="text-2xl font-bold text-text">60% Complete</p>
    </div>
    {/* Placeholder for Goal Ring Chart */}
    <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
      60%
    </div>
  </div>
);

const VendorStatCard = ({
  title,
  value,
  cost,
  trendType,
  icon,
  gradient,
  iconBg,
}) => {
  const trendColor = trendType === "up" ? "text-success" : "text-accent";
  const trendBgColor = trendType === "up" ? "bg-success/10" : "bg-accent/10";
  const TrendIcon = trendType === "up" ? TrendingUp : TrendingDown;

  return (
    <section
      className={`group bg-gradient-to-br ${gradient} p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 opacity-30 group-hover:scale-110 transition-transform duration-300"></div>

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div
            className={`p-3 ${iconBg} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 text-white`}
          >
            {icon}
          </div>
        </div>

        <h3 className="text-sm font-medium text-text/70 mb-2">{title}</h3>
        <p className="text-3xl font-bold text-text mb-3">{value}</p>

        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${trendColor} ${trendBgColor}`}
          >
            <TrendIcon className="w-3 h-3" />
            {cost}
          </span>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
      <main>
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-text mb-2">My Portfolio</h1>
          <p className="text-sm text-text/50">
            Track your performance and orders
          </p>
        </div>

        {/* Main Dashboard Grid: Content Area (3/4 width) and Sidebar (1/4 width) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content Area (col-span-3 on large screens) */}
          <div className="lg:col-span-3 space-y-6">
            {/* 1. Stat Cards (Existing) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {/* NOTE: I'm keeping your existing stat card structure here */}

              <section className="group bg-gradient-to-br from-primary/5 to-indigo-50/20 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300  border-primary/10 hover:border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -mr-16 -mt-16 opacity-30 group-hover:scale-110 transition-transform duration-300"></div>

                <div className="relative z-10 text-left">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Package
                        className="w-6 h-6 text-white"
                        aria-label="Available Orders Icon"
                      />
                    </div>
                  </div>

                  <h2 className="text-sm font-medium text-text/70 mb-2">
                    Available Orders
                  </h2>
                  <p className="text-3xl font-bold text-text mb-1">2</p>
                  <p className="text-sm text-primary font-medium">
                    Pick an Order
                  </p>
                </div>
              </section>

              <VendorStatCard
                title="In-progress"
                value="2"
                cost="Kes. 600"
                trendType="down"
                icon={
                  <PackageOpen
                    className="w-6 h-6"
                    aria-label="In-progress Icon"
                  />
                }
                gradient="from-secondary/20 to-pink-50/20"
                iconBg="bg-secondary"
              />
              <VendorStatCard
                title="Completed Orders"
                value="12"
                cost="Kes. 1560"
                trendType="up"
                icon={
                  <BookOpenCheck
                    className="w-6 h-6"
                    aria-label="Completed Orders Icon"
                  />
                }
                gradient="from-subtle-80 to-primary-50"
                iconBg="bg-text"
              />
              <VendorStatCard
                title="Cancelled Orders"
                value="8"
                cost="0.2"
                trendType="down"
                icon={
                  <BookX
                    className="w-6 h-6"
                    aria-label="Cancelled Orders Icon"
                  />
                }
                gradient="from-accent/20 to-subtle"
                iconBg="bg-accent"
              />
            </div>

            {/* 2. Performance Over Time Chart */}
            <PerfomanceKPI />

            {/* 3. Financial/Goal Tracking Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FinancialSummary />
              <GoalTracking />
            </div>
          </div>

          {/* Right Sidebar Area (col-span-1 on large screens) */}
          <div className="lg:col-span-1 space-y-6">
            {/* 4. Order Status Breakdown */}
            {/* <DoughnutChart title="Order Status Breakdown" percent="80%" /> */}

            {/* 5. Key Performance Indicators (Simple Card) */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-text mb-4">
                Key Performance Indicators
              </h3>
              <div className="space-y-3">
                <p className="text-2xl font-bold text-primary">85%</p>
                <p className="text-sm text-text/70">Completion Rate</p>
                <div className="h-px bg-gray-100 my-2"></div>
                <p className="text-2xl font-bold text-primary">92%</p>
                <p className="text-sm text-text/70">On-Time Delivery</p>
              </div>
            </div>

            {/* 6. Recent Activity Feed */}
            <ActivityFeed />
          </div>
        </div>
      </main>
    </div>
  );
}
