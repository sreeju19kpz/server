const { default: mongoose } = require("mongoose");

const postsSchema = new mongoose.Schema({
  authorId: {
    type: Number,
    required: false,
  },
  photo: {
    required: false,
    type: Buffer,
    validate: {
      validator: (value) => {
        return (
          value.mimetype === "image/jpeg" || value.mimetype === "image/png"
        );
      },
      message: "The image must be a JPEG or PNG file.",
    },
  },
  description: {
    type: String,
    required: false,
  },
  time: {
    type: Date,
  },
  comments: [
    {
      userId: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      time: {
        type: Date,
        required: false,
      },
    },
  ],
  likes: [
    {
      userId: {
        type: Number,
        required: false,
      },
    },
  ],
});

module.exports = mongoose.model("posts", postsSchema);
