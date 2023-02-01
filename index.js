const express = require("express");
const cors = require("cors");
const pool = require("./config");
const app = express();
app.use(express.json());
app.use(cors());

/*----------------------login----------------------------*/ 
/*
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
    })
);
*/

 /*----------------------All Property Data-------------------------------------*/

 app.get("/create", (req, resp) => {
  pool.query("select * from project", (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
});
app.post("/create", (req, res) => {
  const q = "INSERT INTO `project`( title`, `name`, `location`, `status`, `rera`, `description`, `area`, `size`, `configuration`, `projectarea`, `totalflats`, `launchdate`, `possesiondate`, `constructiontype`, `noofparking`, ` totaltowers`, `totalfloors`, ` internaldorheight,`, ` parkinglevel`, `totalfloors`, `greenarea`, `heading1`, `heading2`, `heading3`, `heading4`, `heading5`, `heading6`,`ammenites1`,`ammenites2`,`ammenites3`,`ammenites4`,`ammenites5`,`ammenites6`) VALUES (?)";

  const values = [
    req.body.title,
    req.body.name,
    req.body.location,
    req.body.status,
    req.body.rera,
    req.body.description,
    req.body.area,
    req.body.size,
    req.body.configuration,
    req.body.projectarea,
    req.body.totalflats,
    req.body.launchdate,
    req.body.possesiondate,
    req.body.constructiontype,
    req.body.noofparking,
    req.body.totaltowers,
    req.body.projectstatus,
    req.body.propertytype,
    req.body.internaldorheight,
    req.body.parkinglevel,
    req.body.ceilingheight,
    req.body.maindoorheight,
    req.body.internaldorheight,
    req.body.parkinglevel,
    req.body.totalfloors,
    req.body.greenarea,
    req.body.heading1,
    req.body.heading2,
    req.body.heading3,
    req.body.heading4,
    req.body.heading5,
    req.body.heading6,
    req.body.ammenites1,
    req.body.ammenites2,
    req.body.ammenites3,
    req.body.ammenites4,
    req.body.ammenites5,
    req.body.ammenites6,

  ];

  pool.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/compare/data/:id",(req,resp)=>{
   pool.query("DELETE FROM project WHERE u_id ="+req.params.id,(error,results)=>{
    if(error) throw error;
    console.log(req.params.id)
    resp.send(results)
  })
})

/*-----------------------All flat data---------------------------------------------------------------------------------*/



const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>console.log(`Server is running succesfully on PORT ${PORT}`))