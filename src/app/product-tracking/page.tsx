"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { Chart as ChartJS, ChartConfiguration } from "chart.js";

export default function ProductTrackingPage() {
  const chartRef = useRef<ChartJS | null>(null);

  useEffect(() => {
    let Chart: typeof import("chart.js/auto")["default"];
    let chartInstance: ChartJS | null = null;

    import("chart.js/auto").then(({ default: ChartJS }) => {
      Chart = ChartJS;

      const canvas = document.getElementById(
        "qualityChart"
      ) as HTMLCanvasElement | null;

      if (!canvas) return;

      // Destroy existing chart with id "qualityChart" if it exists
      if (Chart.getChart && Chart.getChart("qualityChart")) {
        Chart.getChart("qualityChart")?.destroy();
      }

      chartInstance = new Chart(canvas, {
        type: "radar",
        data: {
          labels: [
            "Freshness",
            "Sweetness",
            "Acidity",
            "Firmness",
            "Color",
            "Size",
          ],
          datasets: [
            {
              label: "Tomatoes - Premium Grade A",
              data: [94, 89, 82, 91, 95, 88],
              backgroundColor: "rgba(74, 222, 128, 0.2)",
              borderColor: "rgba(74, 222, 128, 1)",
              borderWidth: 2,
              pointBackgroundColor: "rgba(74, 222, 128, 1)",
              pointRadius: 4,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: "top",
            },
          },
          scales: {
            r: {
              angleLines: { display: true },
              suggestedMin: 50,
              suggestedMax: 100,
            },
          },
        },
        // Give the chart an ID so Chart.getChart("qualityChart") can find it
        // This is an undocumented feature but Chart.js 4+ supports it
        // Otherwise you can store the instance in a ref yourself.
        // @ts-ignore
        id: "qualityChart",
      });

      chartRef.current = chartInstance;
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <main className="bg-gray-50 min-h-screen py-6 px-4">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10 mb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image
              src="/Logo.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <h1 className="text-xl font-bold text-gray-800">Product Tracker</h1>
          </div>
        </div>
      </header>

      {/* Main Card */}
      <section className="max-w-7xl mx-auto bg-white p-6 rounded-xl shadow space-y-6">
        <h2 className="text-lg font-semibold text-gray-700">
          Tomatoes - Premium Grade A
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded bg-gray-50">
            <h3 className="text-sm font-medium text-gray-500">Quantity</h3>
            <p className="text-xl font-bold">
              1,250 <span className="text-base font-normal">kg</span>
            </p>
          </div>
          <div className="p-4 border rounded bg-gray-50">
            <h3 className="text-sm font-medium text-gray-500">Harvest Date</h3>
            <p className="text-xl font-bold">15 Apr 2023</p>
          </div>
          <div className="p-4 border rounded bg-gray-50">
            <h3 className="text-sm font-medium text-gray-500">Delivery ETA</h3>
            <p className="text-xl font-bold">25 Apr 2023</p>
          </div>
        </div>

        {/* Quality Metrics */}
        <div className="mt-6">
          <h3 className="font-semibold text-gray-800 mb-2">Quality Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <canvas id="qualityChart" height={200}></canvas>
            <div className="space-y-3 text-sm">
              <p>
                Freshness: <span className="font-bold">94%</span>
              </p>
              <p>
                Size Consistency: <span className="font-bold">88%</span>
              </p>
              <p>
                Color Uniformity: <span className="font-bold">91%</span>
              </p>
              <p>
                Defect Free: <span className="font-bold">96%</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
