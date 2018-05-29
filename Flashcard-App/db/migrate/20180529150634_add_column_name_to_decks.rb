class AddColumnNameToDecks < ActiveRecord::Migration[5.2]
  def change
    add_column :decks, :name, :string
  end
end
