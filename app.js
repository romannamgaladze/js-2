// .....1 საკითხი......

const prices = [17, 25, 50, 26, 42];
console.log(prices);

const sumOfPrices = prices[0] + prices[1] + prices[2] + prices[3] + prices[4];
console.log(sumOfPrices);

const averageOfPrices = sumOfPrices / prices.length;
console.log(averageOfPrices);

// ......2 საკითხი......
const product1 = {
  productName: "Samsung S25",
  memory: "12GB RAM",
  isAvailableAt: ["Tsereteli Avenue", "Kazbegi Avenue", "Chavchavadze Avenue"],
};
console.log(product1);

console.log(
  `${product1.productName} with ${product1.memory} memory is available at ${product1.isAvailableAt[0]}`
);

// ......3 საკითხი......

const booklist = [
  {
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    yearPublished: "1859",
  },
  {
    title: "The Little Prince (Le Petit Prince)",
    author: "Antoine de Saint-Exupéry",
    yearPublished: "1943",
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J. K. Rowling",
    yearPublished: "1997",
  },
];
console.log(booklist);
