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
            legend: { display: false },
            scales: {
                xAxes: [
                    {
                        ticks: { fontColor: "#efefef" },
                        gridLines: {
                            display: false,
                            color: "#efefef",
                            drawBorder: false,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: "Days",
                            fontColor: "#efefef",
                        },
                    },
                ],
                yAxes: [
                    {
                        ticks: { stepSize: 0, fontColor: "#efefef" },
                        gridLines: {
                            display: true,
                            color: "#efefef",
                            drawBorder: false,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: "Mile Sec",
                            fontColor: "#efefef",
                        },
                    },
                ],
            },
        },
    });
}
