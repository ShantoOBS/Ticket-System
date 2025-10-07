<h1 align="center">💬 Customer Support Zone</h1>

<p align="center">
  A <b>React-based Customer Support Zone</b> project to manage customer tickets efficiently — 
  track progress, mark resolutions, and display live statistics.
</p>

<hr>

<h2>🌐 Live Demo</h2>
<p>
  🔗 <a href="http://cs-ticket-system2321.surge.sh/" target="_blank">Click Here to View Live Demo</a>
</p>

<hr>

<h2>📌 Project Overview</h2>
<p>
  This project was built as part of <b>ASSIGNMENT-007</b>. It allows users to view, track, and resolve customer tickets.
  The design follows a Figma prototype and integrates <b>React-Toastify</b> for stylish notifications.
</p>

<hr>

<h2>⚙️ Features & Functionalities</h2>

<ul>
  <li><b>✅ Navbar:</b> Displays the website logo/name on the left and navigation items with a <i>New Ticket</i> button on the right.</li>
  <li><b>✅ Banner:</b> Gradient background showing ticket statistics:
    <ul>
      <li>In Progress Count</li>
      <li>Resolved Count (default = 0)</li>
    </ul>
  </li>
  <li><b>✅ Main Section:</b> 
    <ul>
      <li>Displays all customer tickets (10–15) in a 2-column grid layout.</li>
      <li>Each card shows ticket details:
        <ul>
          <li>id, title, description, customer, priority, status, createdAt</li>
        </ul>
      </li>
    </ul>
  </li>
  <li><b>✅ Task Status Section:</b> 
    <ul>
      <li>Clicking a card adds it to this section.</li>
      <li>Shows the ticket title and a <i>Complete</i> button.</li>
      <li>Toast notifications confirm actions.</li>
    </ul>
  </li>
  <li><b>✅ Completion Logic:</b> 
    <ul>
      <li>When a task is marked complete:
        <ul>
          <li>It is removed from the In Progress list.</li>
          <li>Added to the Resolved List.</li>
          <li>In Progress count decreases.</li>
          <li>Resolved count increases.</li>
        </ul>
      </li>
    </ul>
  </li>
  <li><b>✅ Footer:</b> Designed according to Figma.</li>
  <li><b>✅ Responsiveness:</b> Fully responsive for mobile, tablet, and desktop screens.</li>
  <li><b>✅ React-Toastify:</b> Used to replace default alerts with modern toast notifications.</li>
</ul>

<hr>

<h2>🧠 React Concepts Used</h2>

<ol>
  <li><b>What is JSX?</b> JSX (JavaScript XML) allows writing HTML elements inside JavaScript and makes the code more readable.</li>
  <li><b>Difference between State and Props:</b> 
    <ul>
      <li>Props are read-only and passed from parent to child.</li>
      <li>State is managed inside a component and can change over time.</li>
    </ul>
  </li>
  <li><b>What is useState Hook?</b> It lets you add React state to functional components. It returns a state variable and a function to update it.</li>
  <li><b>Sharing State Between Components:</b> By lifting the state up to a common parent and passing it down as props.</li>
  <li><b>Event Handling:</b> Done using camelCase syntax (e.g., <code>onClick</code>, <code>onChange</code>) and callback functions.</li>
</ol>

<hr>

<h2>📁 Tech Stack</h2>
<ul>
  <li>⚛️ React</li>
  <li>🧩 React-Toastify</li>
  <li>🎨 CSS / Tailwind (as per Figma design)</li>
  <li>📜 JSON data for tickets</li>
</ul>

<hr>

<h2>🚀 How to Run Locally</h2>
<ol>
  <li>Clone the repository:</li>
  <pre><code>git clone https://github.com/ShantoOBS/Ticket-System.gitcode></pre>

  <li>Navigate to the project folder:</li>
  <pre><code>cd Ticket-System</code></pre>

  <li>Install dependencies:</li>
  <pre><code>npm install</code></pre>

  <li>Run the app:</li>
  <pre><code>npm run dev</code></pre>
</ol>

<hr>

<h2>📷 Screenshots</h2>
<p>Add screenshots of your UI sections here (Banner, Ticket List, Status Section, Footer).</p>

<hr>

<h2>👨‍💻 Author</h2>
<p>Developed by <b>Shanta Shil</b> — passionate about React and frontend development.</p>

<p>
  🔗 <a href="https://github.com/ShantoOBS" target="_blank">GitHub Profile</a><br>
</p>
