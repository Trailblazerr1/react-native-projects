url = "http://api.whatthetrend.com/api/v2/trends.json?woeid=23424848"

export const fetchdata = () => {
    var trendItems = []
    return fetch(url)
        .then(res => res.json())
        .then(data => {
            for(i=0;i<10;i++) {
                trendItems.push(data.trends[i].name)
                
                //return trendItems
            }
            //console.log(trendItems)
            return trendItems
        })
    
    
}