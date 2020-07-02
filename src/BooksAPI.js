// const api = "https://api2.isbndb.com"
const api = "https://www.googleapis.com/books/v1/volumes?q="


// Generate a unique token for storing your bookshelf data on the backend server.
// let token = localStorage.token
// if (!token)
  // token = localStorage.token = Math.random().toString(36).substr(-7)
let token = "44179_43ef23392288c0a0d94688c8729d02e3";

const headers = {
  'Content-Type': 'application/json',
  'Authorization': token
}

const availablebooks = [
  "0880700181",
  "0865543887",
  "9780745954370",
  "9780882703305",
  "9780801035807",
  "0878083766",
  "0802819621",
  "0970125216",
  "0310364302",
  "9780310613190",
  "0310236487",
  "094357532x",
  "0875525938",
  "97808029831743",
  "0891092897",
  "0310414717",
  "0060649526",
  "0830719385",
  "0878081895",
  "0840741650",
  "9814001511",
  "0878082069",
  "9781848715554",
  "0883447924",
  "9781581348095",
  "9780801072604",
  "9780825433641",
  "0310225906",
  "1576835073",
  "0976003902",
  "978024333041",
  "1557482667",
  "0883126516",
  "9780756602611",
  "5911469",
  "9781569630165",
  "1879737337",
  "0875523757",
  "978030275114",
  "1893531082",
  "9780801012877",
  "0912552654",
  "978184887237",
  "9780805446272",
  "1879737507",
  "0842388036",
  "0871230232",
  "009998979587654321",
  "0801042194",
  "0801057922",
  "0878083758",
  "09715694",
  "857927877",
  "1929122055",
  "0801026075",
  "0891098887",
  "9780878080113",
  "0914936611",
  "0974756296",
  "0802434878",
  "08549930073",
  "9780801032615",
  "15499979",
  "0878087737"
];


export const get = (bookId) =>
  fetch(api + bookId, { method: "GET" })
    .then(res => res.json())
    .then(data => data.items[0])

export const getAll = function() {
  // let results = [];
  // // for loop
  // for (let i = 0; i < arr.length; i++) {
  //   let book = get(arr[i]);
  //   results.push(book);
  // };
  return availablebooks;
}

//
// export const getAll = () =>
//   fetch(`${api}/books`, { headers })
//     .then(res => res.json())
//     .then(data => data.books)

export const update = (book, shelf) =>
  fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  }).then(res => res.json())


export const search = (query, maxResults) =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, maxResults })
  }).then(res => res.json())
    .then(data => data.books)


/**



**/
