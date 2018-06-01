class QuizzesController < ApplicationController
  before_action :authenticate_user
  before_action :set_quiz, only: [:show]
  def index
    @quiz = Quiz.all
    render json: @quiz
  end
  def show
    render json: @quiz
  end
  private
  def set_quiz
    @quiz = Quiz.find(params[:id])
  end
  # Only allow a trusted parameter "white list" through.
  # def deck_params
  #   params.require(:name)
  # end
end
