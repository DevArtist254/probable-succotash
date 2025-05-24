const ErrorHandler = require("../utils/AppError");
const CatchAsync = require("../utils/CatchAsync");
const APIFeatured = require("../utils/features");

exports.deleteOne = (Model) =>
  CatchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return new ErrorHandler(`There is no such item`, 404);
    }

    res.status(204).json({
      message: "success",
    });
  });

exports.updateOne = (Model) =>
  CatchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) {
      return new ErrorHandler(`There is no such item`, 404);
    }

    res.status(200).json({
      message: "success",
      data: {
        doc,
      },
    });
  });

exports.createOne = (Model) =>
  CatchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);

    if (!doc) {
      return new ErrorHandler(`This is no such item`, 404);
    }

    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  });

exports.getOne = (Model) =>
  CatchAsync(async (req, res, next) => {
    const doc = await Model.findById(req.params.id);

    if (!doc) {
      return new ErrorHandler(`This is no such item`, 404);
    }

    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  });

exports.getAll = (Model) =>
  CatchAsync(async (req, res, next) => {
    let filter = {};

    let feature = new APIFeatured(Model.find(filter), req.query)
      .filter()
      .sorted()
      .fields()
      .pagination();

    const doc = await feature.query;
    res.status(200).json({
      status: "success",
      results: doc.length,
      data: { doc },
    });
  });
