class Instance < ApplicationRecord
  has_many :answers
  belongs_to :user
  belongs_to :quiz
end
