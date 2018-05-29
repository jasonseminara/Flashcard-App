class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :hash_password
      t.integer :level
      t.string :title

      t.timestamps
    end
  end
end
