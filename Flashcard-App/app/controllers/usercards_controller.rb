class UsercardsController < ApplicationController

  before_action :set_usercard, only: [:update]

  def index
    @usercard = Usercard.all
  end

  def update
    if @usercard.update(usercard_params)
      render json: @usercard
    else
      render json: @usercard.errors, status: :unprocessable_entity
    end
  end

  private

  def set_usercard
    @usercard = Usercard.find(params[:id])
  end

  def usercard_params
    params.require(:usercard)
  end

end
