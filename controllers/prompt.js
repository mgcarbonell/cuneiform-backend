// all prompts
const index = (req, res) => {
  db.prompt.findAll().then((foundPrompts) => {
    if(!foundPrompts) return res.json({
      message: 'No prompts have been found.'
    })
    res.status(200).json({entries: foundPrompts})
  }) 
}
// one prompt
const show = (req, res) => {
  db.entry.findByPk(req.params.id).then((foundPrompt) => {
    if (!foundPrompt) return res.json({
      message: 'No prompt with that ID has been found.'
    })
    res.status(200).json({entry: foundPrompt})
  })
}

// create prompt - admin protected

// update prompt - admin protected

// delete prompt - admin protected

module.exports={
  index,
  show
}