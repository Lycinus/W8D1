# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Bench.delete_all
User.delete_all

Bench.create!(
    description: "DeYoung Museum",
    lat: 37.771906,
    lng: -122.467776
)

Bench.create!(
    description: 'Coit Tower',
    lat: 37.803099,
    lng: -122.405664
)

Bench.create!(
    description: 'Bernal Heights',
    lat: 37.742848,
    lng: -122.410947
)

User.create!(
    username: 'Sam',
    password: 'password'
)