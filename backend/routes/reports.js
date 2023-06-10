const express = require("express");
const router = express.Router();

const Report = require("../models/reports");

// @desc    Get all reports
// @route   GET /api/reports
// @access  Public
router.get("/", async (req, res, next) => {
  try {
    const reports = await Report.find();
    return res.status(200).json({
      success: true,
      count: reports.length,
      data: reports,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
});

// @desc    Add report

// @route   POST /api/reports
// @access  Public
router.post("/", async (req, res, next) => {
  try {
    const report = await Report.create(req.body);
    return res.status(201).json({
      success: true,
      data: report,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
});

// @desc    Verify report
// @route   PUT /api/reports/:id
// @access  Public
router.put("verify/:id", async (req, res, next) => {
  try {
    const report = await Report.findById(req.params.id);
    if (!report) {
      return res.status(404).json({
        success: false,
        error: "No report found",
      });
    }
    report.verificado = true;
    report.aceito = req.body.aceito;
    await report.save();
    return res.status(200).json({
      success: true,
      data: report,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
});

module.exports = router;
