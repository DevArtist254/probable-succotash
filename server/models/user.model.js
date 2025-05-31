const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      unique: true,
      require: [true, "Please enter your email"],
      validate: [validator.isEmail, "Please enter a valid email"],
    },
    password: {
      type: String,
      minLength: 8,
      require: [true, "Please enter your password"],
      select: false,
    },
    role: {
      type: String,
      enum: ["seller", "buyer", "user"],
      default: "buyer",
    },
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
    location: [
      {
        type: {
          type: String,
          default: "Point",
          enum: ["Point"],
        },
        coordinates: [Number],
        address: String,
        description: String,
        primary: Boolean,
      },
    ],
    logo: String,
    slogan: {
      type: String,
      trim: true,
    },
    photo: String,
    socials: [
      {
        image: {
          type: String,
          enum: [
            "facebook",
            "instagram",
            "linkedin",
            "telegram",
            "tiktok",
            "whatsapp",
            "x",
            "youtube",
          ],
          default: "whatsapp",
        },
        link: String,
      },
    ],
    phoneNumber: [
      {
        type: Number,
        validate: {
          validator: function (value) {
            return validator.isMobilePhone(value, "en-KE");
          },
          message: "Please enter a valid kenya number",
        },
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);

  next();
});

userSchema.methods.isCorrectPassword = async function (cP, uP) {
  return await bcrypt.compare(cP, uP);
};

const User = mongoose.model("user", userSchema);

module.exports = User;

//virtuals links

/**
 * "Find all Tour documents where createdBy === this user's _id."
 * 
 userSchema.virtual('model', {
  ref: 'Tour', //Refers to the name of the Mongoose model you're linking to.
  foreignField: 'createdBy', // The field in the Tour model that holds the reference (createdBy).
  localField: '_id', The field in the User model to match against (_id).
 });

  * foreignField

 createdBy: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'User',
}


 * const user = await User.findById(userId).populate('tours');

 .populate({
  path: 'tours',
  select: 'title price' // only return these fields from Tour
})

 */
