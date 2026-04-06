# 💰 Finance Dashboard

A responsive and interactive **Finance Dashboard** built using React.js that allows users to track income, expenses, and analyze financial data using charts and insights.

---

## 📌 Overview

This project is designed to provide a simple and effective way to manage personal finances. It enables users to:

* Track transactions (income & expenses)
* Analyze spending patterns
* View insights through charts
* Compare monthly financial data

The application is fully client-side and uses **localStorage** for data persistence.

---

## 🧠 Approach

The application is built using a **component-based architecture** in React.

### 🔹 1. State Management

* Used **Context API** (`AppContext.jsx`) to manage:

  * Transactions
  * Current user
  * Role (Admin / Viewer)

### 🔹 2. Data Handling

* Transaction data is stored in **localStorage**
* Data is filtered based on:

  * Logged-in user
  * Selected month

### 🔹 3. Component Design

* UI is divided into reusable components:

  * Charts (Line, Pie, Bar)
  * Sidebar & Navbar
  * Transaction Modal
* Each component handles a specific responsibility

### 🔹 4. Chart Integration

* Used **Recharts** for visualization:

  * Line Chart → Balance trend
  * Pie Chart → Category-wise expenses
  * Bar Chart → Monthly comparison

### 🔹 5. Role-Based Access

* Admin:

  * Can add transactions
* Viewer:

  * Can only view data

### 🔹 6. Theme Management

* Implemented Dark/Light mode using:

  * Local state
  * CSS class toggling
  * localStorage persistence

---

## 🚀 Features

### 📊 Dashboard

* Displays:

  * Total Balance
  * Total Income
  * Total Expense
* Line chart for balance trend
* Pie chart for spending breakdown

---

### 📅 Monthly View

* Select a specific month
* View transactions for that month
* Filtered chart visualization

---

### 📈 Comparison Page

* Bar chart showing monthly expenses
* Displays:

  * Expense per month
  * Highest spending month
* Pie chart for category comparison
* Shows:

  * Total expense per category
  * Highest expense category

---

### ➕ Add Transaction (Admin Only)

* Modal-based form
* Fields:

  * Amount
  * Category
  * Date
* Data is stored in localStorage

---

### 📤 Export Functionality

* Export transaction data as:

  * CSV (for Excel)
  * JSON (raw data)

---

### 🌙 Dark / Light Mode

* Toggle from sidebar
* Applied across entire application
* Saved in localStorage

---

### 📱 Responsive Design

* Works on:

  * Mobile
  * Tablet
  * Desktop

---

## 🛠️ Tech Stack

* **React.js**
* **Recharts**
* **Tailwind CSS**
* **Context API**
* **LocalStorage**
* **Git & GitHub**

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/AnjaliKumari-03/Finance-Files.git
```

### 2. Navigate to Project Folder

```bash
cd finance-dashboard
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

```bash
http://localhost:5173
```

---

## 📁 Project Structure

```plaintext
src/
├── components/
│   ├── charts/
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│
├── pages/
│   ├── Dashboard.jsx
│   ├── MonthlyView.jsx
│   ├── ComparisonPage.jsx
│   ├── Login.jsx
│
├── context/
│   ├── AppContext.jsx
│
├── transactions/
│   ├── TransactionModal.jsx
│   ├── TransactionList.jsx
│
├── utils/
│   ├── exportData.js
```

---

## 🔐 Roles

| Role   | Access                         |
| ------ | ------------------------------ |
| Viewer | View data only                 |
| Admin  | Add transactions + export data |

---

## 💡 Future Improvements

* Add backend (Node.js + MongoDB)
* User authentication system
* Budget tracking feature
* PDF report generation
* Notifications for spending limits

---

## 👩‍💻 Author

**Anjali Kumari**

---

## 📌 Conclusion

This project demonstrates a complete frontend solution for financial tracking, combining **state management, data visualization, and user interaction** in a clean and scalable architecture.

---
