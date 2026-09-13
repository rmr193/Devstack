# DevStack - Developer Stack Builder

An interactive web application designed for developers to discover, evaluate, and assemble their ideal technology stack. Browse through popular frontend, backend, database, and devops tools, check ratings and difficulty levels, and curate your personalized developer stack in real time.

---

## Live Demo & Repository

- **GitHub Repository**: [https://github.com/rmr193/Devstack](https://github.com/rmr193/Devstack)
- **Live Site Link**: [https://devstack-lilac.vercel.app/](https://devstack-lilac.vercel.app/)

---

## 🛠️ Technologies Used

- React.js
- Tailwind CSS, DaisyUI
- TypeScript / JavaScript (ES6+)
- React-Toastify (NPM Package)
- JSON (for technology data)
- Vite (build tool)

---

## React Conceptual Questions & Answers

### 1. What is JSX, and why is it used in React?
- JSX is a syntax that lets us write HTML-like code inside JavaScript. It's full form is JavaScript XML. It is used in React to easily create and describe UI components.

### 2. What is the difference between props and state?
- Props are data passed from a parent component to a child, while state is data managed inside a component. Props are read-only, but state can be changed using state functions.

### 3. What does the `useState` hook do, and where did you use it in this project?
- useState is a React Hook used to create and manage data (state) inside a component.

- In `App.jsx`, it manages the fetched technologies list (`technologies`), loading status (`loading`), and the selected stack items (`selectedStack`).

- In `Navbar.jsx`, it manages the open/closed state of the mobile menu drawer (`mobileMenuOpen`).

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
- useEffect is a React Hook used to run code after a component renders. We used it to fetch and load the JSON data when the component starts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
- React relies on the `key` prop to identify which items in a list have been modified, added, or removed. A stable, unique key enables React's virtual DOM reconciliation algorithm to update only the specific DOM nodes that changed, significantly optimizing performance.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means displaying different UI elements based on certain state conditions or boolean logic. In this project, it is used in `YourStack.jsx`:

- When `selectedStack.length === 0`, it renders the dashed empty state box (`"Your stack is empty."`). When items exist in the stack, it renders the list of selected tool cards along with the `"Remove All"` button.


### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- The parent passes data by providing props on the child component tag (e.g., `<TechCard tech={item} isAdded={...} />`).
-The parent passes a callback function as a prop (e.g., `onAdd={handleAddToStack}`). When a user interacts with the child (like clicking "Add to Stack"), the child invokes that callback function, passing relevant data back to the parent as arguments.
