(async function () {
    async function fetchData(date) {
        let date_split = date.split('-'),
            year = date_split[0],
            month = date_split[1],
            day = date_split[2];
        if (parseInt(day) < 10) {
            day = parseInt(day);
        }
        month = parseInt(month) - 1;
        let url = "https://www.google.com/maps/timeline/kml?authuser=0&pb=!1m8!1m3!1i" + year + "!2i" + month + "!3i" + day + "!2m3!1i" + year + "!2i" + month + "!3i" + day;
        const data = await fetch(url);
        const xml = await data.text();
        return xml;
    }

    function upload(filename, text) {
        var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
        var theUrl = "https://protected-shore-22040.herokuapp.com/https://transitstudy.web.illinois.edu/upload"; // need a proxy to send to other sites
        xmlhttp.open("POST", theUrl);
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState === 4) {
              console.log(xmlhttp.response);
            }
          }
        xmlhttp.send(JSON.stringify({ data }, null, 2));
    }

    console.log("Start Processing - This may take up to 20 seconds")
    let data = new Array();
    let now = new Date();
    //get last 30 days' date
    for (let i = 1; i < 31; i++) {
        let thisDay = new Date(now.setDate(now.getDate() - 1))
        let dd = thisDay.getDate();
        let mm = thisDay.getMonth() + 1; //As January is 0.
        let yyyy = thisDay.getFullYear();
        let thisDate = yyyy + '-' + mm + '-' + dd;
        await data.push(await fetchData(thisDate));
        if (i % 6 == 0) {
            console.log('Processing ' + i/6 * 20 + '%')
        }
    }
    upload('google-location-history.json', data);
}());