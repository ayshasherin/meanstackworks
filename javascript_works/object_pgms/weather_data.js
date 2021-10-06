var weather_data=[
    {district:"tvm",temp:30},
    {district:"tvm",temp:31},
    {district:"apy",temp:24},
    {district:"ktm",temp:20},
    {district:"idk",temp:19},
    {district:"ekm",temp:31},
    {district:"tsr",temp:29},
    {district:"mpm",temp:30},
    {district:"apy",temp:25},
    {district:"ktm",temp:21},
    {district:"idk",temp:18},
    {district:"ekm",temp:30},
    {district:"tsr",temp:20},
    {district:"mpm",temp:31},

]

//to print an object with distrct_name : cur_temp
var forcast={}
for(let data of weather_data){
    let district_name=data.district
    let cur_temp=data.temp
    if(district_name in forcast){
        let old_temp=forcast[district_name]
        if(cur_temp>old_temp){
            forcast[district_name]=cur_temp
        }
    }
    else{
        forcast[district_name]=cur_temp
    }

}
console.log(Object.entries(weather_data));


//sort the result wrt temp
//currently our resukt is in object.so we have to convert it in to array as sort will not work in object.
var re=Object.entries(forcast).sort((temp1,temp2)=>temp2[1] - temp1[1])
console.log(re);