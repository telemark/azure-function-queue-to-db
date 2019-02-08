module.exports = async function (context, mySbMsg) {
  context.bindings.messageDocument = JSON.stringify(mySbMsg)
}
