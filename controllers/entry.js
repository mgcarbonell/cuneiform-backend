const db = require('../models')

// working
const index = (req, res) => {
  // how would we findAll with the boolean isPublic = true? Can we pass it in as an [or]?
  db.entry.findAll().then((foundEntries) => {
    if(!foundEntries) return res.json({
      message: 'No Entries have been found.'
    })
    res.status(200).json({entries: foundEntries})
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
    res.status(200).json({entry: savedEntry})
  })
}

const update = (req, res) => {
  db.entry.update({
    ...req.body
  }, {
    where: {
      id: req.params.id
    }
  }).then((updatedEntry) => {
    if (!updatedEntry) return res.json({
      message: "No entry with that ID found."
    })

    res.status(200).json({entry: updatedEntry})
  })
}

const destroy = (req, res) => {
  db.entry.destroy({
    where: {id: req.params.id}
  }).then(() => {
    res.status(200)
  })
}


module.exports ={
  index,
  show,
  create,
  update,
  destroy
}