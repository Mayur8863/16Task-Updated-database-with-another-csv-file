const User = require("./models/userDetailsModel");
const Csvtojson = require("csvtojson");

let records;
Csvtojson().fromFile("./randomData2.csv")
    .then(data => {
        records = data;
        console.log(data[0].email);
        User.sync();
        
        for(let i=0;i<data.length;i++){
            User.findOne({where : {email:data[i].email}})
            .then(result =>{
                if(!result){
                    const user = async () => {
                        await User.create({
                            firstname : data[i].firstname,
                            lastname : data[i].lastname,
                            email : data[i].email,
                            profession : data[i].profession
                            })
                        }
                    user();
                }
            })
            .catch(err => {
                console.log(`Err : ${err} `);
            })
        }
        console.log("Data Created");
    })
    .catch(err =>{
        console.log(err);
    });