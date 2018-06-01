class Quiz < ApplicationRecord
  has_many :users, through: :instances
  has_many :questions

end
