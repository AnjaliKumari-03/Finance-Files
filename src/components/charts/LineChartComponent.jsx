import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function LineChartComponent({ data }) {

  // ✅ GROUP DATA BY DAY
  const dailyMap = {};

  data.forEach((t) => {
    const day = new Date(t.date).getDate();

    if (!dailyMap[day]) dailyMap[day] = 0;

    if (t.type === "income") dailyMap[day] += t.amount;
    else dailyMap[day] -= t.amount;
  });

  const sortedDays = Object.keys(dailyMap)
    .map(Number)
    .sort((a, b) => a - b);

  let runningBalance = 0;

  const lineData = sortedDays.map((day) => {
    runningBalance += dailyMap[day];
    return { day, balance: runningBalance };
  });

  return (
    <div className="bg-white p-5 rounded-xl shadow w-full overflow-hidden">
      <h2 className="font-semibold mb-2">Balance Trend</h2>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart
          data={lineData}
          margin={{ top: 40, right: 20, left: 20, bottom: 30 }}
        >
          <XAxis
            dataKey="day"
            label={{
              value: "Day",
              position: "outsideBottom",
              dy: 20
            }}
          />

          <YAxis
            label={{
              value: "Balance Amount",
              angle: -90,
              position: "insideLeft",
              dx: -15, 
              dy: 50
            }}
          />

          <Tooltip />

          <Line
            dataKey="balance"
            stroke="#2563eb"
            strokeWidth={2}
            dot={{ r: 4 }}
            type="monotone"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}