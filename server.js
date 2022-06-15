const User = require("./models/userDetailsModel");
const Csvtojson = require("csvtojson");

let records;
Csvtojson().fromFile("./randomData.csv")
    .then(data => {
        records = data;
        console.log(data[0].email);
        User.sync();
        for(let i=0;i<data.length;i++){
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
        console.log("Data Created");
    })
    .catch(err =>{
        console.log(err);
    });
