function fetchPage1() {
    return fetch('https://www.strava.com/api/v3/clubs/${clubID}/activities?page=1&per_page=200&access_token=${token}')
        .then(response => response.json())
        .then((json) => {
            let count = 0
            for (let ele of json) {
                count += ele.distance
            }
            let recordPageNum = json.length
            return [count, recordPageNum]
        })
}

function fetchPage2() {
    return fetch('https://www.strava.com/api/v3/clubs/${clubID}/activities?page=2&per_page=200&access_token=${token}')
        .then(response => response.json())
        .then((json) => {
            let count = 0
            for (let ele of json) {
                count += ele.distance
            }
            let recordPageNum = json.length
            return [count, recordPageNum]
        })
}

async function getData() {
    let valuesP1 = await fetchPage1()
    let valuesP2 = await fetchPage2()
    let countP1 = valuesP1[0]
    let countP2 = valuesP2[0]
    let total = countP1 + countP2
    let recordTotal = valuesP1[1] + valuesP2[1]
    document.getElementById("data").innerText = `${Math.floor(total * 0.000621)} Miles (${Math.floor(total / 1000)} Kilometers)`
    document.getElementById("recordCount").innerText = `Club Activities: ${recordTotal}`
}

    getData();
   
