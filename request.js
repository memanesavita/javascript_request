
const fs= require('fs')
const y = require("readline-sync");
const axios=require("axios");
axios.get("https://api.merakilearn.org/courses")
.then( a=>{
    merakhi_data=a.data
    File1=JSON.stringify(merakhi_data,null,3)
    k=fs.writeFileSync("mynewfile.json",File1)
    serial_no=0
    for(i of merakhi_data){
        console.log(serial_no+1,".",i["name"],i["id"])
        serial_no++
    
    }
    let course_no=y.questionInt("What Course Do You Want Plase Enter of Number of cousre:-")
    console.log(merakhi_data[course_no-1]["name"])
    let idd=merakhi_data[course_no-1]["id"]
    axios.get("http://api.merakilearn.org/courses/"+idd+"/exercises")
    .then(a=>{
        merakhi_data1=a.data
        File2=JSON.stringify(merakhi_data1,null,3)
        a2=fs.writeFileSync("newfile2.json",File2)
        Child_data=merakhi_data1["course"]["exercises"]
        serial_no2=0;
        for(i in Child_data){
            console.log(serial_no2+1,Child_data[i]["name"])
            serial_no2++
        }
        var k=y.questionInt("enter the content.no")
        var slug=Child_data[k]["content"]
        console.log(slug)

    })
    .catch(error=>{
        console.log(error)
    })

})
.catch(Error=>{
    console.log(Error)
})
