class DecksController < ApplicationController
  def index
    render json: {
      decks: [
        {'name': 'test'},
        {'name': 'Yes'}
      ]
    }.to_json
  end
end
