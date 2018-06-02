# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
require 'bcrypt'


Quiz.destroy_all
Question.destroy_all
User.destroy_all
Instance.destroy_all


# make a bunch of quizzes
qzs = *(1..3).map do
  Quiz.create!(name: Faker::Cat.registry, description: Faker::VentureBros.quote)
end

# make 50 questions, rando assign to each quiz
50.times do |q|
 Question.create!(q_value: Faker::Lorem.sentence, quiz: qzs.sample)
end

5.times do
  User.create!(
    name:  Faker::Name.name_with_middle,
    level: rand(1..10),
    title: Faker::Name.job_titles.sample,
    email: Faker::Internet.email,
    password_digest: BCrypt::Password.create('password')
  ).quizzes << qzs.sample
end



