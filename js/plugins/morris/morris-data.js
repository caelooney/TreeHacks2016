// Morris.js Charts sample data for SB Admin template

$(function() {

    // Area Chart
    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '1',
            Family: 1,
            Friends: null,
            Memories: 1
        }, {
            period: '2',
            Family: 3,
            Friends: 1,
            Memories: 2
        }, {
            period: '3',
            Family: 4,
            Friends: 1,
            Memories: 2
        }, {
            period: '4',
            Family: 5,
            Friends: 2,
            Memories: 3
        }, {
            period: '5',
            Family: 4,
            Friends: 1,
            Memories: 4
        }, {
            period: '6',
            Family: 6,
            Friends: 3,
            Memories: 4
        }, {
            period: '7',
            Family: 7,
            Friends: 4,
            Memories: 5
        }, {
            period: '8',
            Family: 8,
            Friends: 3,
            Memories: 4
        }, {
            period: '9',
            Family: 7,
            Friends: 4,
            Memories: 5
        }, {
            period: '10',
            Family: 9,
            Friends: 6,
            Memories: 7
        }],
        xkey: 'period',
        ykeys: ['Family', 'Friends', 'Memories'],
        labels: ['Family', 'Friends', 'Memories'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    // Donut Chart
   

    // Line Chart
    Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'morris-line-chart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [{
            d: '2016-02-01',
            visits: 12
        }, {
            d: '2016-02-02',
            visits: 15
        }, {
            d: '2016-02-03',
            visits: 16
        }, {
            d: '2016-02-04',
            visits: 8
        }, {
            d: '2016-02-05',
            visits: 14
        }, {
            d: '2016-02-06',
            visits: 13
        }, {
            d: '2016-02-07',
            visits: 12
        }, {
            d: '2016-02-08',
            visits: 12
        }, {
            d: '2016-02-09',
            visits: 11
        }, {
            d: '2016-02-10',
            visits: 9
        }, {
            d: '2016-02-11',
            visits: 12
        }, {
            d: '2016-02-12',
            visits: 14
        }, {
            d: '2016-02-13',
            visits: 16
        }, {
            d: '2016-02-14',
            visits: 17
        }, {
            d: '2016-02-15',
            visits: 19
        }, {
            d: '2016-02-16',
            visits: 20
        }, {
            d: '2016-02-17',
            visits: 21
        }, {
            d: '2016-02-18',
            visits: 18
        }, {
            d: '2016-02-19',
            visits: 15
        }, {
            d: '2016-02-20',
            visits: 16
        }, {
            d: '2016-02-21',
            visits: 17
        }, {
            d: '2016-02-22',
            visits: 14
        }, {
            d: '2016-02-23',
            visits: 13
        }, {
            d: '2016-02-24',
            visits: 12
        }, {
            d: '2016-02-25',
            visits: 11
        }, {
            d: '2016-02-26',
            visits: 17
        }, {
            d: '2016-02-27',
            visits: 16
        }, {
            d: '2016-02-28',
            visits: 13
        }, {
            d: '2016-02-29',
            visits: 11
        }, ],
        // The name of the data record attribute that contains x-visitss.
        xkey: 'd',
        // A list of names of data record attributes that contain y-visitss.
        ykeys: ['visits'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Hours Home'],
        // Disables line smoothing
        smooth: false,
        resize: true
    });

    // Bar Chart
    


});
