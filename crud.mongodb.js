use("schoolDB")

db.students.insertOne({
    name: "Rahul",
    age: 20,
    course: "BCA",
    city: "lucknow",
    marks: 78
})
db.students.insertMany([
    {
        name: "Satyam",
        age: 19,
        course: "BCA",
        city: "Pratapgarh",
        marks: 91
    },
    {
        name: "Suresh",
        age: 19,
        course: "BBA",
        city: "Sultanpur",
        marks: 91
    },
    {
        name: "Mahesh",
        age: 19,
        course: "B tech",
        city: "Amethi",
        marks: 91
    },
])
db.students.find()
db.students.find().pretty()
db.students.find({
    course: "BCA"
})
db.students.find({
    marks: { $gt: 80 }
})
db.students.find({
    city: "Pratapgarh"
})
db.students.findOne({
    name: "Rahul"
})
db.students.updateOne(
    { name: "Rahul" },
    { $set: { city: "Banaras" } }
)
db.students.deleteOne({
    name:"Rahul"
})