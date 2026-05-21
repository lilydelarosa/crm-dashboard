const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
  link.addEventListener("click", function () {
    navLinks.forEach(item => item.classList.remove("active"));
    this.classList.add("active");
  });
});


const ctx = document.getElementById("revenueChart");

new Chart(ctx, {
  type: "line",

  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],

    datasets: [
      {
        label: "Revenue",
        data: [12000, 19000, 17000, 25000, 30000, 38000, 42000],

        borderColor: "#0b8278",
        backgroundColor: "rgba(11,130,120,0.08)",

        tension: 0.4,
        fill: true
      },

      {
        label: "Expenses",
        data: [8000, 12000, 11000, 15000, 18000, 21000, 24000],

        borderColor: "#ff5266",

        tension: 0.4
      }
    ]
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false
      }
    }
  }
});