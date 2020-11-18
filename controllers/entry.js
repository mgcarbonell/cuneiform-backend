const db = require('../models')

// working
const entry = (req, res) => {
  db.entry.findAll().then((foundEntries) => {
    if(!foundEntries) return res.json({
      message: 'No Entries have been found.'
    })

    res. status(200).json({entries: foundEntries})
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
