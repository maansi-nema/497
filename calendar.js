const MONTHS = [
	"January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October",
    "November", "December"
];

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

const calendarBody = document.getElementById("calendar-body");
const calendarMonth = document.getElementById("calendar-month");

function generateCalendar() {
calendarBody.innerHTML = "";
calendarMonth.textContent = MONTHS[currentMonth] + " " + currentYear;

const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

let date = 1;
let dayOfWeek = new Date(currentYear, currentMonth, date).getDay();

while (date <= daysInMonth) {
	const weekRow = document.createElement("tr");

	for (let i = 0; i < 7; i++) {
		const dayCell = document.createElement("td");

		if (i === dayOfWeek && date <= daysInMonth) {
			dayCell.textContent = date;
			dayCell.classList.add("selectable");
			dayCell.addEventListener("click", () => {
				document.querySelectorAll(".selected").forEach(cell => {
					cell.classList.remove("selected");
				});
				dayCell.classList.add("selected");
			});

			if (date === new Date().getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear()) {
				dayCell.classList.add("today");
			}

			date++;
			dayOfWeek = new Date(currentYear, currentMonth, date).getDay();
		}

		weekRow.appendChild(dayCell);
	}

	calendarBody.appendChild(weekRow);
}
}
document.getElementById("prev-month-btn").addEventListener("click", () => {
    if (currentMonth === 0) {
    currentMonth = 11;
    currentYear--;
    } else {
    currentMonth--;
    }
    generateCalendar();
    });
    
    document.getElementById("next-month-btn").addEventListener("click", () => {
    if (currentMonth === 11) {
    currentMonth = 0;
    currentYear++;
    } else {
    currentMonth++;
    }
    generateCalendar();
    });
    
    generateCalendar();