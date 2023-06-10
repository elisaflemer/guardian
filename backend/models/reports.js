const mongoose = require("mongoose");

const reportSchema = mongoose.Schema(
  {
    escola: {
      type: String,
      required: [true, "Please add a text value"],
    },
    alunoEndereco: {
      type: String,
    },
    alunoNome: {
      type: String,
      required: [true, "Please add a text value"],
    },
    relato: {
      type: String,
      required: [true, "Please add a text value"],
    },
    verificado: {
        type: Boolean,
        default: false
    },
    aceito: { 
        type: Boolean,
        default: false
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Report", reportSchema);
