class APIFeatured {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    let queryObj = { ...this.queryString };
    let removables = ["page", "sort", "limit", "fields"];
    removables.forEach((el) => delete queryObj[el]);

    let qS = JSON.stringify(queryObj);
    qS = qS.replace(/\b{gte|gt|lte|lt}\b/g, (match) => `${match}`);

    this.query.find(JSON.parse(qS));

    return this;
  }

  sorted() {
    if (this.queryString.sort) {
      const sortedList = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortedList);
    }

    return this;
  }

  fields() {
    if (this.queryString.fields) {
      const selectedList = this.queryString.fields.split(",").join(" ");
      this.query = this.query.select(selectedList);
    }

    return this;
  }

  pagination() {
    let page, limit, skip;

    page = this.queryString.page * 1 || 1;
    limit = this.queryString.limit * 1 || 10;

    skip = (page - 1) * limit;

    this.query.skip(skip).limit(limit);

    return this;
  }
}

module.exports = APIFeatured;
