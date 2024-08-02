const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
    id: 1,
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
    id: 2,
  },
];

exports.getIndex = (req, res) => {
  res.render("index", { messages: messages });
};

exports.getForm = (req, res) => {
  res.render("form");
};

exports.postForm = (req, res) => {
  console.log(req.body);
  console.log(req.body.messageText);

  messages.push({
    text: req.body.messageText,
    user: req.body.userText,
    added: new Date(),
    id: messages.length + 1,
  });

  res.redirect("/");
};

exports.viewMessage = (req, res) => {
  console.log(req.params);
  const messageId = parseInt(req.params.messageId);
  const message = messages.find((msg) => msg.id === messageId);

  if (message) {
    res.render("message", { message: message });
  } else {
    res.status(404).send("Message not found");
  }
};
