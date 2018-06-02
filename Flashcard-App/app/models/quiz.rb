class Quiz < ApplicationRecord
  has_many :instances
  has_many :questions
  has_many :users, through: :instances
end
