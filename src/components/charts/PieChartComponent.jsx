import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useState } from "react";

export default function PieChartComponent({ data }) {

  const [activeIndex, setActiveIndex] = useState(null);
  const [tooltipData, setTooltipData] = useState(null);

  // ✅ CATEGORY DATA
  const categoryData = Object.values(
    (data || []).reduce((acc, t) => {
      if (t.type === "expense") {
        acc[t.category] = acc[t.category] || {
          name: t.category,
          value: 0
        };
        acc[t.category].value += t.amount;
      }
      return acc;
    }, {})
  );

  const COLORS = [
    "#A5B4FC", // soft indigo
    "#6EE7B7", // mint green
    "#FDE68A", // pastel yellow
    "#FCA5A5", // soft red
    "#C4B5FD", // lavender
    "#67E8F9", // sky blue
    "#FDBA74", // peach
    "#F9A8D4", // soft pink
    "#BBF7D0", // light green
    "#E9D5FF", // light purple
    "#BAE6FD", // light blue
    "#FEF3C7", // cream yellow
  ];

  const total = categoryData.reduce((sum, i) => sum + i.value, 0);

  return (
    <div className="bg-white p-5 rounded-xl shadow w-full overflow-hidden">

      <h2 className="font-semibold mb-2">Spending Breakdown</h2>

      {categoryData.length === 0 ? (
        <p className="text-sm text-gray-500">No expense data</p>
      ) : (
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>

            <Pie
              data={categoryData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              onMouseEnter={(data, index) => {
                setActiveIndex(index);
                setTooltipData(data);
              }}
              onMouseLeave={() => {
                setActiveIndex(null);
                setTooltipData(null);
              }}
              onClick={(data, index) => {
                setActiveIndex(index);
                setTooltipData(data);
              }}
              style={{ outline: "none", WebkitTapHighlightColor: "transparent" }}
            >
              {categoryData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                  stroke="none"
                  opacity={activeIndex === null || activeIndex === index ? 1 : 0.3}
                  style={{
                    transition: "all 0.3s ease",
                    transform:
                      activeIndex === index ? "scale(1.05)" : "scale(1)",
                    transformOrigin: "center"
                  }}
                />
              ))}
            </Pie>

          </PieChart>
        </ResponsiveContainer>
      )}

      {/* ✅ CUSTOM TOOLTIP */}
      {tooltipData && (
        <div className="mt-3 bg-white px-4 py-2 rounded-lg shadow text-sm w-fit">
          <span className="font-semibold text-blue-700">
            {tooltipData.name}
          </span>
          {" : "}
          ₹{tooltipData.value} (
          {((tooltipData.value / total) * 100).toFixed(1)}%)
        </div>
      )}

      {/* ✅ LEGEND */}
      <div className="mt-4 space-y-1">
        {categoryData.map((item, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            <span>{item.name}</span>
          </div>
        ))}
      </div>

    </div>
  );
}