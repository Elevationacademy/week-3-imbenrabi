const fetch = function(queryType, queryValue) {
    //queryType === 'isbn' ? queryType = 'isbn' : querType = 'title';
    
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q="${queryType}":${queryValue}`,
        success: function (data) {
            data.items.forEach(book => {
                const title = book.volumeInfo.title;
                const authors = book.volumeInfo.authors;
                const isbn =  book.volumeInfo.industryIdentifiers;

                console.log(title, authors, isbn);
            });

            // console.log(data);
            
            
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    });
}

fetch("isbn", 9789814561778)
fetch("title", "How to Win Friends and Influence People")

//$('#fetch').click(fetch)
