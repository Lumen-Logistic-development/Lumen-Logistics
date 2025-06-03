"use client";
import React, { useState, useRef } from "react";
import ChartTooltip, { TooltipData } from "./ChartToolTip";

interface BarData {
  id: string;
  name: string;
  currentValue: number;
  targetValue: number;
  x: number;
  width: number;
  type: "current" | "target";
}

const ProductionEfficiencyChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const [tooltipData, setTooltipData] = useState<TooltipData | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [hoveredBarId, setHoveredBarId] = useState<string | null>(null);

  // Define bar data for hover interaction
  const barData: BarData[] = [
    {
      id: "assembly-a-current",
      name: "Assembly Line A",
      currentValue: 92,
      targetValue: 95,
      x: 70.3,
      width: 39,
      type: "current",
    },
    {
      id: "assembly-a-target",
      name: "Assembly Line A",
      currentValue: 92,
      targetValue: 95,
      x: 113.3,
      width: 39,
      type: "target",
    },
    {
      id: "assembly-b-current",
      name: "Assembly Line B",
      currentValue: 88,
      targetValue: 95,
      x: 216.3,
      width: 39,
      type: "current",
    },
    {
      id: "assembly-b-target",
      name: "Assembly Line B",
      currentValue: 88,
      targetValue: 95,
      x: 216.3,
      width: 39,
      type: "target",
    },
    {
      id: "packaging-a-current",
      name: "Packaging Line A",
      currentValue: 97,
      targetValue: 95,
      x: 276.3,
      width: 39,
      type: "current",
    },
    {
      id: "packaging-a-target",
      name: "Packaging Line A",
      currentValue: 97,
      targetValue: 95,
      x: 319.3,
      width: 39,
      type: "target",
    },
    {
      id: "packaging-b-current",
      name: "Packaging Line B",
      currentValue: 45,
      targetValue: 95,
      x: 379.3,
      width: 39,
      type: "current",
    },
    {
      id: "packaging-b-target",
      name: "Packaging Line B",
      currentValue: 45,
      targetValue: 95,
      x: 422.3,
      width: 39,
      type: "target",
    },
    {
      id: "quality-current",
      name: "Quality Control",
      currentValue: 94,
      targetValue: 95,
      x: 482.3,
      width: 39,
      type: "current",
    },
    {
      id: "quality-target",
      name: "Quality Control",
      currentValue: 94,
      targetValue: 95,
      x: 525.3,
      width: 39,
      type: "target",
    },
  ];

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!chartRef.current) return;

    const chartRect = chartRef.current.getBoundingClientRect();
    const mouseX = event.clientX - chartRect.left;
    const mouseY = event.clientY - chartRect.top;

    // Find which bar the mouse is over
    const hoveredBar = barData.find(
      (bar) =>
        mouseX >= bar.x &&
        mouseX <= bar.x + bar.width &&
        mouseY >= 0 &&
        mouseY <= 236,
    );

    if (hoveredBar) {
      setHoveredBarId(hoveredBar.id);
      setTooltipData({
        title: hoveredBar.name,
        value: `${hoveredBar.type === "current" ? hoveredBar.currentValue : hoveredBar.targetValue}%`,
        target:
          hoveredBar.type === "current"
            ? `${hoveredBar.targetValue}%`
            : undefined,
        color: hoveredBar.type === "current" ? "#0EA5E9" : "#10B981",
      });

      setTooltipPosition({
        x: hoveredBar.x + hoveredBar.width / 2,
        y: 100, // Position above the bar
      });

      setIsTooltipVisible(true);
    } else {
      setHoveredBarId(null);
      setIsTooltipVisible(false);
    }
  };

  const handleMouseLeave = () => {
    setHoveredBarId(null);
    setIsTooltipVisible(false);
  };

  // Helper function to determine if a bar is currently hovered
  const isBarHovered = (barId: string) => hoveredBarId === barId;

  return (
    <section className="flex-1 rounded-xl bg-card shadow-md text-foreground">
      <header className="p-6">
        <h2 className="text-2xl font-semibold leading-6 text-foreground">
          Production Efficiency
        </h2>
        <p className="text-sm leading-5 text-muted-foreground">
          Efficiency metrics across production lines
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
            width="605"
            height="350"
            viewBox="0 0 605 350"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="chart-svg"
            style={{ width: "100%", height: 350 }}
          >
            <path d="M60 236H575" stroke="#CCCCCC" strokeDasharray="3 3"></path>
            <path
              d="M60 179.5H575"
              stroke="#CCCCCC"
              strokeDasharray="3 3"
            ></path>
            <path d="M60 123H575" stroke="#CCCCCC" strokeDasharray="3 3"></path>
            <path
              d="M60 66.5H575"
              stroke="#CCCCCC"
              strokeDasharray="3 3"
            ></path>
            <path d="M60 10H575" stroke="#CCCCCC" strokeDasharray="3 3"></path>
            <path
              d="M111.5 10V236"
              stroke="#CCCCCC"
              strokeDasharray="3 3"
            ></path>
            <path
              d="M214.5 10V236"
              stroke="#CCCCCC"
              strokeDasharray="3 3"
            ></path>
            <path
              d="M317.5 10V236"
              stroke="#CCCCCC"
              strokeDasharray="3 3"
            ></path>
            <path
              d="M420.5 10V236"
              stroke="#CCCCCC"
              strokeDasharray="3 3"
            ></path>
            <path
              d="M523.5 10V236"
              stroke="#CCCCCC"
              strokeDasharray="3 3"
            ></path>
            <path d="M60 10V236" stroke="#CCCCCC" strokeDasharray="3 3"></path>
            <path d="M575 10V236" stroke="#CCCCCC" strokeDasharray="3 3"></path>
            <path d="M60 236H575" stroke="#666666"></path>
            <path d="M111.5 242V236" stroke="#666666"></path>
            <text
              transform="translate(19.8312 329.107) rotate(-45)"
              fill="#666666"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="Inter"
              fontSize="16"
              letterSpacing="0em"
            >
              <tspan x="0.328125" y="15.3182">
                Assembly Line A
              </tspan>
            </text>
            <path d="M214.5 242V236" stroke="#666666"></path>
            <text
              transform="translate(122.831 329.107) rotate(-45)"
              fill="#666666"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="Inter"
              fontSize="16"
              letterSpacing="0em"
            >
              <tspan x="0.734375" y="15.3182">
                Assembly Line B
              </tspan>
            </text>
            <path d="M317.5 242V236" stroke="#666666"></path>
            <text
              transform="translate(222.295 332.643) rotate(-45)"
              fill="#666666"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="Inter"
              fontSize="16"
              letterSpacing="0em"
            >
              <tspan x="0.234375" y="15.3182">
                Packaging Line A
              </tspan>
            </text>
            <path d="M420.5 242V236" stroke="#666666"></path>
            <text
              transform="translate(325.295 332.643) rotate(-45)"
              fill="#666666"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="Inter"
              fontSize="16"
              letterSpacing="0em"
            >
              <tspan x="0.640625" y="15.3182">
                Packaging Line B
              </tspan>
            </text>
            <path d="M523.5 242V236" stroke="#666666"></path>
            <text
              transform="translate(440.316 320.622) rotate(-45)"
              fill="#666666"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="Inter"
              fontSize="16"
              letterSpacing="0em"
            >
              <tspan x="0.296875" y="15.3182">
                Quality Control
              </tspan>
            </text>
            <path d="M60 10V236" stroke="#666666"></path>
            <path d="M54 236H60" stroke="#666666"></path>
            <text
              fill="#666666"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="Inter"
              fontSize="16"
              letterSpacing="0em"
            >
              <tspan x="42" y="240.998">
                0
              </tspan>
            </text>
            <path d="M54 179.5H60" stroke="#666666"></path>
            <text
              fill="#666666"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="Inter"
              fontSize="16"
              letterSpacing="0em"
            >
              <tspan x="32.5781" y="184.498">
                25
              </tspan>
            </text>
            <path d="M54 123H60" stroke="#666666"></path>
            <text
              fill="#666666"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="Inter"
              fontSize="16"
              letterSpacing="0em"
            >
              <tspan x="32.2656" y="127.998">
                50
              </tspan>
            </text>
            <path d="M54 66.5H60" stroke="#666666"></path>
            <text
              fill="#666666"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="Inter"
              fontSize="16"
              letterSpacing="0em"
            >
              <tspan x="33.2812" y="71.4981">
                75
              </tspan>
            </text>
            <path d="M54 10H60" stroke="#666666"></path>
            <text
              fill="#666666"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="Inter"
              fontSize="16"
              letterSpacing="0em"
            >
              <tspan x="24.5625" y="16.9981">
                100
              </tspan>
            </text>

            {/* Current Efficiency Bars - with hover highlighting */}
            <g>
              <path
                d="M70.3 23.5601H109.3V236H70.3V23.5601Z"
                fill={isBarHovered("assembly-a-current") ? "white" : "#0EA5E9"}
              ></path>
              {isBarHovered("assembly-a-current") && (
                <rect
                  x="70.3"
                  y="23.5601"
                  width="39"
                  height="212.44"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                ></rect>
              )}
              <rect
                x="70.3"
                y="23.5601"
                width="39"
                height="212.44"
                fill="transparent"
                className="cursor-pointer"
                data-bar="assembly-a-current"
                onMouseEnter={() => setHoveredBarId("assembly-a-current")}
              ></rect>
            </g>

            <g>
              <path
                d="M276.3 14.52H315.3V236H276.3V14.52Z"
                fill={isBarHovered("packaging-a-current") ? "white" : "#0EA5E9"}
              ></path>
              {isBarHovered("packaging-a-current") && (
                <rect
                  x="276.3"
                  y="14.52"
                  width="39"
                  height="221.48"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                ></rect>
              )}
              <rect
                x="276.3"
                y="14.52"
                width="39"
                height="221.48"
                fill="transparent"
                className="cursor-pointer"
                data-bar="packaging-a-current"
                onMouseEnter={() => setHoveredBarId("packaging-a-current")}
              ></rect>
            </g>

            <g>
              <path
                d="M379.3 134.3H418.3V236H379.3V134.3Z"
                fill={isBarHovered("packaging-b-current") ? "white" : "#0EA5E9"}
              ></path>
              {isBarHovered("packaging-b-current") && (
                <rect
                  x="379.3"
                  y="134.3"
                  width="39"
                  height="101.7"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                ></rect>
              )}
              <rect
                x="379.3"
                y="134.3"
                width="39"
                height="101.7"
                fill="transparent"
                className="cursor-pointer"
                data-bar="packaging-b-current"
                onMouseEnter={() => setHoveredBarId("packaging-b-current")}
              ></rect>
            </g>

            <g>
              <path
                d="M482.3 28.0801H521.3V236H482.3V28.0801Z"
                fill={isBarHovered("quality-current") ? "white" : "#0EA5E9"}
              ></path>
              {isBarHovered("quality-current") && (
                <rect
                  x="482.3"
                  y="28.0801"
                  width="39"
                  height="207.92"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                ></rect>
              )}
              <rect
                x="482.3"
                y="28.0801"
                width="39"
                height="207.92"
                fill="transparent"
                className="cursor-pointer"
                data-bar="quality-current"
                onMouseEnter={() => setHoveredBarId("quality-current")}
              ></rect>
            </g>

            {/* Target Efficiency Bars - with hover highlighting */}
            <g>
              <path
                d="M113.3 21.3H152.3V236H113.3V21.3Z"
                fill={isBarHovered("assembly-a-target") ? "white" : "#10B981"}
              ></path>
              {isBarHovered("assembly-a-target") && (
                <rect
                  x="113.3"
                  y="21.3"
                  width="39"
                  height="214.7"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                ></rect>
              )}
              <rect
                x="113.3"
                y="21.3"
                width="39"
                height="214.7"
                fill="transparent"
                className="cursor-pointer"
                data-bar="assembly-a-target"
                onMouseEnter={() => setHoveredBarId("assembly-a-target")}
              ></rect>
            </g>

            <g>
              <path
                d="M216.3 21.3H255.3V236H216.3V21.3Z"
                fill={isBarHovered("assembly-b-target") ? "white" : "#10B981"}
              ></path>
              {isBarHovered("assembly-b-target") && (
                <rect
                  x="216.3"
                  y="21.3"
                  width="39"
                  height="214.7"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                ></rect>
              )}
              <rect
                x="216.3"
                y="21.3"
                width="39"
                height="214.7"
                fill="transparent"
                className="cursor-pointer"
                data-bar="assembly-b-target"
                onMouseEnter={() => setHoveredBarId("assembly-b-target")}
              ></rect>
            </g>

            <g>
              <path
                d="M319.3 21.3H358.3V236H319.3V21.3Z"
                fill={isBarHovered("packaging-a-target") ? "white" : "#10B981"}
              ></path>
              {isBarHovered("packaging-a-target") && (
                <rect
                  x="319.3"
                  y="21.3"
                  width="39"
                  height="214.7"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                ></rect>
              )}
              <rect
                x="319.3"
                y="21.3"
                width="39"
                height="214.7"
                fill="transparent"
                className="cursor-pointer"
                data-bar="packaging-a-target"
                onMouseEnter={() => setHoveredBarId("packaging-a-target")}
              ></rect>
            </g>

            <g>
              <path
                d="M422.3 21.3H461.3V236H422.3V21.3Z"
                fill={isBarHovered("packaging-b-target") ? "white" : "#10B981"}
              ></path>
              {isBarHovered("packaging-b-target") && (
                <rect
                  x="422.3"
                  y="21.3"
                  width="39"
                  height="214.7"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                ></rect>
              )}
              <rect
                x="422.3"
                y="21.3"
                width="39"
                height="214.7"
                fill="transparent"
                className="cursor-pointer"
                data-bar="packaging-b-target"
                onMouseEnter={() => setHoveredBarId("packaging-b-target")}
              ></rect>
            </g>

            <g>
              <path
                d="M525.3 21.3H564.3V236H525.3V21.3Z"
                fill={isBarHovered("quality-target") ? "white" : "#10B981"}
              ></path>
              {isBarHovered("quality-target") && (
                <rect
                  x="525.3"
                  y="21.3"
                  width="39"
                  height="214.7"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                ></rect>
              )}
              <rect
                x="525.3"
                y="21.3"
                width="39"
                height="214.7"
                fill="transparent"
                className="cursor-pointer"
                data-bar="quality-target"
                onMouseEnter={() => setHoveredBarId("quality-target")}
              ></rect>
            </g>
          </svg>
        </div>
        <div className="flex gap-2.5 justify-center mt-2.5">
          <div className="flex gap-1 items-center">
            <div>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="legend-icon"
                style={{ width: 14, height: 14 }}
              >
                <path
                  d="M0.920044 2.37988H14.92V12.8799H0.920044V2.37988Z"
                  fill="#0EA5E9"
                ></path>
              </svg>
            </div>
            <p className="text-base leading-6 text-foreground">
              Current Efficiency
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <div>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="legend-icon"
                style={{ width: 14, height: 14 }}
              >
                <path
                  d="M0.949951 2.37988H14.95V12.8799H0.949951V2.37988Z"
                  fill="#10B981"
                ></path>
              </svg>
            </div>
            <p className="text-base leading-6 text-foreground">
              Target Efficiency
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionEfficiencyChart;
