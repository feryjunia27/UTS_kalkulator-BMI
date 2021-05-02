//importing modules
const express = require("express");


// stores the express module into the app variable!
const app = express();
app.use(express.urlencoded({ extended: false }));

//sends index.html
app.get("/", function (req, res) {
	res.sendFile(__dirname + "/" + "index.html");
});

//this is used to post the data on the specific route
app.post("/", function (req, res) {
	heigh = parseFloat(req.body.height);
	weigh = parseFloat(req.body.weight);
	bmi = weigh / (heigh * heigh);
	
	//number to string format
	 bmi = bmi.toFixed();

	console.log(bmi)
	req_name = req.body.name;

	// CONDITION FOR BMI
	if (bmi < 19) {
		res.send("<h3>Hallo ! " + req_name +
				" Indexs berat badan kamu di antara: " + bmi +
				"<centre><h1>Kamu kurang berat badan!");
	} else if (19 <= bmi && bmi < 25) {
		res.send("<h3>Hallo ! " + req_name +
				" Indexs berat badan kamu di antara: " + bmi +
				"<centre><h1>Berat badan kamu normal!");
	} else if (25 <= bmi && bmi < 30) {
		res.send("<h3>Hallo ! " + req_name +
				" Indexs berat badan kamu di antara: " + bmi +
				"<centre><h1>Kamu kelebihan berat badan!");
	} else {
		res.send("<h3>Hallo! " + req_name +
				" Indexs berat badan kamu di antara: " + bmi +
				"<centre><h1>Kamu sangat Obesitas!");
	}
});

//this is used to listen a specific port!
app.listen(3000, function () {
	console.log("port active at 3000");
});
