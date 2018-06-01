class Quiz < ApplicationRecord
  has_many :users, through: :instances
  has_many :questions

  def makeQuiz (inp)
    q = Quiz.new
    q.name = inp.name
    q.description = inp.description
    q.save
  end
end
