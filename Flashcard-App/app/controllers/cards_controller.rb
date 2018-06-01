class CardsController < ApplicationController
  before_action set_card:, only: [:show]
  def index
    @cards = Card.all
    render json: @cards
  end

  def show
    render json: @card
  end
  def create
  end



  private
    def set_card
      @card = Card.find(params[:id])
    end
    def card_params
      params.require(:question).permit(:a_value, :q_value, :quiz)
    end
end
