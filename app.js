var express 		= require("express"),
 	app 			= express();
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/",(req,res)=>{
	res.render("index");
});
app.get("/patatap",(req,res)=>{
	res.render("patatapClone/index");
});
app.get("/todo",(req,res)=>{
	res.render("todolistProject/index");
});
app.get("/color-game",(req,res)=>{
	res.render("colorGame/colorGame");
});
app.get("/photo-grid",(req,res)=>{
	res.render("photo-grid/photogrid");
});
app.get("/candy",(req,res)=>{
	res.render("Bootstrap/Bootstrap4/candy/index");
});
app.get("/questionnaire",(req,res)=>{
	res.render("Question-Game/index");
});
app.listen(process.env.PORT,process.env.IP,()=>{
	console.log("server started");
});
