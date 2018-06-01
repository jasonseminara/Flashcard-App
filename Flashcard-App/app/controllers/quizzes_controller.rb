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

  def create
    @quiz = Quiz.new(quiz_params)
    if @quiz.save
      render json: @quiz, status: :created
    else
      render json: @quiz.errors, status: :unprocessable_entity
    end
  end

  private
  def set_quiz
    @quiz = Quiz.find(params[:id])
  end
  # Only allow a trusted parameter "white list" through.
  def quiz_params
    params.require(:quiz).permit(:name, :description)
  end
end
