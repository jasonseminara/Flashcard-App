class AddUsersRefToFavorites < ActiveRecord::Migration[5.2]
  def change
    add_reference :favorites, :user, foreign_key: true
    add_reference :favorites, :deck, foreign_key: true
  end
end
