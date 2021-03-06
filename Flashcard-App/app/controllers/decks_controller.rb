class DecksController < ApplicationController
  before_action :authenticate_user
  before_action :set_deck, only: [:show]
  def index
    @decks = Deck.all
    render json: @decks
  end

  def show
    @deck_with_cards = Deck.joins(:cards).where(cards:{deck_id: @deck}).select('*').all
    render json: @deck_with_cards
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
