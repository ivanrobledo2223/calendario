function createCalendar() {
    var calendar = document.getElementById('calendar');
  
    var header = document.createElement('h1');
    header.textContent = 'Calendario 2023';
    calendar.appendChild(header);
  
    var date = new Date('2023-01-01');
    var currentDate = new Date();
  
    while (date.getFullYear() === 2023) {
      var monthTable = document.createElement('table');
      monthTable.classList.add('month-border');
  
      var thead = document.createElement('thead');
      var tbody = document.createElement('tbody');
  
      var daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  
      var headerRow = document.createElement('tr');
      for (var i = 0; i < daysOfWeek.length; i++) {
        var th = document.createElement('th');
        th.textContent = daysOfWeek[i];
        headerRow.appendChild(th);
      }
      thead.appendChild(headerRow);
  
      var firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
      var lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      var startDay = firstDayOfMonth.getDay();
  
      var row = document.createElement('tr');
      for (var i = 0; i < startDay; i++) {
        var td = document.createElement('td');
        row.appendChild(td);
      }
  
      var currentDateOfMonth = new Date(date);
      while (currentDateOfMonth.getMonth() === date.getMonth()) {
        if (currentDateOfMonth.getDay() === 0) {
          tbody.appendChild(row);
          row = document.createElement('tr');
        }
  
        var td = document.createElement('td');
        td.textContent = currentDateOfMonth.getDate();
  
        if (
          currentDateOfMonth.getMonth() === currentDate.getMonth() &&
          currentDateOfMonth.getDate() === currentDate.getDate()
        ) {
          td.classList.add('current-date');
        }
  
        row.appendChild(td);
  
        currentDateOfMonth.setDate(currentDateOfMonth.getDate() + 1);
      }
  
      while (row.children.length < 7) {
        var td = document.createElement('td');
        row.appendChild(td);
      }
  
      tbody.appendChild(row);
      monthTable.appendChild(thead);
      monthTable.appendChild(tbody);
      calendar.appendChild(monthTable);
  
      date.setMonth(date.getMonth() + 1);
    }
  }
  
  createCalendar();