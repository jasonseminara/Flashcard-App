class Deck < ApplicationRecord
  has_many :cards
  has_many :favorites
  has_many :users, through: :favorites

  def withCards
    Deck.joins(:cards).where(cards:{deck_id: @deck}).select('*').all
  end
end
