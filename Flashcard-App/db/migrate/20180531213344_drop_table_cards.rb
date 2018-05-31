class DropTableCards < ActiveRecord::Migration[5.2]

  def change
    drop_table :cards, force: :cascade
    drop_table :usercards, force: :cascade
    drop_table :decks, force: :cascade
  end
end
