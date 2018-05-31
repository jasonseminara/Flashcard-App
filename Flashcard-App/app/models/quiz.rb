class Quiz < ApplicationRecord
  has_many :users, through: :instances
  has_and_belongs_to_many :questions
end
