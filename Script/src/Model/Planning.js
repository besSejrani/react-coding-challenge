import mongoose from "mongoose";

// ========================================================================================================

const messageSchema = new mongoose.Schema(
  {
    originalId: {
      type: String,
      required: true,
      unique: true,
    },
    talentId: {
      type: String,
      required: false,
    },
    talentName: {
      type: String,
      required: false,
    },
    talentGrade: {
      type: String,
      required: false,
    },
    bookingGrade: {
      type: String,
      required: false,
    },
    operatingUnit: {
      type: String,
      required: true,
    },
    officeCity: {
      type: String,
      required: false,
    },
    officePostalCode: {
      type: String,
      required: true,
    },
    jobManagerName: {
      type: String,
      required: false,
    },
    jobManagerId: {
      type: String,
      required: false,
    },
    totalHours: {
      type: Number,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    clientName: {
      type: String,
      required: false,
    },
    clientId: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: false,
    },
    isUnassigned: {
      type: Boolean,
      required: false,
    },
    requiredSkills: [
      {
        name: {
          type: String,
          required: false,
        },
        category: {
          type: String,
          required: false,
        },
      },
    ],
    optionalSkills: [
      {
        name: {
          type: String,
          required: false,
        },
        category: {
          type: String,
          required: false,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Planning", messageSchema);

export default Message;
