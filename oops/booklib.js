class Library {
    session = {}
    books = {
        "halfgirlfriend": { book_name: "halfgirlfriend", author: "chetan bagath", price: 300, avl_copies: 300, copies_sold: 300 },
        "randamoozham": { book_name: "randamoozham", author: "mt", price: 350, avl_copies: 250, copies_sold: 500 },
        "the alchemist": { book_name: "the alchemist", author: "paulo", price: 400, avl_copies: 250, copies_sold: 400 }
    }



    findBook(book_name) {
        if (book_name in this.books) {
            let book = this.books[book_name]
            if (book.avl_copies > 0) {
                console.log(book);
            }
            else {
                console.log("book is not available");
            }
        }
        else {
            console.log("book not exist");
        }

    }                                             





    getSold(){
        let copies_sold_history=[]
        for(let sold in this.books){
            copies_sold_history.push(this.books[sold].copies_sold)
        }
        return copies_sold_history
    }

    filterBook(){
        let sld=this.getSold()
        sld.sort((book1,book2)=>book1 - book2)
        console.log(sld);
    }



}



var obj = new Library()
obj.findBook("halfgirlfriend")
obj.filterBook()
