class DecksController < ApplicationController
   before_action :set_deck, only: [:show]
  def index
    @decks = Deck.all
    render json: @decks
  end

  def show
    render json: @deck
  end

  def create
    @Deck = Deck.new(deck_params)

    if @Deck.save
      render json: @Deck, status: :created
    else
      render json: @Deck.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_deck
      @deck = Deck.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def deck_params
      params.require(:name)
    end
end
