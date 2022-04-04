var lineChartsList = [
    {
        url: "/dashboard/get-elastic-search-logs",
        containerId: "elasticSearchLogsChart",
        responseHandler: initElasticSearchLogsChart,
    },
];

lineChartsList.forEach((chart) => {
    $.ajax({
        url: chart.url,
        success: function (data) {
            if (data.some((item) => item.value > 0)) {
                chart.responseHandler(data);
            } else {
                console.log("Not enough data found!");
            }
        },
        error: function () {
            console.log("Something went wrong!");
        },
        complete: function () {
            console.log("complete");
        },
    });
});

function initElasticSearchLogsChart(dataArr) {
    var ctx = document
        .getElementById("elasticSearchLogsChart")
        .getContext("2d");
    var myLineChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: dataArr.map(function (item) {
                return item.label;
            }),
            datasets: [
                {
                    label: "Query MS",
                    fill: false,
                    borderWidth: 2,
                    lineTension: 0,
                    spanGaps: true,
                    borderColor: "#efefef",
                    pointRadius: 3,
                    pointHoverRadius: 7,
                    pointColor: "#efefef",
                    pointBackgroundColor: "#efefef",
                    data: dataArr.map(function (item) {
                        return item.value;
                    }),
                },
            ],
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                },
            },
            scales: {
                x: {
                    ticks: { color: "#efefef" },
                    title: {
                        display: true,
                        text: "Days",
                        color: "#efefef",
                    },
                    gridLines: {
                        display: false,
                        color: "#efefef",
                        drawBorder: false,
                    },
                },

                y: {
                    ticks: { stepSize: 0, color: "#efefef" },
                    title: {
                        display: true,
                        text: "Mile Sec",
                        color: "#efefef",
                    },
                    gridLines: {
                        display: true,
                        color: "#efefef",
                        drawBorder: false,
                    },
                },
            },
        },
    });
}
