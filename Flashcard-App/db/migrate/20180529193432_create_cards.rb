class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :q_value
      t.string :a_value

      t.timestamps
    end
  end
end
