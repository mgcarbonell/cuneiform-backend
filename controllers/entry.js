const db = require('../models')

// working
const index = (req, res) => {
  db.entry.findAll({
    where: { "isPublic": true },
    order: [
      [ 'createdAt', 'DESC' ]
    ]
  }).then((foundEntries) => {
    if(!foundEntries) return res.json({
      message: 'No entries have been found.'
    })
    res.status(200).json({ entries: foundEntries })
  }) 
}

const userIndex = (req, res) => {
  db.entry.findAll({
    where: {
      "userId": req.params.id
    },
    order: [
      [ 'createdAt', 'DESC' ]
    ]
  }).then((foundEntries) => {
    if(!foundEntries) return res.json({
      message: 'No user entries have been found.'
    })
    res.status(200).json({ entries: foundEntries })
  }) 
}

const show = (req, res) => {
  db.entry.findByPk(req.params.id).then((foundEntry) => {
    if (!foundEntry) return res.json({
      message: 'No entry with that ID has been found.'
    })
    res.status(200).json({entry: foundEntry})
  })
}

const create = (req, res) => {
  db.entry.create(req.body).then((savedEntry) => {
    res.status(200).json({ entry: savedEntry })
  })
}

const update = (req, res) => {
  console.log(req.body)
  db.entry.update({
    title: req.body.title,
    body: req.body.body
  }, {
    where: {
      id: req.params.id
    }
  }).then((updatedEntry) => {
    console.log(req.params.id)
    if (!updatedEntry) return res.json({
      message: "No entry with that ID found."
    })
    res.status(200).json({ entry: updatedEntry })
  })
}

const destroy = (req, res) => {
  db.entry.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.status(200)
  })
}

module.exports ={
  index,
  userIndex,
  show,
  create,
  update,
  destroy
}