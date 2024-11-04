// Sales Chart Data and Drawing
const salesData = [12000, 15000, 10000, 20000, 17000, 22000];
const salesCtx = document.getElementById('salesChart').getContext('2d');

function drawLineChart(ctx, data) {
    ctx.beginPath();
    ctx.strokeStyle = '#007bff';
    ctx.lineWidth = 2;

    data.forEach((point, index) => {
        const x = (index + 1) * 60;
        const y = 200 - point / 100;
        index === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.stroke();
}

drawLineChart(salesCtx, salesData);

// User Chart Data and Drawing
const userData = [150, 200, 300, 400, 250, 320];
const userCtx = document.getElementById('userChart').getContext('2d');

function drawBarChart(ctx, data) {
    ctx.fillStyle = '#28a745';
    data.forEach((value, index) => {
        const x = (index + 1) * 60 - 20;
        const y = 200 - value / 2;
        const width = 40;
        const height = value / 2;
        ctx.fillRect(x, y, width, height);
    });
}

drawBarChart(userCtx, userData);
