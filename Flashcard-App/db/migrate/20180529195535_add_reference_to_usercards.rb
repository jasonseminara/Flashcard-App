class AddReferenceToUsercards < ActiveRecord::Migration[5.2]
  def change
    add_reference :usercards, :user, foreign_key: true
    add_reference :usercards, :card, foreign_key: true
  end
end
