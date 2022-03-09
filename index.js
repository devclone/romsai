var express = require('express');
var request = require('request');
var app = express();
const dotenv = require('dotenv');
dotenv.config();
const bp = require('body-parser');
const axios = require('axios');

app.use('/axios', express.static(__dirname + '/node_modules/axios/dist'))
app.use(express.static(__dirname + '/Public')); //__dir and not _dir
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

const PORT = process.env.PORT || 9999

var date = new Date();


// Simple request time logger
app.use((req, res, next) => {
    //console.log("A new request received at " + date);
   next();  
 });

var path = require('path');

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname,'/Public/index.html'));
});

app.post('/chkver', (req, res) => {
    var config = {
        url: "https://tonaot.top/chkver",
        method: "POST"
    }
    axios(config)
    .then((response) => {
        res.send(response.data);
    })
    .catch((err) => {
        console.log(err);
    })
})
 

 app.post("/submit", (req, res)=>{
    const token = process.env.TOKEN
    const url_line_notification = "https://notify-api.line.me/api/notify";
    if (token == '') {
        res.end("");
    }
  
    request({
         method: 'POST',
         uri: url_line_notification,
         header: {
             'Content-Type': 'multipart/form-data',
         },
         auth: {
             bearer: token,
         },
         form: {
             message: req.body.detail
         },
     }, (err, httpResponse, body) => {
         if (err) {
             console.log(err)
         } else {
             //console.log(body)
         }
     });
    
    //console.log(req.body);
    res.end("yes");
});

app.listen(PORT, () => {console.log('server run on : ' + PORT)});
