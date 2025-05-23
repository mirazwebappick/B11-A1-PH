const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 3000;
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

// username: gardening
// password: VHf9ItOTdQst2Oyn

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster1.p3w4bpx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const gardenCollection = client.db("gardenDB").collection("garden");
    const shareTips = client.db("gardenDB").collection("shareTips");
    const user = client.db("gardenDB").collection("user");

    app.get("/garden", async (req, res) => {
      const gardenData = await gardenCollection
        .find({ status: "active" })
        .limit(6)
        .toArray();
      res.send(gardenData);
    });

    app.get("/gardeners", async (req, res) => {
      const result = await gardenCollection.find().toArray();
      res.send(result);
    });

    app.get("/my_tips", async (req, res) => {
      const result = await shareTips.find().toArray();
      res.send(result);
    });

    app.get("/my_tips/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await shareTips.findOne(query);
      res.send(result);
    });

    app.get("/my-tips/:email", async (req, res) => {
      const email = req.params.email;
      const result = await shareTips.find({ email }).toArray();
      res.send(result);
    });

    app.get("/share_garden_tip", async (req, res) => {
      const result = await shareTips.find().toArray();
      res.send(result);
    });

    app.get("/share_garden_tip/public", async (req, res) => {
      const sharePublicTips = await shareTips
        .find({ availability: "Public" })
        .toArray();
      res.send(sharePublicTips);
    });

    app.get("/share_garden_tip/public/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await shareTips.findOne(query);
      res.send(result);
    });

    app.post("/user", async (req, res) => {
      const getUser = req.body;
      const result = await user.insertOne(getUser);
      res.send(result);
    });

    app.post("/share_garden_tip", async (req, res) => {
      const getData = req.body;
      const result = await shareTips.insertOne(getData);
      res.send(result);
      console.log(getData);
    });

    app.delete("/my_tips/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await shareTips.deleteOne(query);
      res.send(result);
    });

    app.put("/update_tip/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const updateTip = req.body;
      const option = { upsert: true };
      const updateDoc = {
        $set: {
          updateTip,
        },
      };
      const result = await shareTips.updateOne(query, updateDoc, option);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Gardening-Community-Application");
});

app.listen(port, () => {
  console.log(`Server running on this port ${port} Port`);
});
