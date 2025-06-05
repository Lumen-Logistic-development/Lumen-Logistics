"use client";
import React, { useState, useRef } from "react";
import ChartTooltip, { TooltipData } from "./ChartToolTip";

interface BarData {
  id: string;
  name: string;
  value: number;
  x: number;
  width: number;
}

const QualityControlChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const [tooltipData, setTooltipData] = useState<TooltipData | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  // Define bar data for hover interaction
  const barData: BarData[] = [
    { id: "product-x", name: "Product X", value: 0.8, x: 102, width: 67 },
    { id: "product-y", name: "Product Y", value: 3.2, x: 186, width: 67 },
    {
      id: "product-y-pkg",
      name: "Product Y Packaging",
      value: 0.3,
      x: 270,
      width: 67,
    },
    { id: "product-z", name: "Product Z", value: 1.7, x: 354, width: 67 },
  ];

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!chartRef.current) return;

    const chartRect = chartRef.current.getBoundingClientRect();
    const mouseX = event.clientX - chartRect.left;

    // Find which bar the mouse is over
    const hoveredBar = barData.find(
      (bar) => mouseX >= bar.x && mouseX <= bar.x + bar.width,
    );

    if (hoveredBar) {
      setTooltipData({
        title: hoveredBar.name,
        value: `${hoveredBar.value}% defect rate`,
        color: "#F43F5E",
      });

      setTooltipPosition({
        x: hoveredBar.x + hoveredBar.width / 2,
        y: 100, // Position above the bar
      });

      setIsTooltipVisible(true);
    } else {
      setIsTooltipVisible(false);
    }
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  return (
    <section className="flex-1 rounded-xl bg-card shadow-md text-foreground">
      <header className="p-6">
        <h2 className="text-2xl font-semibold leading-6 text-foreground">
          Quality Control
        </h2>
        <p className="text-sm leading-5 text-muted-foreground">
          Defect rates by product line
        </p>
      </header>
      <div className="relative px-6 pt-0 pb-6">
        <div
          ref={chartRef}
          className="relative"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {tooltipData && (
            <ChartTooltip
              data={tooltipData}
              position={tooltipPosition}
              visible={isTooltipVisible}
            />
          )}
          <svg
            width="427"
            height="300"
            viewBox="0 0 427 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="chart-svg"
            style={{ width: "100%", height: 350 }}
          >
            <path
              d="M60.4199 250H396.42"
              stroke="#CCCCCC"
              strokeDasharray="3 3"
            ></path>
            <path
              d="M60.4199 190H396.42"
              stroke="#CCCCCC"
              strokeDasharray="3 3"
            ></path>
            <path
              d="M60.4199 130H396.42"
              stroke="#CCCCCC"
              strokeDasharray="3 3"
            ></path>
            <path
              d="M60.4199 70H396.42"
              stroke="#CCCCCC"
              strokeDasharray="3 3"
            ></path>
            <path
              d="M60.4199 10H396.42"
              stroke="#CCCCCC"
              strokeDasharray="3 3"
            ></path>
            <path
              d="M102.42 10V250"
              stroke="#CCCCCC"
              strokeDasharray="3 3"
            ></path>
            <path
              d="M186.42 10V250"
              stroke="#CCCCCC"
              strokeDasharray="3 3"
            ></path>
            <path
              d="M354.42 10V250"
              stroke="#CCCCCC"
              strokeDasharray="3 3"
            ></path>
            <path
              d="M60.4199 10V250"
              stroke="#CCCCCC"
              strokeDasharray="3 3"
            ></path>
            <path
              d="M396.42 10V250"
              stroke="#CCCCCC"
              strokeDasharray="3 3"
            ></path>
            <path d="M60.4199 250H396.42" stroke="#666666"></path>
            <path d="M102.42 256V250" stroke="#666666"></path>
            <text
              fill="#666666"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="Inter"
              fontSize="16"
              letterSpacing="0em"
            >
              <tspan x="65.3496" y="268.678">
                Product X
              </tspan>
            </text>
            <path d="M186.42 256V250" stroke="#666666"></path>
            <text
              fill="#666666"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="Inter"
              fontSize="16"
              letterSpacing="0em"
            >
              <tspan x="149.162" y="268.678">
                Product Y
              </tspan>
            </text>
            <path d="M354.42 256V250" stroke="#666666"></path>
            <text
              fill="#666666"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="Inter"
              fontSize="16"
              letterSpacing="0em"
            >
              <tspan x="300.787" y="268.678">
                Product Y Pkg
              </tspan>
            </text>
            <path d="M60.4199 10V250" stroke="#666666"></path>
            <path d="M54.4199 250H60.4199" stroke="#666666"></path>
            <text
              fill="#666666"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="Inter"
              fontSize="16"
              letterSpacing="0em"
            >
              <tspan x="42.4199" y="254.998">
                0
              </tspan>
            </text>
            <path d="M54.4199 190H60.4199" stroke="#666666"></path>
            <text
              fill="#666666"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="Inter"
              fontSize="16"
              letterSpacing="0em"
            >
              <tspan x="28.9199" y="194.998">
                0.8
              </tspan>
            </text>
            <path d="M54.4199 130H60.4199" stroke="#666666"></path>
            <text
              fill="#666666"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="Inter"
              fontSize="16"
              letterSpacing="0em"
            >
              <tspan x="31.6855" y="134.998">
                1.6
              </tspan>
            </text>
            <path d="M54.4199 70H60.4199" stroke="#666666"></path>
            <text
              fill="#666666"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="Inter"
              fontSize="16"
              letterSpacing="0em"
            >
              <tspan x="28.0605" y="74.9981">
                2.4
              </tspan>
            </text>
            <path d="M54.4199 10H60.4199" stroke="#666666"></path>
            <text
              fill="#666666"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="Inter"
              fontSize="16"
              letterSpacing="0em"
            >
              <tspan x="28.498" y="16.9981">
                3.2
              </tspan>
            </text>
            <path
              d="M60.4199 175H396.42"
              stroke="#FF0000"
              strokeDasharray="3 3"
            ></path>

            {/* Defect rate bars with hover areas */}
            <path
              d="M68.8198 201.25H135.82V250H68.8198V201.25Z"
              fill="#F43F5E"
              opacity="0.9"
            ></path>
            <rect
              x="68.8198"
              y="201.25"
              width="67"
              height="48.75"
              fill="transparent"
              className="cursor-pointer"
              data-bar="product-x"
            ></rect>

            <path
              d="M152.82 10H219.82V250H152.82V10Z"
              fill="#F43F5E"
              opacity="0.9"
            ></path>
            <rect
              x="152.82"
              y="10"
              width="67"
              height="240"
              fill="transparent"
              className="cursor-pointer"
              data-bar="product-y"
            ></rect>

            <path
              d="M236.82 227.5H303.82V250H236.82V227.5Z"
              fill="#F43F5E"
              opacity="0.9"
            ></path>
            <rect
              x="236.82"
              y="227.5"
              width="67"
              height="22.5"
              fill="transparent"
              className="cursor-pointer"
              data-bar="product-y-pkg"
            ></rect>

            <path
              d="M320.82 122.5H387.82V250H320.82V122.5Z"
              fill="#F43F5E"
              opacity="0.9"
            ></path>
            <rect
              x="320.82"
              y="122.5"
              width="67"
              height="127.5"
              fill="transparent"
              className="cursor-pointer"
              data-bar="product-z"
            ></rect>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default QualityControlChart;
