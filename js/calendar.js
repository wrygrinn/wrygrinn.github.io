const calendarEl = document.getElementById("calendar");
let current = new Date();

function renderCalendar() {
  if (!calendarEl) return;

  const year = current.getFullYear();
  const month = current.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const monthName = current.toLocaleString('default', { month: 'long' });

  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  
  let html = `
  <div class="cal-header">
    <button id="prev">⇽</button>
    <span>${monthName} ${year}</span>
    <button id="next">⇾</button>
  </div>

  <div class="cal-grid">
    <div>S</div>
    <div>M</div>
    <div>T</div>
    <div>W</div>
    <div>T</div>
    <div>F</div>
    <div>S</div>
  `;

  for (let i = 0; i < firstDay; i++) {
    html += `<div></div>`;
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;

    let classes = "";
    if (typeof posts !== "undefined" && posts[dateStr]) classes += "has-post ";
    if (dateStr === todayStr) classes += "today";

    if (typeof posts !== "undefined" && posts[dateStr]) {
      html += `<div class="${classes.trim()}">
        <a href="/index/${posts[dateStr]}">${d}</a>
      </div>`;
    } else {
      html += `<div class="${classes.trim()}">${d}</div>`;
    }
  }

  html += `</div>`;

  calendarEl.innerHTML = html;

  document.getElementById("prev").onclick = () => {
    current.setMonth(current.getMonth() - 1);
    renderCalendar();
  };

  document.getElementById("next").onclick = () => {
    current.setMonth(current.getMonth() + 1);
    renderCalendar();
  };
}




renderCalendar();

let blink = true;

