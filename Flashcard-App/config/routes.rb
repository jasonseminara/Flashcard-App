Rails.application.routes.draw do
  # post 'user_token' => 'user_token#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api' do
    resources :decks
    resources :cards
    resources :users
    resources :favorites
    resources :usercards
    post 'user_token' => 'user_token#create'
  end
end
