const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
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

    const gardenDB = client.db("gardenDB");
    const gardenCollection = gardenDB.collection("garden");

    app.get("/garden", async (req, res) => {
      const gardenData = await gardenCollection.find().toArray();
      res.send(gardenData);
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
