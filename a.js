const bcrypt = require('bcrypt')

// bcrypt.hash('111111',4)
// .then(hash=>console.log(hash))
// .catch(err=>console.log(err.message))

var hash = '$2b$04$G.op1L6rZGATYoqQLBWYce5Z5zk8igLgEhsmUN55sflbk.tpp/FDu'
bcrypt.compare('111111',hash)
.then(result=>console.log(result))
.catch(err=>console.log(err))



//$2b$08$8zW8PHhYoR7WXQbjKgyszurhHyZS18CPLoGrAJ9FbNXSoCl.afPRm
//$2b$08$ANycvdxzAPlZh9YPQ2sdrOMZptlw1wHuHpOwglkkrgoUwGPmOdKee