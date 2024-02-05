const friends = ['Mithu', 'Rabbi', 'Himu'];

for(let i = 0; i < friends.length; i++){
    console.log(friends[i])
}

for(const friend of friends){
    console.log(friend);
   const j = friends.join('|')
   console.log(j)
}