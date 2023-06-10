document.getElementById('submit').addEventListener('click', () => {
    let id = 0;
    let table = document.getElementById('table-items');
    let row = table.insertRow();
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('date-worked').value;
    row.insertCell(1).innerHTML = document.getElementById('start-time').value;
    row.insertCell(2).innerHTML = document.getElementById('end-time').value;
})