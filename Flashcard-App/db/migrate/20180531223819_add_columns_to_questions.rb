class AddColumnsToQuestions < ActiveRecord::Migration[5.2]
  def change
    add_column :questions, :q_value, :string
    add_column :questions, :a_value, :string
    add_column :questions, :created_at, :datetime, null: false
    add_column :questions, :updated_at, :datetime, null: false
  end
end
