// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import filters from "../../data/filters";

export default (req, res) => {
  res.statusCode = 200;
  res.json(filters);
};
