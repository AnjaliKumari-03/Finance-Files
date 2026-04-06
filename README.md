# 💰 Finance Files – Finance Dashboard

A responsive and interactive **Finance Dashboard** built using React.js that helps users track income, expenses, and analyze financial data through charts and insights.

---

## 📌 Overview

This project provides a simple and efficient way to manage personal finances. It allows users to:

* Track income and expenses
* Analyze spending patterns
* View insights using charts
* Compare financial data across months

The application is fully client-side and uses **localStorage** for data persistence.

---

## 🧠 Approach

The application follows a **component-based architecture** for better scalability and maintainability.

### 🔹 State Management

* Managed using **Context API (`AppContext.jsx`)**
* Stores:

  * Transactions
  * Current user
  * Role (Admin / Viewer)

### 🔹 Data Handling

* Data is stored in **localStorage**
* Filtered based on:

  * Logged-in user
  * Selected month

### 🔹 Component Design

* Modular and reusable components:

  * Charts
  * Sidebar & Navbar
  * Transaction Modal

### 🔹 Charts & Visualization

* Implemented using **Recharts**

  * Line Chart → Balance trend
  * Pie Chart → Category-wise expenses
  * Bar Chart → Monthly comparison

### 🔹 Role-Based Access

* Admin → Add transactions
* Viewer → View only

### 🔹 Theme Handling

* Dark/Light mode using:

  * Local state
  * CSS class toggling
  * localStorage persistence

---

## 🚀 Features

### 📊 Dashboard

* Displays:

  * Balance
  * Income
  * Expense
* Line chart for trend analysis
* Pie chart for spending breakdown

---

### 📅 Monthly View

* Select month
* View filtered transactions
* Category-wise visualization

---

### 📈 Comparison Page

* Monthly expense comparison (Bar Chart)
* Shows:

  * Expense per month
  * Highest spending month
* Category analysis:

  * Total per category
  * Highest expense category

---

### ➕ Add Transaction (Admin Only)

* Modal-based form
* Fields:

  * Amount
  * Category
  * Date
* Data stored in localStorage

---

### 📤 Export Functionality

* Export data as:

  * CSV
  * JSON

---

### 🌙 Dark / Light Mode

* Toggle from sidebar
* Applied globally
* Stored in localStorage

---

### 📱 Responsive Design

* Works across all devices
* Clean and modern UI

---

## 🛠️ Tech Stack

* React.js
* Recharts
* Tailwind CSS
* Context API
* LocalStorage
* Git & GitHub

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/AnjaliKumari-03/Finance-Files.git
```

### 2. Navigate to Project Folder

```bash
cd Finance-Files
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Application

```bash
npm run dev
```

### 5. Open in Browser

```
http://localhost:5173
```

---

## 📁 Project Structure

```plaintext
Finance-Files/
│
├── node_modules/
├── public/
│
├── src/
│   ├── assets/
│
│   ├── components/
│   │   ├── charts/
│   │   │   ├── ComparisonChart.jsx
│   │   │   ├── LineChartComponent.jsx
│   │   │   ├── PieChartComponent.jsx
│   │   │
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│
│   ├── context/
│   │   ├── AppContext.jsx
│
│   ├── dashboard/
│   │   ├── DashboardCards.jsx
│   │   ├── Insights.jsx
│
│   ├── data/
│   │   ├── dummyData.js
│
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── MonthlyView.jsx
│   │   ├── ComparisonPage.jsx
│   │   ├── Login.jsx
│
│   ├── transactions/
│   │   ├── TransactionList.jsx
│   │   ├── TransactionModal.jsx
│
│   ├── utils/
│   │   ├── exportData.js
│
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
├── README.md
```

---

## 🔐 Roles

| Role   | Access                         |
| ------ | ------------------------------ |
| Viewer | View data only                 |
| Admin  | Add transactions + export data |

---

## 💡 Future Improvements

* Backend integration (Node.js + MongoDB)
* Authentication system
* PDF report generation
* Budget tracking system
* Notifications for spending limits

---

## 👩‍💻 Author

**Anjali Kumari**

---

## 📌 Conclusion

This project demonstrates a complete frontend solution for financial tracking using modern React practices, data visualization, and clean UI design.

---
