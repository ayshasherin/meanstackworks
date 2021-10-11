var pattern = "hhaaii hhooww haaii hello"
//split
var words = pattern.split(" ")
for (word of words) {
    //word=hhaaii
    let st=new Set()
    for(let char of word){
        st.add(char)
    }
    console.log(st);
}


