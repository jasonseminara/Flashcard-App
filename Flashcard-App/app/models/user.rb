class User < ApplicationRecord
  has_secure_password
  has_many :favorites, dependent: :destroy
  has_many :decks, through: :favorites
  has_many :cards, through: :usercards
end
