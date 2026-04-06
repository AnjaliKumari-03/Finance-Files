const users = ["Anjali", "Rahul", "Priya", "Aman", "Neha"];

const categories = [
  "Food",
  "Shopping",
  "Transport",
  "Groceries",
  "Bills",
  "Travel",
  "Entertainment"
];

// Helper to generate random number
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

// Generate data
let id = 1;
const data = [];

users.forEach((user) => {

  // Loop last 6 months (Nov 2025 → Apr 2026)
  for (let m = 0; m < 6; m++) {
    const baseDate = new Date(2026, 3 - m, 1); // April = 3 index

    const year = baseDate.getFullYear();
    const month = String(baseDate.getMonth() + 1).padStart(2, "0");

    // Salary (1 per month)
    data.push({
      id: id++,
      user,
      date: `${year}-${month}-01`,
      amount: rand(40000, 90000),
      category: "Salary",
      type: "income"
    });

    // Expenses (4 per month → 24 total + salary ≈ 25)
    for (let i = 0; i < 4; i++) {
      let day;

      // April only till 6th
      if (month === "04") {
        day = String(rand(1, 7)).padStart(2, "0");
      } else {
        day = String(rand(1, 28)).padStart(2, "0");
      }

      data.push({
        id: id++,
        user,
        date: `${year}-${month}-${day}`,
        amount: rand(1000, 12000),
        category: categories[rand(0, categories.length)],
        type: "expense"
      });
    }
  }
});

export const dummyData = data;