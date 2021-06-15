interface Passion {
  key: string;
  label: string;
}

interface ResultPassion {
  _id: String
  category: String
  label: String
  key: String
  subPassions: [Passion]
}

export default ResultPassion;