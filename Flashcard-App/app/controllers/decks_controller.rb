class DecksController < ApplicationController
  def index
    @Decks = Deck.all
    render @Decks.to_json
  end
end
