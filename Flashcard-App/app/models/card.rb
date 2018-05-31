class Card < ApplicationRecord
  belongs_to :deck
  has_many :users, through: :usercards
end
