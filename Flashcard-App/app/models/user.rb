class User < ApplicationRecord
  has_secure_password
  has_many :instances
  has_many :quizzes, through: :instances
end
