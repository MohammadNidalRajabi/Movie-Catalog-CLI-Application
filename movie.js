class movie{
    id;
    name;
    rating;
    image;
    imdb_url;
    constructor(id,name,rating,image,imdb_url)
    {
        this.id=id;
        this.name=name;
        this.rating=rating;
        this.image=image;
        this.imdb_url=imdb_url;
    }
}
module.exports = {movie};