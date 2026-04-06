// ✅ EXPORT AS CSV
export const exportToCSV = (data) => {
  if (!data || data.length === 0) return;

  const headers = ["Date", "Category", "Type", "Amount"];

  const rows = data.map((t) => [
    t.date,
    t.category,
    t.type,
    t.amount
  ]);

  const csvContent =
    [headers, ...rows]
      .map((e) => e.join(","))
      .join("\n");

  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "transactions.csv";
  a.click();
};

// ✅ EXPORT AS JSON
export const exportToJSON = (data) => {
  const blob = new Blob(
    [JSON.stringify(data, null, 2)],
    { type: "application/json" }
  );

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "transactions.json";
  a.click();
};