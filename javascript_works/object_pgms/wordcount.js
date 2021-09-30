var text="hai hello hai hello"
var words=text.split(" ")   //[ 'hai', 'hello', 'hai', 'hello' ]
var word_count={}  //{hai:1,hello:1}
for(let word of words){

    //check for hai is present in word_count if yes add current value +1 else word_count[word]=1

    if(word in word_count){
        word_count[word]+=1
    }
    else{
        word_count[word]=1
    }
}
console.log(word_count);
//object use cheyth program cheythaal effective aayittulla hash table searching aan nadakkuuka 
                    //which is far far batter than linear searching in array