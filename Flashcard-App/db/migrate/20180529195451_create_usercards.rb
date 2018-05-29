class CreateUsercards < ActiveRecord::Migration[5.2]
  def change
    create_table :usercards do |t|
      t.integer :score
      t.timestamps
    end
  end
end
