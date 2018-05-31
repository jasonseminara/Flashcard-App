class CardsController < ApplicationController
  before_action set_card:, only: [:show]
  def index
    @cards = Card.all
    render json: @cards
  end

  def show
    render json: @card
  end


  private
    def set_card
      @card = Card.find(params[:id])
    end
    # def card_params
    #   params.require(:deck_id)
    # end
end
