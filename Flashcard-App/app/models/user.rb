class User < ApplicationRecord
  has_secure_password
  # has_many :favorites, dependent: :destroy
  has_and_belongs_to_many :decks
  # has_many :decks, through: :favorites
  has_many :cards, through: :usercards
end
