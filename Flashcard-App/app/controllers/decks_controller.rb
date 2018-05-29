class DecksController < ApplicationController
  def index
    @Decks = Deck.all
    render json: @Decks
  end
end
