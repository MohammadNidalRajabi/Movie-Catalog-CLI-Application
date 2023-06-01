const { fetchMovieData } = require("./fetch");
const { movie } = require("./movie");
const { readMovies, writeMovie } = require("./write_read_file");
function getInput(input) {
    const readline = require("readline-sync");
    return readline.question(input);
  }
//this function for fetch data from api and store in json file
    fetchMovieData(); 

//this code for read data from file json 
function MovieCatalog(){
    const data= readMovies();
    console.log(data);
}
//this code for create object movie and move to catllog
    function addMovieToCatalog(){
        const data= readMovies();
        const name=getInput('Enter movie name: ') .toString();
        const rating=getInput('Enter movie rating: ');
        const image=getInput('Enter movie image url: ').toString();
        const imdb_url=getInput('Enter movie image imdb_url: ').toString();
        const move=new movie(data.length+1,name,parseInt(rating),image,imdb_url);
        data.push(move);
        writeMovie(data);
        console.log('add movie done :)');
    }

//this code for delete movie and write to catllog
    function deleteMovie() {
        const index=getInput('Enter movie id: ');
        const catalog=readMovies();
        catalog.splice(parseInt(index-1), 1);
        writeMovie(catalog);
    }
    

    //this code for update movie and write to catllog
    function updateMovie(index) {
        const catalog = readMovies();
        const name=getInput('Enter movie name: ') .toString();
        const rating=getInput('Enter movie rating: ');
        const image=getInput('Enter movie image url: ').toString();
        const imdb_url=getInput('Enter movie image imdb_url: ').toString();
        const updatedMovieData=new movie(index,name,parseInt(rating),image,imdb_url);
        catalog[index-1] = updatedMovieData;
        writeMovie(catalog);
    }
    

    //this code for search in movies using rate or name
    function search(searchBy) {
        if(searchBy==='name')
        {
            const name=getInput('Enter movie name for search: ').toString();
            const catalog = readMovies();
            const filteredData = catalog.filter((item) => item?.name?.includes(name));
            console.log(filteredData);
        }
        else if(searchBy==='rating')
       {
        const rating=getInput('Enter movie rating for search: ');
        const catalog = readMovies();
        const filteredData = catalog.filter((item) => item?.rating>=parseInt(rating));
        console.log(filteredData);
       }
       else
       {
        console.log("try again");
       }
    }
    
    async  function handleUserInput() {
      while (true) {
      console.log('Movie Catalog Management');
      console.log('1. Display Movie Catalog');
      console.log('2. Add New Movie');
      console.log('3. Update Movie Details');
      console.log('4. Delete Movie');
      console.log('5. Search and Filter');
      console.log('6. Fetch Movie Data');
      console.log('0. Exit');
      console.log();
        const choice = getInput('Enter your choice: ');
    
        switch (choice) {
          case '1':
            MovieCatalog();
            break;
          case '2':
             addMovieToCatalog();
            console.log('Movie added successfully.');
            break;
          case '3':
              const index=getInput('Enter movie id: ');
              updateMovie(index);
            break;
          case '4':
             deleteMovie();
            break;
          case '5':
              const searchWay=getInput('filter by ?(rating):(name): ');
            search(searchWay.toString());
            break;
          case '6':
              await  fetchMovieData();
            break;
          case '0':
            console.log('Exiting...');
            return;
          default:
            console.log('Invalid choice. Please try again.');
        }
    
        console.log();
      }
    }
    handleUserInput();
    
      

