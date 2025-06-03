"use client";
import React from "react";
import MetricCard from "./MetricCard";
import NavigationTabs from "./NavigationTabs";
import ProductionEfficiencyChart from "./ProductionEfficiencyChart";
import QualityControlChart from "./QualityControlChart";
import ProductionBatchList from "./ProductionBatchList";
import AlertList from "./AlertList";

const ProductionMonitoring: React.FC = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <main className="flex flex-col p-8 mx-auto my-0 w-full bg-background max-w-[2161px] text-foreground">
        <header className="mb-6">
          <h1 className="text-3xl font-bold leading-9 text-foreground">
            Production Monitoring
          </h1>
          <p className="text-base leading-6 text-muted-foreground">
            Track production workflows, monitor quality control, and optimize
            efficiency
          </p>
        </header>

        <NavigationTabs />

        <section className="flex gap-4 mb-6 max-md:flex-col max-sm:flex-col">
          <MetricCard
            title="Active Lines"
            value="3/5"
            description="Production lines currently running"
            icon={
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                style={{ width: 16, height: 16 }}
              >
                {" "}
                <path
                  d="M2.08325 13.3333C2.08325 13.6869 2.22373 14.026 2.47378 14.2761C2.72382 14.5261 3.06296 14.6666 3.41659 14.6666H14.0833C14.4369 14.6666 14.776 14.5261 15.0261 14.2761C15.2761 14.026 15.4166 13.6869 15.4166 13.3333V5.33325L10.7499 8.66659V5.33325L6.08325 8.66659V2.66659C6.08325 2.31296 5.94278 1.97382 5.69273 1.72378C5.44268 1.47373 5.10354 1.33325 4.74992 1.33325H3.41659C3.06296 1.33325 2.72382 1.47373 2.47378 1.72378C2.22373 1.97382 2.08325 2.31296 2.08325 2.66659V13.3333Z"
                  stroke="#A1A1AA"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M12.0833 12H12.7499"
                  stroke="#A1A1AA"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M8.75 12H9.41667"
                  stroke="#A1A1AA"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M5.41675 12H6.08341"
                  stroke="#A1A1AA"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </svg>
            }
          />
          <MetricCard
            title="Overall Efficiency"
            value="94.7%"
            description="Average efficiency across all active lines"
            icon={
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                style={{ width: 16, height: 16 }}
              >
                {" "}
                <path
                  d="M2.5 2V14H14.5"
                  stroke="#A1A1AA"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M12.5 11.3333V6"
                  stroke="#A1A1AA"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M9.16675 11.3333V3.33325"
                  stroke="#A1A1AA"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M5.83325 11.3333V9.33325"
                  stroke="#A1A1AA"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </svg>
            }
          />
          <MetricCard
            title="Production Progress"
            value="65.3%"
            description="Overall daily production target completion"
            icon={
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                style={{ width: 16, height: 16 }}
              >
                {" "}
                <path
                  d="M10.2499 1.33325H6.24992C5.88173 1.33325 5.58325 1.63173 5.58325 1.99992V3.33325C5.58325 3.70144 5.88173 3.99992 6.24992 3.99992H10.2499C10.6181 3.99992 10.9166 3.70144 10.9166 3.33325V1.99992C10.9166 1.63173 10.6181 1.33325 10.2499 1.33325Z"
                  stroke="#A1A1AA"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M10.9167 2.66675H12.2501C12.6037 2.66675 12.9428 2.80722 13.1929 3.05727C13.4429 3.30732 13.5834 3.64646 13.5834 4.00008V13.3334C13.5834 13.687 13.4429 14.0262 13.1929 14.2762C12.9428 14.5263 12.6037 14.6667 12.2501 14.6667H4.25008C3.89646 14.6667 3.55732 14.5263 3.30727 14.2762C3.05722 14.0262 2.91675 13.687 2.91675 13.3334V4.00008C2.91675 3.64646 3.05722 3.30732 3.30727 3.05727C3.55732 2.80722 3.89646 2.66675 4.25008 2.66675H5.58341"
                  stroke="#A1A1AA"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M6.25 9.33333L7.58333 10.6667L10.25 8"
                  stroke="#A1A1AA"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </svg>
            }
          />
          <MetricCard
            title="Quality Rate"
            value="98.2%"
            description="Pass rate for quality control checks"
            icon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                style={{ width: 16, height: 16 }}
              >
                {" "}
                <path
                  d="M7.99992 14.6666C11.6818 14.6666 14.6666 11.6818 14.6666 7.99992C14.6666 4.31802 11.6818 1.33325 7.99992 1.33325C4.31802 1.33325 1.33325 4.31802 1.33325 7.99992C1.33325 11.6818 4.31802 14.6666 7.99992 14.6666Z"
                  stroke="#A1A1AA"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M6 8.00008L7.33333 9.33341L10 6.66675"
                  stroke="#A1A1AA"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </svg>
            }
          />
        </section>

        <section className="flex gap-4 mb-6 max-md:flex-col max-sm:flex-col">
          <ProductionEfficiencyChart />
          <QualityControlChart />
        </section>

        <section className="flex gap-4 max-md:flex-col max-sm:flex-col">
          <ProductionBatchList />
          <AlertList />
        </section>
      </main>
    </>
  );
};

export default ProductionMonitoring;
