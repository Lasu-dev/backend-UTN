Buscar a todos los elemsntos que cumplan con la condición de que su nombre cumpla con la expresión regular '^usuario' (significa que empiecen con la palabra usuario)

db.test.find(
    {
        nombre: {$regex: '^usuario'}
    }
)
.limit(2)


Greater than ( mayor a )
db.test.find({
    edad: {$gt: 18}
})

db.test.find({
    edad: {$gt:18, $lt:60}
})

$eq = Equal (igual a)
db.test.find({ nombre: {$eq: 'Susana Pessagno'} })