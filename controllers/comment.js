// require
const db = require('../models')

// working
const comment = (req, res) => {
  db.comment.findAll().then((foundComments) => {
    if(!foundComments) return res.json({
      message: "No comments to this entry."
    })
    res.status(200).json({comments: foundComments})
  })
}

const create = (req, res) => {
  db.comment.create(req.body).then((savedComment) => {
    res.status(200).json({comment: savedComment})
  })
}

const update = (req, res) => {
  db.comment.update({
    body: req.body.body
  }, {
    where: {
      id: req.params.id
    }
  }).then((updatedComment) => {
    if (!updatedComment) return res.json({
      message: "No comment with that ID found."
    })

    res.status(200).json({comment: updatedComment})
  })
}

const destroy = (req, res) => {
  db.comment.destroy({
    where: {id: req.params.id}
  }).then(() => {
    res.status(200)
  })
}

module.exports = {
  comment,
  create,
  update,
  destroy
}