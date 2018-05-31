class Deck < ApplicationRecord
  has_many :cards
  has_many :favorites
  has_many :users, through: :favorites
end
