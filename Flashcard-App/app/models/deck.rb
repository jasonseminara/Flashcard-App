class Deck < ApplicationRecord
  has_many :cards
  has_and_belongs_to_many :users
  has_many :usercards, through: :cards

  def withCards
    Deck.joins(:cards).where(cards:{deck_id: @deck}).select('*').all
  end
end
